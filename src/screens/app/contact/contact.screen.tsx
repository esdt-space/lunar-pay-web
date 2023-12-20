import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { TelegramLogo, TwitterLogo } from "./icons"
import { ContactForm } from "./contact-form"
import { Separator } from "@/components/ui/separator.tsx"

export const ContactScreen = () => {
  return (
    <ContainedScreen>
      <Card className="flex justify-between max-md:flex-col p-6 mt-16">
        <div className="w-6/12 md:mr-6 max-md:w-full">
          <div>
            <h2 className={'text-3xl font-medium mb-4'}>Contact us</h2>
            <p className="mb-2">Send us an email or give us a call, we try to answer<br />all enquiries within 24 hours on business days.
            </p>
            <p>E: contact@lunarpay.finance</p>
            <p>P: +40770657204</p>
          </div>
          <div className="mt-4 mb-4"><Separator/></div>
          <div>
            <h2 className={'text-3xl font-medium mb-4'}>Social Media</h2>
            <TelegramLogo>Telegram</TelegramLogo>
            <TwitterLogo>Twitter</TwitterLogo>
          </div>
        </div>
        <div><Separator orientation="vertical"/></div>
        <div><Separator className="mt-8 mb-8"/></div>
        <div className="w-6/12 md:ml-6 max-md:w-full">
          <ContactForm/>
        </div>
      </Card >
    </ContainedScreen>
  )
}