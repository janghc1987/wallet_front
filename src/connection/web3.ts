import Web3 from 'web3';

// Web 3 connection
// const web3 = new Web3(Web3.givenProvider)
//개발
//const web3 = Web3.givenProvider == null ? new Web3('https://rinkeby.infura.io/v3/' + 'af6a5e69a2ad41bfbb35ddab9298c69c') : new Web3(Web3.givenProvider);
//운영
const web3 = Web3.givenProvider == null ? new Web3('https://mainnet.infura.io/v3/' + '556dcbd3db8047ff86cebe6befa6ba11') : new Web3(Web3.givenProvider);
export default web3;