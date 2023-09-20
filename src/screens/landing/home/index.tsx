import {Button} from "@/components/ui/button.tsx";

export function HomeScreen() {
  return (
    <div className={'flex h-screen'}>
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 mt-24">
        <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800">Payments made simple for WEB3 businesses.</h2>
            <p className="mt-8 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p className="mb-12 mt-4 text-gray-600">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>

            <Button size={'lg'}>GET STARTED</Button>
          </div>

          <div className="md:5/12 lg:w-6/12">
            <img className="md:-ml-8" src="./images/some-image.webp" alt="" loading="lazy" />
          </div>
        </div>
      </div>

    </div>
  )
}