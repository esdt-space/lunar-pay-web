import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/theme/utils"
import { checkIsValidAddress } from "@/utils"

type Props = {
    amount: string
    address: string
    addresIsInvalid: boolean
    setAmount: (input: string) => void
    setAddress: (input: string) => void
    setAddressIsInvalid: (isValid: boolean) => void
    setTriggerSendToken: (isValid: boolean) => void
    getBalanceNumber: () => void
    sendToken: () => void
}

export const AssetsInputAreaComponent = ( props: Props ) => {
    const { 
        amount, 
        address, 
        addresIsInvalid, 
        setAmount, 
        setAddress, 
        setAddressIsInvalid, 
        setTriggerSendToken, 
        getBalanceNumber, 
        sendToken } = props

    const invalidAddressStyle = addresIsInvalid ? "border-red-500" : ""

    return <div className={'flex flex-1 flex-col gap-4'}>
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
</div>
}