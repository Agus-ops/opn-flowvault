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
- Contract address: `0xab785E6Ca642171f4ED4e6b40f4F46e996D01D07`
- Verification status: Fully verified on OPN Testnet Explorer
- Explorer: https://testnet.iopn.tech/address/0xab785E6Ca642171f4ED4e6b40f4F46e996D01D07?tab=contract
- Deploy transaction: `0x5b087bfa25d5b55a422cfcd5e1e387bb24ff44bb98a2a82704a3c475963ebc19`
- First interaction transaction: `0x8870842734cf53d38ab35669c4da8d1db9866951d55bdc1ffb72ed055146f398`
- Compiler: `v0.8.35+commit.47b9dedd`
- Optimizer: enabled, 200 runs
- License: MIT

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

### Phase 1 — Completed

- Deploy OPNFlowVault contract on OPN Testnet
- Execute first native OPN deposit interaction
- Publish source code and deployment scripts
- Verify contract source code on OPN Testnet Explorer

### Phase 2 — Completed

- Launch interactive FlowVault dashboard
- Add wallet connect and disconnect flow
- Display wallet balance, vault balance, total deposits, and total users
- Add deposit and withdraw actions
- Add explorer links, copy buttons, and responsive mobile layout

### Phase 3 — In Progress

- Improve public activity feed from vault events
- Add clearer verified-contract status inside the dashboard
- Add better empty-state and transaction-status messages
- Improve README documentation and builder portfolio presentation

### Phase 4 — Planned

- Add automatic OPN Testnet network switch/add flow
- Improve wallet UX for MetaMask, Rabby, and mobile wallets
- Add optional React/Vite dashboard version
- Evaluate RainbowKit integration for a future V2 frontend

### Phase 5 — Future

- Add reusable FlowVault template for other EVM testnets
- Explore multi-chain variants such as X1 EcoVault or Arc StableVault
- Add lightweight analytics for deposits, withdrawals, and unique users

## License

MIT

## Dashboard Update

The live demo has been upgraded from a static project page into an interactive FlowVault dashboard.

Current dashboard features:

- Wallet connect
- Dashboard disconnect
- OPN Testnet live status badges
- Wallet OPN balance
- FlowVault balance
- Total vault deposits
- Total vault users
- Savings goal progress bar
- Deposit OPN action
- Withdraw 25%, 50%, 75%, or all
- Contract and transaction explorer links
- Copy buttons for contract and transaction hashes
- Recent on-chain activity feed from contract events
- Activity log with shortened transaction hashes
- Responsive mobile layout

This update completes the first version of the Phase 2 dashboard roadmap.
