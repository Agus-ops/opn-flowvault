# OPN FlowVault

OPN FlowVault is a simple native OPN vault built for OPN Testnet.

## Overview

This project demonstrates a basic DeFi primitive on OPN Chain. Users can deposit native OPN, track their vault balance, and withdraw anytime.

## Features

- Native OPN deposit
- User balance tracking
- Partial withdrawal
- Withdraw all
- Vault deposit and withdraw events
- Public vault statistics
- Deployment and interaction scripts

## Network

- Network: OPN Testnet
- Chain ID: 984
- RPC: https://testnet-rpc.iopn.tech

## Smart Contract

- Contract name: OPNFlowVault
- Contract address: 0xab785E6Ca642171f4ED4e6b40f4F46e996D01D07
- Deploy transaction: 0x5b087bfa25d5b55a422cfcd5e1e387bb24ff44bb98a2a82704a3c475963ebc19
- Interaction transaction: 0x8870842734cf53d38ab35669c4da8d1db9866951d55bdc1ffb72ed055146f398

## Tech Stack

- Solidity
- Node.js
- ethers.js
- solc

## Setup

Run npm install, then copy .env.example to .env and add a burner wallet private key.

## Scripts

Deploy: node scripts/deploy.mjs
Interact: node scripts/interact.mjs

## Roadmap

Phase 1: deploy contract, interact with deposit, publish source code.
Phase 2: add frontend dashboard with deposit and withdraw buttons.
Phase 3: add vault analytics and public activity feed.

## License

MIT
