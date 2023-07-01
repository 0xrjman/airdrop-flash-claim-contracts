import { task } from "hardhat/config";
import deployFlashClaim from "../../scripts/development/deployFlashClaim"

task("deploy:flash-claim", "Deploy Flash Claim").setAction(async (_, DRE) => {
    await deployFlashClaim(DRE);
});
