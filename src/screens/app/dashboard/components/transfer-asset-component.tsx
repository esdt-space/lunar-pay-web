import { ChangeEvent, useState } from "react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { cn, formatTokenBalance } from "@/theme/utils"
import { checkIsValidAddress, checkTokenHasEnoughBalance } from "@/utils"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { EsdtToken } from "@/features/tokens";
import { TokenLogo } from "@/features/tokens/components";
import { useTokenTransferMutation } from "@/features/vault/hooks/mutations";

type Props = {
  finishCallback: () => void
  selectedToken: EsdtToken | undefined
}

export const TransferAssetComponent = ( props: Props ) => {
  const { selectedToken, finishCallback } = props

  const [amount, setAmount] = useState("")
  const [address, setAddress] = useState("")
  const [addressIsInvalid, setAddressIsInvalid] = useState(false)
  const [amountExceeded, setAmountExceeded] = useState(false)

  const invalidAmountStyle = amountExceeded ? "border-red-500" : ""
  const invalidAddressStyle = addressIsInvalid ? "border-red-500" : ""

  const { mutate: tokenTransferHandler } = useTokenTransferMutation();

  const changeAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if(!checkIsValidAddress(e.target.value)) {
      setAddressIsInvalid(true)
    } else {
      setAddressIsInvalid(false)
    }

    setAddress(e.target.value)
  }

  const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if(selectedToken !== undefined) {
      setAmountExceeded(!checkTokenHasEnoughBalance(selectedToken, parseInt(e.target.value)));
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

    return tokenTransferHandler({
      token: selectedToken,
      amount: Number(amount),
      receiver: address
    })
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

      {amountExceeded && <p className={'text-red-500 text-xs ml-2 -mt-2'}>The amount you added exceeds your assets</p>}

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