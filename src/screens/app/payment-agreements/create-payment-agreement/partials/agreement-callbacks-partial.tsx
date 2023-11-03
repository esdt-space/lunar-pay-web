import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";

import { Label} from "@/components/ui/label.tsx";
import { Input} from "@/components/ui/input.tsx";
import { Switch} from "@/components/ui/switch.tsx";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form.tsx";
import { ChangeEvent } from "react";

type Props = {
  signAgreementHttpCallbackUrl: string;
  cancelAgreementHttpCallbackUrl: string;
  onSignAgreementHttpCallbackUrlChange: (input: string) => void;
  onCancelAgreementHttpCallbackUrlChange: (input: string) => void;
}

const FormSchema = z.object({
  http_callback: z.boolean(),
  sc_callback: z.boolean(),
})

export function AgreementCallbacksPartial(props: Props) {
  const { 
    signAgreementHttpCallbackUrl, 
    cancelAgreementHttpCallbackUrl, 
    onSignAgreementHttpCallbackUrlChange, 
    onCancelAgreementHttpCallbackUrlChange 
  } = props;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      http_callback: false,
      sc_callback: false,
    },
  })

  const handleChangeSignAgreementCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onSignAgreementHttpCallbackUrlChange(e.target.value)
  }

  const handleChangeCancelAgreementCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onCancelAgreementHttpCallbackUrlChange(e.target.value)
  }


  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="http_callback"
        render={({ field }) => (
          <FormItem className="rounded-lg border p-4 shadow-sm grayscale bg-slate-50 space-y-4">
            <div className={'flex flex-row items-center justify-between'}>
              <div className="space-y-0.5">
                <FormLabel>
                  <span>HTTP Callbacks </span>
                  <span className={'font-normal text-muted-foreground'}>(coming soon)</span>
                </FormLabel>
                <FormDescription>
                  We'll communicate directly with your API to keep you updated about new subscribers and cancellations.
                </FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange}/>
              </FormControl>
            </div>
            {field.value && (
              <div className={'space-y-2'}>
                <div className={'space-y-1'}>
                  <Label className={'text-slate-500'}>New Subscriber Endpoint</Label>
                  <Input 
                    id={'http-register-field'} 
                    placeholder={'e.g.: https://example.com'}
                    value={signAgreementHttpCallbackUrl}
                    onChange={handleChangeSignAgreementCallback}
                  />
                </div>
                <div className={'space-y-1'}>
                  <Label className={'text-slate-500'}>Cancel Agreement Endpoint</Label>
                  <Input
                    id={'http-cancel-field'} 
                    placeholder={'e.g.: https://example.com'}
                    value={cancelAgreementHttpCallbackUrl}
                    onChange={handleChangeCancelAgreementCallback}
                  />
                </div>
              </div>
            )}
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sc_callback"
        render={({field}) => (
          <FormItem className="rounded-lg border p-4 shadow-sm grayscale bg-slate-50 space-y-4">
            <div className={'flex flex-row items-center justify-between '}>
              <div className="space-y-0.5">
                <FormLabel>
                  <span>Smart Contract Callbacks </span>
                  <span className={'font-normal text-muted-foreground'}>(coming soon)</span>
                </FormLabel>
                <FormDescription>
                  We'll communicate directly with your smart contract to keep you updated about new subscribers and
                  cancellations.
                </FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange}/>
              </FormControl>
            </div>
            {field.value && (
              <div className={'space-y-2'}>
                <div className={'space-y-1'}>
                  <Label className={'text-slate-500'}>Smart contract address</Label>
                  <Input readOnly={true} id={'sc-address'} placeholder={'e.g.: erd1qqq...'}/>
                </div>
                <div className={'space-y-1'}>
                  <Label className={'text-slate-500'}>Smart contract address</Label>
                  <Input readOnly={true} id={'sc-function'} placeholder={'e.g.: registerSubscriber'}/>
                </div>
              </div>
            )}
          </FormItem>
        )}
      />
    </Form>
  )
}