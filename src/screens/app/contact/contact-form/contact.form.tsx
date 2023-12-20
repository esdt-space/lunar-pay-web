import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EmailService } from '@/features/emailing/email.service';

export const ContactForm: React.FC = () => {
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const formData = {
      name: name,
      from: email,
      context: message,
      to: 'contact@lunarpay.finance'
    }

    EmailService.emailTrigger(formData)
  }

  return (
    <div className={'space-y-4'}>
      <div>
        <h2>Name</h2>
        <Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h2>Email</h2>
        <Input
          type='text'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <h2>Message</h2>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type='submit' onClick={handleSubmit}>Submit</Button>
    </div>
  )
}