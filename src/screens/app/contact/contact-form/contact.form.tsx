import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {Check, Loader2 as LoadingIcon} from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Reaptcha from 'reaptcha';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { EmailService } from '@/features/emailing/email.service';

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY

export const ContactForm: React.FC = () => {
  const [verified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  
  const captchaRef = useRef(null)

  useEffect(() => {
    console.log(verified)
    if(isSuccessful) {
      setTimeout(() => setIsSuccessful(false), 3000)
    }
  }, [isSuccessful])

  const verify = () => {
    if (captchaRef.current === null) {
      return
    }
    
    setVerified(true)
  }

  const contactSchema = z.object({
    name: z.string(),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    message: z.string().min(1, { message: "A message is required" })
  });
  
  type Contact = z.infer<typeof contactSchema>;
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Contact> = (data) => {
    setIsLoading(true)

    EmailService.sendContactEmail(data).then(() => {
      setIsLoading(false)
      setIsSuccessful(true)
      reset()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'space-y-4'}>
        <div>
          <h2>Name</h2>
          <Input
            type='text'
            {...register("name")} 
          />
        </div>
        <div>
          <h2>Email</h2>
          <Input
            className={errors.email ? "border-red-500" : ""}
            type='email'
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-2"> {errors.email?.message}
            </p>
          )}
        </div>
        <div>
          <h2>Message</h2>
          <Textarea
            className={errors.message ? "border-red-500" : ""}
            {...register("message")} 
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-2"> {errors.message?.message}
            </p>
          )}
        </div>
        <Reaptcha
          sitekey={siteKey}
          ref={captchaRef}
          onVerify={verify}
        />
        <Button type='submit'>
          Submit 
            {isLoading && <LoadingIcon className="ml-2 h-4 w-4 animate-spin" />}
            {isSuccessful && <Check className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </form>
  )
}