import { useMemo, useState } from "react";
import { Trash2 } from "lucide-react";

import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { EsdtToken, useEsdtTokensList } from "@/features/tokens";
import { EsdtTokenSelector } from "@/features/tokens/components";

import { useWhitelistedVaultAddresses, useWhitelistedVaultTokens } from "@/features/vault/hooks";
import {
  addAddressToWhitelistInteraction,
  addTokenToWhitelistInteraction,
  removeAddressFromWhitelistInteraction,
  removeTokenFromWhitelistInteraction
} from "@/features/vault/contract/interactions";

export function ProtocolSettings() {
  const tokens = useEsdtTokensList();
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [tokenSearchValue, setTokenSearchValue] = useState('');
  const [addressToWhitelist, setAddressToWhitelist] = useState('');
  const [addressSearchValue, setAddressSearchValue] = useState('');

  const whitelistedVaultTokens = useWhitelistedVaultTokens();
  const filteredWhitelistVaultTokens = useMemo(() => {
    if(tokenSearchValue.length === 0) return whitelistedVaultTokens;

    return whitelistedVaultTokens.filter(item =>
      item.name.toLocaleLowerCase().includes(tokenSearchValue.toLocaleLowerCase()) ||
      item.identifier.toLocaleLowerCase().includes(tokenSearchValue.toLocaleLowerCase())
    );
  }, [whitelistedVaultTokens, tokenSearchValue]);

  const whitelistedAddresses = useWhitelistedVaultAddresses()


  const addTokenToWhitelistButtonHandler = () => {
    if(!selectedToken) return false;

    addTokenToWhitelistInteraction(selectedToken);
  }

  const removeTokenFromWhitelist = (token: EsdtToken) => {
    removeTokenFromWhitelistInteraction(token);
  }

  const addAddressToWhitelistButtonHandler = () => {
    if(!addressToWhitelist) return false;

    addAddressToWhitelistInteraction(addressToWhitelist);
  }

  const removeAddressFromWhitelist = (address: string) => {
    removeAddressFromWhitelistInteraction(address);
  }

  return (
    <div className={'flex flex-1 flex-col lg:flex-row gap-4 md:gap-8'}>
      <Card className={'flex-1 shadow'}>
        <CardHeader>
          <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
            Tokens Whitelist
          </CardTitle>
        </CardHeader>

        <CardContent className={'space-y-3'}>
          <div className={'grid sm:flex gap-1'}>
            <EsdtTokenSelector
              tokens={tokens}
              value={selectedToken}
              onChange={(token) => setSelectedToken(token)}
            />

            <Button onClick={addTokenToWhitelistButtonHandler}>Whitelist</Button>
          </div>

          {whitelistedVaultTokens.length > 0 && (
            <div className={'space-y-3'}>
              <Separator />

              <Input
                value={tokenSearchValue}
                placeholder={'Search token'}
                onChange={e => setTokenSearchValue(e.target.value)}
              />

              {filteredWhitelistVaultTokens.map(token => (
                <div key={token.identifier} className={'flex justify-between items-center'}>
                  <div>
                    <div className={'text-sm font-medium'}>{token.name}</div>
                    <div className={'text-xs text-muted-foreground'}>{token.identifier}</div>
                  </div>
                  <div className={'self-end space-x-2'}>
                    <Button size={'sm'} variant={'outline'} onClick={() => removeTokenFromWhitelist(token)}>
                      Remove
                      <Trash2 className={'ml-2 w-3 h-3'}/>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>

      </Card>

      <Card className={'flex-1 shadow overflow-hidden'}>
        <CardHeader>
          <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
            Address Whitelist
          </CardTitle>
        </CardHeader>

        <CardContent className={'space-y-3'}>
          <div className={'grid sm:flex gap-1'}>
            <Input
              value={addressToWhitelist}
              placeholder={'Enter address'}
              onChange={e => setAddressToWhitelist(e.target.value)}
            />

            <Button onClick={addAddressToWhitelistButtonHandler}>Whitelist</Button>
          </div>

          {whitelistedAddresses.length > 0 && (
            <div className={'flex flex-col gap-3'}>
              <Separator/>

              <Input
                value={addressSearchValue}
                placeholder={'Search addresses'}
                onChange={e => setAddressSearchValue(e.target.value)}
              />

              <div className={'space-y-3'}>
                {whitelistedAddresses.map(address => (
                  <div key={address} className={'flex flex-1 justify-between items-center gap-2'}>
                    <div className={'truncate text-sm font-medium'}>{address}</div>
                    <Button size={'sm'} variant={'outline'} onClick={() => removeAddressFromWhitelist(address)}>
                      Remove
                      <Trash2 className={'ml-2 w-3 h-3'}/>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}