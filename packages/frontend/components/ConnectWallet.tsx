import {
  Button,
  Flex, Menu,
  MenuButton, MenuItem, MenuList, Text
} from '@chakra-ui/react'
import { env } from '@lib/environment'
import { ethers } from 'ethers'
import Link from 'next/link'
import React, { useState } from 'react'
import useAsyncEffect from 'use-async-effect'
import { useAccount, useConnect } from 'wagmi'
import { BlockiesAvatar } from './BlockiesAvatar'
import ConnectWalletButton from './ConnectWalletButton'

function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

function ConnectWallet(): JSX.Element {
  const [{ data, error }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount()
  const [ensDomain, setEnsDomain] = useState('')
  useAsyncEffect(async() => {
    if (!accountData?.address) {
      setEnsDomain('')
      return
    }
    setEnsDomain(await ethers.getDefaultProvider(env.rpc.mainnet).lookupAddress(accountData?.address))
  },[accountData?.address])

  return (
    <>
      {accountData ? (
        <Flex
          order={[-1, null, null, 2]}
          alignItems={'center'}
          justifyContent={['flex-start', null, null, 'flex-end']}
        >
          {/* <Balance /> */}
          <Link href={`/users/${(accountData?.address || '').toLowerCase()}`} passHref>
            <div>
              <BlockiesAvatar address={accountData.address} ml="4" borderRadius={'full'} cursor='pointer'/>
            </div>
          </Link>
          {/* <Image ml="4" src={accountData.ens?.avatar} alt="ENS Avatar" /> */}
          <Menu placement="bottom-end" >
            <MenuButton as={Button} ml="4">
              <Flex direction="column">
                <Text>{ensDomain || truncateHash(accountData.address)}</Text>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={disconnect}>Disconnect</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <ConnectWalletButton />
      )}
    </>
  )
}

export default ConnectWallet
