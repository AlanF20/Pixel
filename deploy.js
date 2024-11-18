import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  try {
    const NFT = await ethers.getContractFactory('Pixel')
    const nfts = await NFT.deploy()
    const txHash = nfts.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    console.log('Contract deployed to address: ', txReceipt.contractAddress)
  } catch (err) {
    console.log(err)
    throw new Error('Error al subir el contrato')
  }
}

//main()
 // .then(() => process.exit(0))
  //.catch((error) => {
   // console.log(error)
    //process.exit(1)
  //})


// Multi deploy

async function multiDeploy(){
	const owners = ['0x578B5dc7645a6424847C128B17393A08Db9884ee', '0x92d08fd53a85F8eB04198DB72760a36A1828cAe6']
	const requiredApprovals = 2
	const WalletMultiSign = await ethers.getContractFactory('WalletMultiSign')
	const wallet = await WalletMultiSign.deploy(owners, requiredApprovals)
	console.log("Wallet multi sign deployed to: ", wallet.address)
}

multiDeploy()
	.then(() => process.exit(0))
	.catch((error)=>{
		console.log(error)
		process.exit(1)
	})
