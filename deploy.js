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

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
