const { ethers } = require("hardhat");

async function main() {
    let wton = "0x3FC550D4C381c170D83077c27ff8637a12cE48Fa"
    
    let ton = "0x33a66929dE3559315c928556FcFF449b3E708c62"
    let proxyimpl = "0xa56d14018c3b82C22B06B0ABFf0C3d65eA8a0988"
    let seigManager = "0xd439DB92Afa684A21496120495F5083B816FC336"
    let layer2Registry = "0x39d0c47576042044f665EeB5276aa490F48441c0"
    let agendaManager
    let candidateFactory = "0xd6510984FcC24783E6871faAB742587c0256709f"
    let daoVault

    const [deployer] = await ethers.getSigners();
    console.log("deplyoer : ", deployer.address)

    console.log("1")
    const DAOAgendaManagerDep = await ethers.getContractFactory("DAOAgendaManager");
    const DAOAgendaManager = await DAOAgendaManagerDep.deploy()
    console.log("2");

    // try {
    //     await DAOAgendaManager.waitForDeployment({
    //       timeout: 300000, // 5분
    //       pollingInterval: 10000, // 10초마다 확인
    //     });
    //     console.log(`Contract deployed to: ${await DAOAgendaManager.getAddress()}`);
    // } catch (error) {
    //     console.error("Deployment failed:", error);
    // }

    await DAOAgendaManager.waitForDeployment();
    console.log("3")

    const deployedAddress = await DAOAgendaManager.getAddress()
    console.log("DAOAgendaManager deployed at:", deployedAddress)
    agendaManager = deployedAddress

    // const DAOVaultDep = await ethers.getContractFactory("DAOVault");
    // const DAOVault = await DAOVaultDep.deploy(
    //     ton,
    //     wton
    // )

    // await DAOVault.waitForDeployment();
    // const deployedAddress2 = await DAOVault.getAddress()
    // console.log("DAOVault deployed at:", deployedAddress2)
    // daoVault = deployedAddress2

    // const DAOCommitteeProxyDep = await ethers.getContractFactory("DAOCommitteeProxy");
    // const DAOCommitteeProxy = await DAOCommitteeProxyDep.deploy(
    //     ton,
    //     proxyimpl,
    //     seigManager,
    //     layer2Registry,
    //     agendaManager,
    //     candidateFactory,
    //     daoVault
    // )

    // await DAOCommitteeProxy.waitForDeployment();

    // const deployedAddress3 = await DAOCommitteeProxy.getAddress()
    // console.log("DAOCommitteeProxy deployed at:", deployedAddress3)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });