import 'dotenv/config';
import fs from 'fs';
import { ethers } from 'ethers';

if (!process.env.PRIVATE_KEY) throw new Error('Missing PRIVATE_KEY in .env');
if (!process.env.RPC_URL) throw new Error('Missing RPC_URL in .env');
if (!fs.existsSync('deployed.json')) throw new Error('Missing deployed.json. Deploy first.');

const deployed = JSON.parse(fs.readFileSync('deployed.json', 'utf8'));

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(deployed.address, deployed.abi, wallet);

const network = await provider.getNetwork();

console.log('Network chainId:', network.chainId.toString());
console.log('Using wallet:', wallet.address);
console.log('Contract:', deployed.address);

if (network.chainId !== 984n) {
  throw new Error(`Wrong network. Expected OPN Testnet chainId 984, got ${network.chainId}`);
}

const amount = ethers.parseEther('0.001');

console.log('Depositing 0.001 OPN...');
const tx = await contract.deposit({ value: amount });
console.log('Deposit TX:', tx.hash);

await tx.wait();

const bal = await contract.myBalance();
const stats = await contract.vaultStats();

console.log('My vault balance:', ethers.formatEther(bal), 'OPN');
console.log('Vault users:', stats[0].toString());
console.log('Total deposits:', ethers.formatEther(stats[1]), 'OPN');

deployed.interactionTx = tx.hash;
fs.writeFileSync('deployed.json', JSON.stringify(deployed, null, 2));
