import { useEffect, useState, useRef, useMemo } from 'react'
import { ContractInterface, ethers } from 'ethers'
import { useWallet } from 'use-wallet'
import { ethersRPCProvider } from '../utils'

export const useEthersProvider = () => {
  const { ethereum } = useWallet()
  const refEth = useRef(ethereum)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [provider, setProvider] = useState(
    ethereum ? new ethers.providers.Web3Provider(ethereum as any) : ethersRPCProvider,
  )

  useEffect(() => {
    if (ethereum !== refEth.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setProvider(ethereum ? new ethers.providers.Web3Provider(ethereum as any) : ethersRPCProvider)
      refEth.current = ethereum
    }
  }, [ethereum])

  return provider
}

export const useContract = ({
  contractAddress,
  abi,
  withSigner = false,
}: {
  contractAddress: string
  abi: ContractInterface
  withSigner?: boolean
}) => {
  const ethersProvider = useEthersProvider()

  return useMemo(() => {
    return new ethers.Contract(contractAddress, abi, withSigner ? ethersProvider.getSigner() : ethersProvider)
  }, [abi, contractAddress, ethersProvider, withSigner])
}
