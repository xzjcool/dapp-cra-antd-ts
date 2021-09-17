import { ethers } from 'ethers'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID as string, 10)

const NODE_RPC = chainId === 56 ? process.env.REACT_APP_NODE_TESTNEET : process.env.REACT_APP_NODE

export const ethersRPCProvider = new ethers.providers.JsonRpcProvider(NODE_RPC)
