/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FHE",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FHE__factory>;
    getContractFactory(
      name: "FheOps",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FheOps__factory>;
    getContractFactory(
      name: "Precompiles",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Precompiles__factory>;
    getContractFactory(
      name: "Fischietto",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Fischietto__factory>;

    getContractAt(
      name: "FHE",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FHE>;
    getContractAt(
      name: "FheOps",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FheOps>;
    getContractAt(
      name: "Precompiles",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Precompiles>;
    getContractAt(
      name: "Fischietto",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Fischietto>;

    deployContract(
      name: "FHE",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FHE>;
    deployContract(
      name: "FheOps",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FheOps>;
    deployContract(
      name: "Precompiles",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Precompiles>;
    deployContract(
      name: "Fischietto",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Fischietto>;

    deployContract(
      name: "FHE",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FHE>;
    deployContract(
      name: "FheOps",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FheOps>;
    deployContract(
      name: "Precompiles",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Precompiles>;
    deployContract(
      name: "Fischietto",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Fischietto>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
