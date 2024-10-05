import type { Signers } from "../types";
import { deployFischiettoFixture, getTokensFromFaucet } from "./Fischietto.fixture";
import hre from "hardhat";

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
    it("pippo", async function () {
      await this.fischietto.connect(this.signers.admin).whistle(
        1, "Boss mobs me", 1, "BeatData", "xxx", "yyy"
      );
      let report = await this.fischietto.reports(1);
      console.log(report);
    });
  });
});
