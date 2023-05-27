import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";

const deployFunc: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying the Greeter contract...");
  const greeter = await deploy("Greeter", {
    from: deployer,
    args: ["Hello Human, Greetings from the greeter contract!!"],
    log: true,
  });

  log(`Deployed Greeter contract to ${greeter.address}`);
};

export default deployFunc;
