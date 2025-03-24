const { ethers } = require("hardhat");

async function main() {

    let ton = "0x33a66929dE3559315c928556FcFF449b3E708c62"
    let proxyimpl = "0xa56d14018c3b82C22B06B0ABFf0C3d65eA8a0988"
    let seigManager = "0xd439DB92Afa684A21496120495F5083B816FC336"
    let layer2Registry = "0x39d0c47576042044f665EeB5276aa490F48441c0"
    let agendaManager = "0xF504ef966feC1960b69745B72c4b8879AcbB41d9"
    let candidateFactory = "0xd6510984FcC24783E6871faAB742587c0256709f"
    let daoVault = "0x6a0031875e6aE55E11F38C080c50C217480519Ae"

    const [deployer] = await ethers.getSigners();
    console.log("deplyoer : ", deployer.address)

    if(daoVault == "" || agendaManager == "") {
      console.log("need input address")
    } else {
      const DAOCommitteeProxyDep = await ethers.getContractFactory("DAOCommitteeProxy");
      const DAOCommitteeProxy = await DAOCommitteeProxyDep.deploy(
          ton,
          proxyimpl,
          seigManager,
          layer2Registry,
          agendaManager,
          candidateFactory,
          daoVault
      )
  
      await DAOCommitteeProxy.waitForDeployment();
  
      const deployedAddress3 = await DAOCommitteeProxy.getAddress()
      console.log("DAOCommitteeProxy deployed at:", deployedAddress3)
    }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });