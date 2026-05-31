// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title OPN FlowVault
/// @notice A simple native OPN vault for deposits, withdrawals, and on-chain balance tracking.
contract OPNFlowVault {
    address public immutable owner;
    uint256 public totalDeposits;
    uint256 public totalUsers;

    mapping(address => uint256) public balances;
    mapping(address => bool) public hasDeposited;

    event VaultDeposit(address indexed user, uint256 amount, uint256 newBalance);
    event VaultWithdraw(address indexed user, uint256 amount, uint256 remainingBalance);

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {
        deposit();
    }

    function deposit() public payable {
        require(msg.value > 0, "Amount must be greater than zero");

        if (!hasDeposited[msg.sender]) {
            hasDeposited[msg.sender] = true;
            totalUsers += 1;
        }

        balances[msg.sender] += msg.value;
        totalDeposits += msg.value;

        emit VaultDeposit(msg.sender, msg.value, balances[msg.sender]);
    }

    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient vault balance");

        balances[msg.sender] -= amount;
        totalDeposits -= amount;

        (bool ok, ) = payable(msg.sender).call{value: amount}("");
        require(ok, "Withdraw failed");

        emit VaultWithdraw(msg.sender, amount, balances[msg.sender]);
    }

    function withdrawAll() external {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No balance to withdraw");

        balances[msg.sender] = 0;
        totalDeposits -= amount;

        (bool ok, ) = payable(msg.sender).call{value: amount}("");
        require(ok, "Withdraw failed");

        emit VaultWithdraw(msg.sender, amount, 0);
    }

    function myBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function vaultStats() external view returns (uint256 users, uint256 deposits) {
        return (totalUsers, totalDeposits);
    }
}
