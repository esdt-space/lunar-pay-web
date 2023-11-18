import { useMemo, useState } from "react";
import { Trash2 } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { EsdtToken } from "@/core/tokens";
import { useTokensList } from "@/core/tokens/hooks/use-tokens.ts";
import { TokenItem, EsdtTokenSelector } from "@/core/tokens/components";
import { useWhitelistedVaultAddresses, useWhitelistedVaultTokens } from "@/features/vault/hooks";
import {
  useWhitelistTokenIdentifierMutation,
  useRemoveWhitelistedTokenIdentifierMutation,
  useAddAddressToWhitelistMutation,
  useRemoveAddressFromWhitelistMutation
} from "@/features/vault/hooks/mutations";

export function ProtocolSettings() {
  const tokens = useTokensList();
  const [selectedToken, setSelectedToken] = useState<EsdtToken | undefined>(undefined);
  const [tokenSearchValue, setTokenSearchValue] = useState('');
  const [addressToWhitelist, setAddressToWhitelist] = useState('');
  const [addressSearchValue, setAddressSearchValue] = useState('');

  const [animatedTokensDivRef] = useAutoAnimate();
  const [animatedAddressesDivRef] = useAutoAnimate();

  const whitelistedVaultTokens = useWhitelistedVaultTokens();
  const filteredWhitelistVaultTokens = useMemo(() => {
    if(tokenSearchValue.length === 0) return whitelistedVaultTokens;

    return whitelistedVaultTokens.filter(item =>
      item.name.toLocaleLowerCase().includes(tokenSearchValue.toLocaleLowerCase()) ||
      item.identifier.toLocaleLowerCase().includes(tokenSearchValue.toLocaleLowerCase())
    );
  }, [whitelistedVaultTokens, tokenSearchValue]);

  const whitelistedAddresses = useWhitelistedVaultAddresses()
  const filteredWhitelistAddresses = useMemo(() => {
    if(addressSearchValue.length === 0) return whitelistedAddresses;

    return whitelistedAddresses.filter(item =>
      item.toLocaleLowerCase().includes(addressSearchValue.toLocaleLowerCase())
    );
  }, [whitelistedAddresses, addressSearchValue]);

  const { mutate: addTokenToWhitelist } = useWhitelistTokenIdentifierMutation();
  const { mutate: removeTokenFromWhitelist } = useRemoveWhitelistedTokenIdentifierMutation();
  const { mutate: addAddressToWhitelist } = useAddAddressToWhitelistMutation();
  const { mutate: removeAddressFromWhitelist } = useRemoveAddressFromWhitelistMutation();

  const addTokenToWhitelistButtonHandler = () => {
    if(!selectedToken) return false;

    addTokenToWhitelist(selectedToken);
  }

  const addAddressToWhitelistButtonHandler = () => {
    if(!addressToWhitelist) return false;

    addAddressToWhitelist(addressToWhitelist);
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
                className={'mb-3'}
                value={tokenSearchValue}
                placeholder={'Search token'}
                onChange={e => setTokenSearchValue(e.target.value)}
              />

              <div className={'space-y-1'} ref={animatedTokensDivRef}>
                {filteredWhitelistVaultTokens.map(token => (
                  <div key={token.identifier} className={'flex bg-slate-50 p-2 rounded justify-between items-center'}>
                    <TokenItem token={token} />

                    <div className={'space-x-2'}>
                      <Button size={'sm'} variant={'outline'} onClick={() => removeTokenFromWhitelist(token)}>
                        Remove
                        <Trash2 className={'ml-2 w-3 h-3'}/>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
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

              <div className={'space-y-3'} ref={animatedAddressesDivRef}>
                {filteredWhitelistAddresses.map(address => (
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
