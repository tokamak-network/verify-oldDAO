const { ethers } = require("hardhat");

async function main() {
    let ton = "0x33a66929dE3559315c928556FcFF449b3E708c62"
    let wton = "0x3FC550D4C381c170D83077c27ff8637a12cE48Fa"    


    const [deployer] = await ethers.getSigners();
    console.log("deplyoer : ", deployer.address)

    const DAOVaultDep = await ethers.getContractFactory("DAOVault");
    const DAOVaultDeployed = await DAOVaultDep.deploy(
        ton,
        wton
    )

    await DAOVaultDeployed.waitForDeployment();
    const deployedAddress2 = await DAOVaultDeployed.getAddress()
    console.log("DAOVault deployed at:", deployedAddress2)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });