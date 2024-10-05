import type { Fischietto } from "../../types";
import axios from "axios";
import hre from "hardhat";

export async function deployFischiettoFixture(): Promise<{
  fischietto: Fischietto;
  address: string;
}> {
  const accounts = await hre.ethers.getSigners();
  const contractOwner = accounts[0];

  const Fischietto = await hre.ethers.getContractFactory("Fischietto");
  const fischietto = await Fischietto.connect(contractOwner).deploy();
  await fischietto.waitForDeployment();
  const address = await fischietto.getAddress();
  return { fischietto, address };
}

export async function getTokensFromFaucet() {
  if (hre.network.name === "localfhenix") {
    const signers = await hre.ethers.getSigners();

    if (
      (await hre.ethers.provider.getBalance(signers[0].address)).toString() ===
      "0"
    ) {
      await hre.fhenixjs.getFunds(signers[0].address);
    }
  }
}
