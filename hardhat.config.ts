import fs from "fs";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig, task } from "hardhat/config";
import "hardhat-preprocessor";
import path from "path";
import * as dotenv from "dotenv";
import { HardhatNetworkAccountUserConfig } from "hardhat/types";
dotenv.config();

function initTasksDefinitions() {
  ["demo", "development"].forEach((folder) => {
    const tasksPath = path.join(__dirname, "tasks", folder);
    fs.readdirSync(tasksPath)
      .filter((pth) => pth.includes(".ts"))
      .forEach((task) => {
        require(`${tasksPath}/${task}`);
      });
  });
}

initTasksDefinitions()

const accounts = process.env.PRIVATE_KEY
  ? [process.env.PRIVATE_KEY]
  : process.env.MNEMONIC
    ? {
      mnemonic: process.env.MNEMONIC,
      initialIndex: 0,
      count: 20,
    }
    : []

export const forkAccounts: HardhatNetworkAccountUserConfig[] = [
  {
    privateKey: process.env.PRIVATE_KEY || "",
    balance: "1000000000000000000000000",
  },
];

function getRemappings() {
  return fs
    .readFileSync("remappings.txt", "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => line.trim().split("="));
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: process.env.RPC_URL || "",
      accounts,
    },
    hardhat: {
      hardfork: "london",
      blockGasLimit: 30000000,
      gas: 30000000,
      gasPrice: "auto",
      chainId: 1,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      accounts: forkAccounts,
      loggingEnabled: true,
      forking: {
        url: process.env.RPC_URL || "",
        blockNumber: Number(process.env.FORK_BLOCK_NUMBER),
      },
      allowUnlimitedContractSize: true,
    }
  },
  paths: {
    sources: "./src", // Use ./src rather than ./contracts as Hardhat expects
    cache: "./cache_hardhat", // Use a different cache for Hardhat than Foundry
  },
  // This fully resolves paths for imports in the ./lib directory for Hardhat
  preprocess: {
    eachLine: (hre) => ({
      transform: (line: string) => {
        if (line.match(/^\s*import /i)) {
          getRemappings().forEach(([find, replace]) => {
            if (line.match(find)) {
              line = line.replace(find, replace);
            }
          });
        }
        return line;
      }
    })
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
