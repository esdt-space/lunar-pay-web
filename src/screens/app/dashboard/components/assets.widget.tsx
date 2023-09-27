import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { EsdtToken, EsdtTokensList } from "@/features/tokens"
import { transferTokenInteraction } from "@/features/vault/contract/interactions"
import { cn, formatTokenBalance } from "@/theme/utils"
import { checkIsValidAddress } from "@/utils"
import { Wallet } from "lucide-react"
import { useState } from "react"

type Props = {
    assetSearchValue: string
    setAssetSearchValue: (input: string) => void
    filteredVaultTokens: EsdtTokensList
}

export const DashboarAssetsWidget = (props: Props) => {
    const { assetSearchValue, setAssetSearchValue, filteredVaultTokens } = props

    const [addresIsInvalid, setAddressIsInvalid] = useState(false)
    const [triggerSendToken, setTriggerSendToken] = useState(false)
    const [amount, setAmount] = useState("")
    const [address, setAddress] = useState("")
    const [selectedToken, setSelectedToken] = useState<EsdtToken>()

    const getBalanceNumber = () => {
        if(selectedToken) {
            return setAmount(formatTokenBalance(selectedToken.balance, selectedToken.decimals).toString())
        }
    }

    const sendToken = () => {
        if(selectedToken === undefined) {
            return
        }

        transferTokenInteraction(selectedToken, Number(amount), address)
    }

    const invalidAddressStyle = addresIsInvalid ? "border-red-500" : ""

    return <Card className={'flex flex-col flex-1 p-8 gap-4 shadow'}>
        <h2 className={'text-sm font-semibold uppercase tracking-wide'}>Assets</h2>
        <Input
            value={assetSearchValue}
            placeholder={'Search tokens'}
            onChange={e => setAssetSearchValue(e.target.value)} />

        <div className={'flex flex-col gap-3'}>
            {!triggerSendToken ? filteredVaultTokens.map(token => (
                <div key={token.identifier} className={'flex justify-between items-center'}>
                <div>
                    <div className={'text-sm font-medium'}>{token.name}</div>
                    <div className={'text-xs text-muted-foreground'}>{token.identifier}</div>
                </div>
                
                <div className={'flex justify-between items-center gap-10'}>
                    <div className={'text-sm font-medium'}>{formatTokenBalance(token.balance, token.decimals).toString()}</div>
                    <div className={'self-end space-x-2'}>
                    <Button size={'sm'} variant={'outline'}onClick={() => {
                        setTriggerSendToken(true)
                        setSelectedToken(token)
                    }} >
                        Send
                        <Wallet className={'ml-2 w-3 h-3'} />
                    </Button>
                    </div>
                </div>
                </div>
            ))  : <div className={'flex flex-1 flex-col gap-4'}>
                    <div className={'flex flex-1 flex-col gap-2'}>
                        
                        <div className='flex flex-1 justify-between items-center border rounded-md'>
                            <div>
                                <Input  
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    style={{
                                        boxShadow: 'none'
                                    }}
                                    className={'border-none focus:outline-none focus:ring-0 focus:border-none active:border-none hover:border-none placeholder:border-none disabled:border-none text-xs' }
                                    type={"number"} 
                                    placeholder='Enter Amount' />
                            </div>

                            <div className={'cursor-pointer mr-3'} onClick={getBalanceNumber}>
                                <p className="font-extrabold">MAX</p>
                            </div>
                        </div>

                        <Input  
                            value={address}
                            onChange={(e) => {
                                if(!checkIsValidAddress(e.target.value)) {
                                    setAddressIsInvalid(true)
                                } else {
                                    setAddressIsInvalid(false)
                                }

                                setAddress(e.target.value)
                            }}
                            style={{
                                boxShadow: 'none'
                            }}
                            className={cn('focus:outline-none focus:ring-0 placeholder:border-none disabled:border-none text-xs', invalidAddressStyle)}
                            type={"text"} 
                            placeholder='Insert Address' />
                        {addresIsInvalid && <p className={'text-red-500 text-xs ml-2 -mt-2'}>Address is Invalid</p>}
                            
                    </div>
                    <div className={'flex flex-1 justify-between'}>
                        <Button size={'sm'} variant={'outline'} onClick={() => setTriggerSendToken(false)} >
                            Cancel
                        </Button>
                        <Button size={'sm'} variant={'outline'} onClick={sendToken} >
                            Confirm
                        </Button>
                    </div>
                </div>}
        </div>
    </Card>
}
