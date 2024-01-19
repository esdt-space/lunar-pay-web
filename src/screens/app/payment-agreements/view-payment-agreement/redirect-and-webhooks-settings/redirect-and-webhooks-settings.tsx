import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";

import { Input} from "@/components/ui/input.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form.tsx";

import {PaymentAgreement} from "@/features/payment-agreements/models";
import {
  useUpdatePaymentAgreementMutation
} from "@/features/payment-agreements/hooks";
import {RoutesConfig} from "@/navigation";
import {useNavigate} from "react-router-dom";


type Props = {
  agreement: PaymentAgreement,
}

const FormSchema = z.object({
  redirectUrl: z.string().url(),
  httpWebhookUrl: z.string().url(),
  smartContractWebhookAddress: z.string(),
})

export function RedirectAndWebhooksSettings({ agreement }: Props) {
  const navigate = useNavigate()
  const { mutate: editAgreement } = useUpdatePaymentAgreementMutation(agreement.id);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      redirectUrl: agreement.signAgreementRedirectUrl,
      httpWebhookUrl: agreement.signAgreementHttpCallbackUrl,
      smartContractWebhookAddress: '',
    },
  });

  const saveSettings = () => {
    const values = form.getValues();

    const input = {
      signAgreementRedirectUrl: values.redirectUrl,
      signAgreementHttpCallbackUrl: values.httpWebhookUrl,
      cancelAgreementHttpCallbackUrl: values.httpWebhookUrl,
    }

    editAgreement(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { id: agreement.id, input: input },
      {
        onSuccess: () => navigate(RoutesConfig.paymentAgreements)
      }
    )
  }

  return (
    <Card className={'p-6 space-y-8'}>
      <Form {...form}>
        <div className={'space-y-2'}>
          <div className="space-y-0.5">
            <FormLabel>New Member Redirect</FormLabel>
            <FormDescription>We will redirect the subscribers to your provided url.</FormDescription>
          </div>

          <FormField
            control={form.control}
            name="redirectUrl"
            render={({field}) => (
              <FormItem className="rounded-lg border p-4 shadow-sm grayscale bg-slate-50">
                <FormLabel className={'text-slate-500'}>Redirect Endpoint</FormLabel>
                <FormControl>
                  <Input value={field.value} onChange={field.onChange} placeholder={'e.g.: https://example.com'}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className={'space-y-2'}>
          <div className="space-y-0.5">
            <FormLabel>HTTP Callback</FormLabel>
            <FormDescription>
              We'll communicate directly with your API to keep you updated about new subscribers and cancellations.
            </FormDescription>
          </div>

          <FormField
            control={form.control}
            name="httpWebhookUrl"
            render={({field}) => (
              <FormItem className="rounded-lg border p-4 shadow-sm grayscale bg-slate-50">
                <FormLabel className={'text-slate-500'}>Webhook Url</FormLabel>
                <FormControl>
                  <Input value={field.value} onChange={field.onChange} placeholder={'e.g.: https://example.com'}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className={'space-y-2'}>
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

          <FormField
            control={form.control}
            name="smartContractWebhookAddress"
            render={({field}) => (
              <FormItem className="rounded-lg border p-4 shadow-sm grayscale bg-slate-50">
                <FormLabel className={'text-slate-500'}>Smart Contract Address</FormLabel>
                <FormControl>
                  <Input readOnly value={field.value} onChange={field.onChange} placeholder={'e.g.: erd1qqq...'}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </Form>

      <Button disabled={!form.formState.isValid} onClick={saveSettings}>Update Settings</Button>
    </Card>
  )
}