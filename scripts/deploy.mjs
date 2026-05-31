import 'dotenv/config';
import fs from 'fs';
import solc from 'solc';
import { ethers } from 'ethers';

if (!process.env.PRIVATE_KEY) throw new Error('Missing PRIVATE_KEY in .env');
if (!process.env.RPC_URL) throw new Error('Missing RPC_URL in .env');

const contractPath = 'contracts/OPNFlowVault.sol';
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'OPNFlowVault.sol': { content: source }
  },
  settings: {
    optimizer: { enabled: true, runs: 200 },
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode']
      }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
  for (const err of output.errors) console.log(err.formattedMessage);
  const hasError = output.errors.some(e => e.severity === 'error');
  if (hasError) process.exit(1);
}

const compiled = output.contracts['OPNFlowVault.sol']['OPNFlowVault'];
const abi = compiled.abi;
const bytecode = compiled.evm.bytecode.object;

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const network = await provider.getNetwork();

console.log('Network chainId:', network.chainId.toString());
console.log('Deploying from:', wallet.address);

if (network.chainId !== 984n) {
  throw new Error(`Wrong network. Expected OPN Testnet chainId 984, got ${network.chainId}`);
}

const factory = new ethers.ContractFactory(abi, bytecode, wallet);
const contract = await factory.deploy();
await contract.waitForDeployment();

const address = await contract.getAddress();
const deployTx = contract.deploymentTransaction().hash;

const data = {
  name: 'OPNFlowVault',
  network: 'OPN Testnet',
  chainId: Number(network.chainId),
  address,
  deployTx,
  abi
};

fs.writeFileSync('deployed.json', JSON.stringify(data, null, 2));

console.log('Contract:', address);
console.log('Deploy TX:', deployTx);
