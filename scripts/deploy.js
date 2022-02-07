const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  await nft.deployed();


  let txn = await nft.makeAnNFT();
  await txn.wait();
  txn = await nft.makeAnNFT();
  await txn.wait();

  console.log("NFT deployed to:", nft.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
