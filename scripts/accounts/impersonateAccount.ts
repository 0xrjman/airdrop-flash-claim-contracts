import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";

export default async function impersonateAccount(
    hre: HardhatRuntimeEnvironment,
    account: string
) {
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [account],
    });

    const signer = await hre.ethers.provider.getSigner(account);
    return signer
}