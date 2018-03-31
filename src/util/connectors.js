import { Connect,SimpleSigner } from 'uport-connect'

export let uport = new Connect('Decentralize-me', {
      clientId: '2omfv9jByykxZuEkQosq2orrNWdR8rrsCRN',
      network: 'rinkeby or ropsten or kovan',
      signer: SimpleSigner(process.env.SIMPLE_SIGNER)
    })


export const web3 = uport.getWeb3()

