// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

error notAnOwner();

contract Greeter {
    address private owner;
    string private greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
        owner = msg.sender;
    }

    modifier onlyOwner {
        if (msg.sender != owner) {
            revert notAnOwner();
        }
       _;
    }

    function updateGreeting(string memory _greeting) public onlyOwner {
        console.log("Updating the greeting to: ", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory _greeting) {
        return greeting;
    }
}