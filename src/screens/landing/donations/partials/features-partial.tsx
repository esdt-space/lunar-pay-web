type ItemProps = {
  title: string;
  description: string;
}

function Item(props: ItemProps) {
  return (
    <li className="relative flex items-top gap-3">
      <div
        className="relative bg-gradient-to-br from-primary to-secondary w-4 h-4 top-1.5 opacity-80">&nbsp;</div>
      <div className={'flex-1'}>
        <h2 className="text-xl font-semibold text-gray-900 text-left">{props.title}</h2>
        <p className="text-gray-700 text-left max-w-md">{props.description}</p>
      </div>
    </li>
  )
}

export function FeaturesPartial() {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto p-10 pb-40">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-10">
            Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <Item
              title={'Customizable Donation Pages'}
              description={'Design your donation pages to match your brand, cause, or campaign, creating a unique and engaging giving experience.'}
            />

            <Item
              title={'Easy Integration'}
              description={'Easily integrate Lunar Pay Donations into your website, social media, or blog with our developer-friendly tools and plugins.'}
            />

            <Item
              title={'Real-time Donation Tracking'}
              description={'Stay updated with real-time insights into your fundraising progress, enabling you to adjust your strategy and reach your goals effectively.'}
            />

            <Item
              title={'Donor Analytics'}
              description={'Understand your donors better with in-depth analytics, helping you tailor your communication and engagement strategies.'}
            />
          </ul>
        </section>
      </div>
    </div>
  )
}