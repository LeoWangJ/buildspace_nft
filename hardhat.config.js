require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
let projectId = process.env.projectId
let account = process.env.account
module.exports = {
  solidity: "0.8.0",
  networks:{
    rinkeby:{
      url: `https://eth-rinkeby.alchemyapi.io/v2/${projectId}`,
      accounts: [account]
    }
  }
};
