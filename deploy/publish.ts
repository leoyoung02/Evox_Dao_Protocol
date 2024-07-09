import { config } from "../deploy.config"
import hre from 'hardhat'

async function main() {
  await hre.tally.publishDao({
    name: "My DAO",
    contracts: {
      governor: {
        address: config.init.governor,
        type: "OPENZEPPELINGOVERNOR",
      },
      token: {
        address: config.init.token,
        type: "ERC20", 
      }
    }
  })

};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });