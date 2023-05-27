/** @type import('hardhat/config').HardhatUserConfig */
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config"

// module.exports = {
//   solidity: "0.8.18",
// };

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
  },
  solidity: "0.8.18",
  namedAccounts: {
    deployer: {
      default: 0,
   },
  },
};

export default config;