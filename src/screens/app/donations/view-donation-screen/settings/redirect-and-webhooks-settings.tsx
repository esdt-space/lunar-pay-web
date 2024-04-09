import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod';

import { Input} from '@/components/ui/input.tsx';
import {Card} from '@/components/ui/card.tsx';
import {Button} from '@/components/ui/button.tsx';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form.tsx';

import { Donation } from '@/features/donations/models';
import { useUpdateDonationMutation } from '@/features/donations/hooks/mutations';
import {RoutesConfig} from '@/navigation';
import {useNavigate} from 'react-router-dom';

type Props = {
  donation: Donation,
}

const FormSchema = z.object({
  redirectUrl: z.string().url(),
  httpWebhookUrl: z.string().url(),
  smartContractWebhookAddress: z.string(),
})

export function RedirectAndWebhooksSettings({ donation }: Props) {
  const navigate = useNavigate()
  const { mutate: ediDonation } = useUpdateDonationMutation(donation.id);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      redirectUrl: donation.payDonationRedirectUrl,
      httpWebhookUrl: donation.payDonationHttpCallbackUrl,
      smartContractWebhookAddress: '',
    },
  });

  const saveSettings = () => {
    const values = form.getValues();

    const input = {
      payDonationRedirectUrl: values.redirectUrl,
      payDonationHttpCallbackUrl: values.httpWebhookUrl,
    }

    ediDonation(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { id: donation.id, input: input },
      {
        onSuccess: () => navigate(RoutesConfig.donations)
      }
    )
  }

  return (
    <Card className={'p-6 space-y-8'}>
      <Form {...form}>
        <div className={'space-y-2'}>
          <div className='space-y-0.5'>
            <FormLabel>Pay Donation Redirect</FormLabel>
            <FormDescription>We will redirect the payers to your provided url.</FormDescription>
          </div>

          <FormField
            control={form.control}
            name='redirectUrl'
            render={({field}) => (
              <FormItem className='rounded-lg border p-4 shadow-sm grayscale bg-slate-50'>
                <FormLabel className={'text-slate-500'}>Redirect Endpoint</FormLabel>
                <FormControl>
                  <Input value={field.value} onChange={field.onChange} placeholder={'e.g.: https://example.com'}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className={'space-y-2'}>
          <div className='space-y-0.5'>
            <FormLabel>HTTP Callback</FormLabel>
            <FormDescription>
              We'll communicate directly with your API to keep you updated about new payments and cancellations.
            </FormDescription>
          </div>

          <FormField
            control={form.control}
            name='httpWebhookUrl'
            render={({field}) => (
              <FormItem className='rounded-lg border p-4 shadow-sm grayscale bg-slate-50'>
                <FormLabel className={'text-slate-500'}>Webhook Url</FormLabel>
                <FormControl>
                  <Input value={field.value} onChange={field.onChange} placeholder={'e.g.: https://example.com'}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </Form>

      <Button 
        disabled={!form.formState.isValid} 
        onClick={saveSettings}
      >
        Update Settings
      </Button>
    </Card>
  )
}