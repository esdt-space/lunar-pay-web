import { ContainedScreen } from "@/components/prefab/contained-screen"
import { Card } from "@/components/ui/card"
import { TelegramLogo, TwitterLogo } from "./icons"
import { ContactForm } from "./contact-form"

export const ContactScreen = () => {
  return (
    <ContainedScreen>
      <Card className="flex justify-between p-6">
        <div>
          <ContactForm/>
        </div>
        <div className={'space-y-8'}>
          <div>
            <h1>Contact us</h1>
            <p>Send us an email or give us a call, we try to answer all enquiries within 24 hours on business days.</p>
            <p>E: this@something.ro</p>
            <p>P: number</p>
          </div>
          <div>
            <h2>Social Media</h2>
            <TelegramLogo>text</TelegramLogo>
            <TwitterLogo/>
          </div>
        </div>
      </Card >
    </ContainedScreen>
  )
}