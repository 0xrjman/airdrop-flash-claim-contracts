import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";

export default async function deployFlashClaim(
    hre: HardhatRuntimeEnvironment
): Promise<void> {
    // staging: 0xF6d07265E9507233c5d0e524D146dF2794cE30c5
    // dev: 0x43Ef0623163cB44862cE2D01704CECF2c8714b3d
    // mainnet: 0x638a98BBB92a7582d07C52ff407D49664DC8b3Ee
    const poolAddress = "0x638a98BBB92a7582d07C52ff407D49664DC8b3Ee"
    const [account] = await hre.ethers.getSigners();

    console.log(`Deployer address: ${await account.getAddress()}`)
    console.log(`Deploying ...`)

    const AirdropFlashClaimReceiverFactory =
        await hre.ethers.getContractFactory("AirdropFlashClaimReceiver");
    const AirdropFlashClaimReceiver = await AirdropFlashClaimReceiverFactory.deploy(poolAddress, {
        gasLimit: 5000000,
        type: 2,
        maxFeePerGas: "20000000000", //200G
        maxPriorityFeePerGas: "2000000000", //3G
    });
    await AirdropFlashClaimReceiver.deployed();
    console.log("AirdropFlashClaimReceiver deploy to:", AirdropFlashClaimReceiver.address);

    const UserFlashclaimRegistryFactory = await hre.ethers.getContractFactory("UserFlashclaimRegistry");
    const UserFlashclaimRegistry = await UserFlashclaimRegistryFactory.deploy(
        AirdropFlashClaimReceiver.address,
        {
            gasLimit: 5000000,
            type: 2,
            maxFeePerGas: "20000000000", //200G
            maxPriorityFeePerGas: "2000000000", //3G
        }
    );
    await UserFlashclaimRegistry.deployed();
    console.log("UserFlashclaimRegistry deploy to:", UserFlashclaimRegistry.address);
}