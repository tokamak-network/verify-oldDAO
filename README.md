# Old DAOContract Deploy & Verify

A repo that deploys DAOContracts for older environments.

Try running some of the following tasks:

# 1. Install the environment
```shell=
git clone https://github.com/tokamak-network/verify-oldDAO.git
npm install
cp .env.sample .env

//Enter data in .env
```

# 2. Deploy the Contract
```shell=
//The current settings are based on sepolia.

//DAOAgendaManager
npx hardhat run scripts/deployAgendaManager.js --network YOU_WANT_TO_DEPLOY_NETWORK

//DAOVault
//Go to the scripts/deployDAOVault.js file and check the ton and wton addresses.
npx hardhat run scripts/deployDAOVault.js --network YOU_WANT_TO_DEPLOY_NETWORK

//DAOCommitteeProxy
//Go to the scripts/deployDAOCommitteeProxy.js file and check the addresses.
npx hardhat run scripts/deployDAOCommitteeProxy.js --network YOU_WANT_TO_DEPLOY_NETWORK
```


# 3. Verify the Contract
```shell=
//DAOAgendaManager
npx hardhat verify DEPLOYED_ADDRESS --network DEPLYOED_NETWORK

//DAOVault
//Go to the arguments-daoVault.js file and enter the addresses in the order of ton and wton that you deployed.
npx hardhat verify --constructor-args arguments-daoVault.js  DEPLOYED_ADDRESS --network DEPLYOED_NETWORK

//DAOCommitteeProxy
//Go to the arguments.js file and enter the address in the order of input to the constructor of DAOCommitteeProxy.
npx hardhat verify --constructor-args arguments.js  DEPLOYED_ADDRESS --network DEPLYOED_NETWORK
```


# 4. Result (sepolia)
DAOAgendaManager : https://sepolia.etherscan.io/address/0xF504ef966feC1960b69745B72c4b8879AcbB41d9#code
DAOVault : https://sepolia.etherscan.io/address/0x6a0031875e6aE55E11F38C080c50C217480519Ae#code
DAOCommitteeProxy : https://sepolia.etherscan.io/address/0x79C0854117e860918d5291199448C4553DaB7251#code


