import type { Signers } from "../types";
import { deployFischiettoFixture, getTokensFromFaucet } from "./Fischietto.fixture";
import hre from "hardhat";

function stringToUint256(input: string): bigint {
    let result = BigInt(0);

    for (let i = 0; i < 32; i++) {
        const asciiValue = input.charCodeAt(i);

        if (asciiValue < 0 || asciiValue > 255) {
            throw new Error("Non ASCII character");
        }

        result = (result << BigInt(8)) + BigInt(asciiValue);
    }

    return result;
}

function uint256ToString(input: bigint): string {
    const chars: string[] = [];

    for (let i = 0; i < 32; i++) {
        const byte = Number(input & BigInt(0xff)); // 0xff è 255 in decimale

        chars.push(String.fromCharCode(byte));

        input >>= BigInt(8);
    }

    return chars.reverse().join('');
}

async function createPermitForContract(
  hre: HardhatRuntimeEnvironment,
  contractAddress: string,
): Promise<any> {
  const provider = hre.ethers.provider;
  const signer = await hre.ethers.getSigners();
  const fhenixjs = hre.fhenixjs;

  const permit = await fhenixjs.generatePermit(contractAddress, provider, signer[0]);
  return fhenixjs.extractPermitPermission(permit);
}

async function encryptMessage(fhenixjs: any, message: string): BigInt[] {
  if (message.length >= 128) {
    throw new Error(`The string ${message} is ${message.length - 128} too long`)
  }
  const paddedMessage = message.padEnd(128, " ");
  return Promise.all([
    paddedMessage.slice(0, 32),
    paddedMessage.slice(32, 64),
    paddedMessage.slice(64, 96),
    paddedMessage.slice(96, 128)
  ].map(stringToUint256).map(m => fhenixjs.encrypt_uint256(m)));
}

async function decryptMessage(ss: string[], fischiettoAddress): string {
  return (await Promise.all(ss.map(s => hre.fhenixjs.unseal(fischiettoAddress, s)))).map(uint256ToString).join("");
}

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    // get tokens from faucet if we're on localfhenix and don't have a balance
    await getTokensFromFaucet();

    const { fischietto, address } = await deployFischiettoFixture();
    this.fischietto = fischietto;

    // initiate fhenixjs
    this.fhenixjs = hre.fhenixjs;
    this.permission = await createPermitForContract(hre, address);

    // set admin account/signer
    const signers = await hre.ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Fischietto", function () {
    it("Add a report", async function () {

      const eMessage = await encryptMessage(fhenixjs, `
Nel mezzo del cammin di nostra vita
mi ritrovai per una selva oscura,
ché la diritta via era smarrita.    
      `);

      await this.fischietto.connect(this.signers.admin).whistle(
        1, eMessage, 1, "BeatData", "xxx", "yyy"
      );

      const encryptedMessage = await this.fischietto.getMessage(1, this.permission);

      console.log(await decryptMessage(encryptedMessage, await this.fischietto.getAddress()));   
    });
  });
});
