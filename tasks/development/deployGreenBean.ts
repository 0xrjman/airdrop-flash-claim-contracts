import { task } from "hardhat/config";
import deployGreenBean from "../../scripts/development/deployGreenBean"

task("deploy:green-bean", "Deploy Green Bean").setAction(async (_, DRE) => {
    await deployGreenBean(DRE);
});
