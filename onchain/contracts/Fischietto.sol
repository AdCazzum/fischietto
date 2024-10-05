// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";
import {Permissioned, Permission} from "@fhenixprotocol/contracts/access/Permissioned.sol";

contract Fischietto is Permissioned {
  struct Report {
    EncryptedMessage eMessage;
    uint256 timestamp;
    string company;
    string proof;
    string kid;
  }

  struct EncryptedMessage {
    euint256 part1;
    euint256 part2;
    euint256 part3;
    euint256 part4;
  }

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  mapping(uint256 => Report) public reports;
  mapping(uint256 => bool) public reportExists;
  // mapping(uint256 => uint256) public votes;

  function getReport(
    uint256 id 
  ) view external returns(Report memory report) {
    report = reports[id];
  }

  function whistle(
    uint256 _id,
    inEuint256[4] calldata _eMessage,
    uint256 _timestamp,
    string calldata _company,
    string calldata _proof,
    string calldata _kid
  ) external {
    require(reportExists[_id] == false, "Report already exist");

    reports[_id] = Report({
      eMessage: EncryptedMessage({
        part1: FHE.asEuint256(_eMessage[0]),
        part2: FHE.asEuint256(_eMessage[1]),
        part3: FHE.asEuint256(_eMessage[2]),
        part4: FHE.asEuint256(_eMessage[3])
      }),
      timestamp: _timestamp,
      company: _company,
      proof: _proof,
      kid: _kid
    });
  }

  function getMessage(
    uint256 id, 
    Permission memory permission
  ) external view onlySender(permission) returns (string[4] memory message){
    message[0] = FHE.sealoutput(reports[id].eMessage.part1, permission.publicKey);
    message[1] = FHE.sealoutput(reports[id].eMessage.part2, permission.publicKey);
    message[2] = FHE.sealoutput(reports[id].eMessage.part3, permission.publicKey);
    message[3] = FHE.sealoutput(reports[id].eMessage.part4, permission.publicKey);
  }

  // function vote() external {}
}
