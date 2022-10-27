const ethers = require('ethers')

function singUp() {
    if(!window.ethereum) {
        window.alert('É necessário possuir carteira metamask')
    }   
}

function singIn() {
    if(!window.ethereum) {
        window.alert('É necessário possuir carteira metamask')
    } 
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const address = provider.send('eth_requestAccounts', [])
}

module.exports= {singIn,singUp}