import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";

// Dev AZUKI: 0xF8d582D57dB83E315cc4BB553afDD67CBfd45d7E
// Staging AZUKI: 0xD9f2065804D70f4DC65fD164457A81097C7737Ee
// Mainnet AZUKI: 0xED5AF388653567Af2F388E6224dC7C4b3241C544
export default async function deployGreenBean(
    hre: HardhatRuntimeEnvironment
): Promise<void> {
    const [account] = await hre.ethers.getSigners();

    console.log(`Deployer address: ${await account.getAddress()}`)
    console.log(`Deploying ...`)

    const AZUKI = "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
    const GreenBean = await hre.ethers.getContractFactory("GreenBean");
    const greenBean = await GreenBean.deploy(
        AZUKI,
        20000,
    );
    await greenBean.deployed();

    console.log(`GreenBean deployed to: ${greenBean.address}`);

    const canClaims = await greenBean.getCanClaims([1]);
    console.log(`AZUKI #[1] can claims: ${canClaims}`);

    // console.log(`Make AZUKI claimable ...`);
    // (await greenBean.setClaimState(true)).wait();
    // console.log(`Break transfer lock ...`);
    // (await greenBean.breakLock()).wait();

    // (await greenBean.setCanClaim([420, 221])).wait();
    // console.log(`AZUKI #[420, 221] can claims: ${await greenBean.getCanClaims([420, 221])}`);
}