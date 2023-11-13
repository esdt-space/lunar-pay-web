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
  newMemberRedirectUrl: string;
  onNewMemberRedirectUrlChange: (input: string) => void;
}

const FormSchema = z.object({
  new_member_redirect: z.boolean(),
})

export function AgreementRedirectPartial(props: Props) {
  const { newMemberRedirectUrl, onNewMemberRedirectUrlChange} = props;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      new_member_redirect: false,
    },
  })

  const handleChangeNewMemberRedirect = (e: ChangeEvent<HTMLInputElement>) => {
    onNewMemberRedirectUrlChange(e.target.value)
  }

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="new_member_redirect"
        render={({ field }) => (
          <FormItem className="rounded-lg border p-4 shadow-sm grayscale bg-slate-50 space-y-4">
            <div className={'flex flex-row items-center justify-between'}>
              <div className="space-y-0.5">
                <FormLabel>
                  <span>New Member Redirect</span>
                </FormLabel>
                <FormDescription>
                  We will redirect the subscribers to your provided url.
                </FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange}/>
              </FormControl>
            </div>
            {field.value && (
                <div className={'space-y-1'}>
                  <Label className={'text-slate-500'}>Redirect Endpoint</Label>
                  <Input 
                    id={'redirect-register-field'} 
                    placeholder={'e.g.: https://example.com'}
                    value={newMemberRedirectUrl}
                    onChange={handleChangeNewMemberRedirect}
                  />
                </div>
            )}
          </FormItem>
        )}
      />
    </Form>
  )
}