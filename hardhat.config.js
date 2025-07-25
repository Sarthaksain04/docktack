require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync("secrete.txt").toString(); 

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 4202,
    },

    BitTorrent: {
      url: "https://pre-rpc.bt.io/",
      accounts: [privateKey],
      gasPrice: 1000000000,
    },
  },
  solidity: "0.8.28",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};

// 0x0a87D9B8e7d9190736244B70775800d52396AD0B  