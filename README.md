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
- Contract address: Pending deployment
- Deploy transaction: Pending deployment
- Interaction transaction: Pending deployment

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
