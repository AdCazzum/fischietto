import type { Signers } from "../types";
import { deployFischiettoFixture, getTokensFromFaucet } from "./Fischietto.fixture";
import hre from "hardhat";

function stringToUint256(input: string): bigint {
    input = input.padEnd(32, ' ');
  
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

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    // get tokens from faucet if we're on localfhenix and don't have a balance
    await getTokensFromFaucet();

    const { fischietto, address } = await deployFischiettoFixture();
    this.fischietto = fischietto;

    // initiate fhenixjs
    this.fhenixjs = hre.fhenixjs;

    // set admin account/signer
    const signers = await hre.ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Fischietto", function () {
    it("Add a report", async function () {

      const foo = await this.fhenixjs.encrypt_uint256(stringToUint256("ciao"));

      let eMessage = [
        foo,
        foo,
        foo,
        foo
      ];
      await this.fischietto.connect(this.signers.admin).whistle(
        1, eMessage, 1, "BeatData", "xxx", "yyy"
      );
      let report = await this.fischietto.reports(1);
      let message = await this.fischietto.getMessage(1);
      console.log(uint256ToString(message[0]));
    });
  });
});
