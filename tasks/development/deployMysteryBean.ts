import { task } from "hardhat/config";
import deployMysteryBean from "../../scripts/development/deployMysteryBean"

task("deploy:mystery-bean", "Deploy Mystery Bean").setAction(async (_, DRE) => {
    await deployMysteryBean(DRE);
});
