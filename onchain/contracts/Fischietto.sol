// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";

contract Fischietto {
  struct Report {
    string message;
    uint256 timestamp;
    string company;
    string proof;
    string kid;
  }

  mapping(uint256 => Report) public reports;

  function whistle(
    uint256 _id,
    string calldata _message,
    uint256 _timestamp,
    string calldata _company,
    string calldata _proof,
    string calldata _kid
  ) external {
    // TODO require that the id is not already taken
    reports[_id] = Report({
      message: _message,
      timestamp: _timestamp,
      company: _company,
      proof: _proof,
      kid: _kid
    });
  }
}
