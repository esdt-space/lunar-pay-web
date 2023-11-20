import { ChangeEvent, useState } from "react";

import { checkIsValidAddress } from "@/utils"
import { cn, formatTokenBalance } from "@/theme/utils"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { EsdtToken } from "@/core/tokens";
import { TokenItem } from "@/core/tokens/components";
import { TokenValueError } from "@/core/tokens/enums";
import { tokenErrorToText } from "@/core/tokens/utils";
import { getTokenErrorForValue } from "@/core/tokens/validation";
import { useTokenTransferMutation } from "@/features/vault/hooks/mutations";

type Props = {
  finishCallback: () => void
  selectedToken: EsdtToken
}

export const TransferAssetComponent = ( props: Props ) => {
  const { selectedToken, finishCallback } = props

  const [amount, setAmount] = useState("")
  const [address, setAddress] = useState("")
  const [addressIsInvalid, setAddressIsInvalid] = useState(false)
  const [tokenValueError, setTokenValueError] = useState<null | TokenValueError>(null)

  const invalidAmountStyle = tokenValueError ? "border-red-500" : ""
  const invalidAddressStyle = addressIsInvalid ? "border-red-500" : ""
  const canPerformOperation = checkIsValidAddress(address) && !getTokenErrorForValue(selectedToken, amount);

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
      setTokenValueError(getTokenErrorForValue(selectedToken, e.target.value));
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
      <TokenItem token={selectedToken} showBalances />

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

      {tokenValueError && <p className={'text-red-500 text-xs ml-2 -mt-2'}>{tokenErrorToText(tokenValueError)}</p>}

      <Input
        type={"text"}
        value={address}
        placeholder='Insert Address'
        onChange={changeAddressHandler}
        className={cn(['text-xs', invalidAddressStyle])}
      />

      {addressIsInvalid && <p className={'text-red-500 text-xs ml-2 -mt-2'}>Address is Invalid</p>}
    </div>

    <div className={'flex flex-1 gap-2'}>
      <Button size={'sm'} className={'flex-1'} onClick={finishCallback}>
        Cancel
      </Button>
      <Button size={'sm'} variant={'primary'} className={'flex-1'} onClick={sendToken} disabled={!canPerformOperation}>
        Confirm
      </Button>
    </div>
  </div>
}