import { useState } from "react";

import { cn, formatTokenBalance } from "@/theme/utils"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { checkIsValidAddress, checkIsValidAmount } from "@/utils"
import { EsdtToken } from "@/features/tokens";
import { transferTokenInteraction } from "@/features/vault/contract/interactions";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";
import { TokenLogo } from "@/features/tokens/components";

type Props = {
  finishCallback: () => void
  selectedToken: EsdtToken | undefined
}

export const TransferAssetComponent = ( props: Props ) => {
  const { selectedToken, finishCallback } = props

  const [amount, setAmount] = useState("")
  const [address, setAddress] = useState("")
  const [addressIsInvalid, setAddressIsInvalid] = useState(false)
  const [amountExceedsAssets, setAmountEsceedsAssets] = useState(false)

  const invalidAmountStyle = amountExceedsAssets ? "border-red-500" : ""
  const invalidAddressStyle = addressIsInvalid ? "border-red-500" : ""

  const changeAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!checkIsValidAddress(e.target.value)) {
      setAddressIsInvalid(true)
    } else {
      setAddressIsInvalid(false)
    }

    setAddress(e.target.value)
  }

  const changeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(selectedToken !== undefined) {
      let isValid = checkIsValidAmount(selectedToken, parseInt(e.target.value))
      setAmountEsceedsAssets(isValid)
    }

    setAmount(e.target.value)
  }

  const getBalanceNumber = () => {
    if(selectedToken) {
      return setAmount(formatTokenBalance(selectedToken.balance, selectedToken.decimals).toString())
    }
  }

  const sendToken = () => {
    if(selectedToken === undefined) {
      return
    }

    return transferTokenInteraction(selectedToken, Number(amount), address)
  }

  return <div className={'flex flex-1 flex-col gap-4'}>
    <div className={'flex flex-1 flex-col gap-2'}>
      <div className={'flex flex-1 justify-between items-center p-2'}>
        <div className={'flex gap-1'}>
          <TokenLogo token={selectedToken ? selectedToken : new EsdtToken()} />
          <div>
            <div className={'text-sm font-medium'}>{selectedToken && selectedToken.name}</div>
            <div className={'text-xs text-muted-foreground'}>{selectedToken && selectedToken.identifier}</div>
          </div>
        </div>
        <div>
          <FormatAmount
            value={selectedToken ? selectedToken.balance : ""}
            token={selectedToken && selectedToken.identifier}
            decimals={selectedToken && selectedToken.decimals}
            digits={5}
            showLabel={false}
          />
        </div>
      </div>

      <div className={cn(['flex flex-1 justify-between items-center border rounded-md', invalidAmountStyle])}>
        <Input
          value={amount}
          type={"number"}
          placeholder='Enter Amount'
          style={{boxShadow: 'none'}}
          className={'border-none text-xs'}
          onChange={changeAmountHandler}
        />

        <div className={'cursor-pointer mr-3'} onClick={getBalanceNumber}>
          <p className="font-extrabold">MAX</p>
        </div>
      </div>
      {amountExceedsAssets && <p className={'text-red-500 text-xs ml-2 -mt-2'}>The amount you added exceeds your assets</p>}

      <Input
        type={"text"}
        value={address}
        placeholder='Insert Address'
        onChange={changeAddressHandler}
        className={cn(['text-xs', invalidAddressStyle])}
      />
      {addressIsInvalid && <p className={'text-red-500 text-xs ml-2 -mt-2'}>Address is Invalid</p>}
    </div>

    <div className={'flex flex-1 justify-between'}>
      <Button size={'sm'} variant={'outline'} onClick={finishCallback} >
        Cancel
      </Button>
      <Button size={'sm'} variant={'outline'} onClick={sendToken} >
        Confirm
      </Button>
    </div>
  </div>
}