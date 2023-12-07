import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { TelegramLogo, TwitterLogo } from "./icons"
import { ContactForm } from "./contact-form"
import { Separator } from "@/components/ui/separator.tsx"

export const ContactScreen = () => {
  return (
    <ContainedScreen>
      <Card className="flex justify-between p-6">
        <div className="w-5/12">
          <ContactForm/>
        </div>
        <div><Separator orientation="vertical"/></div>
        <div className="w-5/12">
          <div>
            <h2 className={'text-3xl font-medium mb-4'}>Contact us</h2>
            <p className="mb-2">Send us an email or give us a call, we try to answer<br />all enquiries within 24 hours on business days.
            </p>
            <p>Email: this@something.ro</p>
            <p>Phone: number</p>
          </div>
          <div className="mt-4 mb-4"><Separator/></div>
          <div>
            <h2 className={'text-3xl font-medium mb-4'}>Social Media</h2>
            <TelegramLogo>Telegram</TelegramLogo>
            <TwitterLogo>Twitter</TwitterLogo>
          </div>
        </div>
      </Card >
    </ContainedScreen>
  )
}