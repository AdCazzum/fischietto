// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";

contract Fischietto {
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

  mapping(uint256 => Report) public reports;
  // mapping(uint256 => uint256) public votes;

  function whistle(
    uint256 _id,
    inEuint256[4] calldata _eMessage,
    uint256 _timestamp,
    string calldata _company,
    string calldata _proof,
    string calldata _kid
  ) external {
    // TODO require that the id is not already taken
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

  function getMessage(uint256 id) external view returns (uint256[4] memory message){
    message[0] = FHE.decrypt(reports[id].eMessage.part1);
    message[1] = FHE.decrypt(reports[id].eMessage.part2);
    message[2] = FHE.decrypt(reports[id].eMessage.part3);
    message[3] = FHE.decrypt(reports[id].eMessage.part4);
  }

  // function vote() external {}
}
