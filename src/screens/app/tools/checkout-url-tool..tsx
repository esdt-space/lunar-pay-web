import { ContainedScreen } from "@/components/prefab/contained-screen"
import { CodeHighlight } from './components';

export const CheckoutUrlToolScreen = () => {
  const baseCheckoutUrl = ' https://lunarpay.finance/checkout'
  const exampleCheckoutUrl = 'https://lunarpay.finance/checkout?receiver=erd1yng4ajnxp03lx5erwcq57m5502m6t9nxajf5hv9nw0k27t8zcq4qq3vu4v&itemName[]=iPhone 15 PRO&itemPrice[]=1&itemQuantity[]=1&itemName[]=MacBook PRO&itemPrice[]=1&itemQuantity[]=1&currency=EGLD&thankYouMessage=Thank%20you!&callbackUrl=https://example-callback-url.com&redirectUrl=https://example-redirect-url.com'

  return (
    <ContainedScreen className='w-3/5'>
      <div className='text-2xl text-center font-bold'>Checkout URL</div>

      <div className='text-2xl font-semibold mt-16 mb-4'>How to Create Your Checkout URL for Crypto Payments</div>
      <div className='text-lg'>To facilitate crypto payments for your customers, you'll construct a URL that directs them to a checkout page with pre-filled details for their purchase.</div>

      <div className='text-2xl font-semibold mt-16 mb-4'>Base URL</div>
      <div className='text-lg'>Your checkout process begins with the base URL</div>
      <CodeHighlight codeString={baseCheckoutUrl} />

      <div className='text-2xl font-semibold mt-16 mb-4'>Query Parameters</div>
      <div className='text-lg'>Append the following query parameters to the base URL. Each parameter consists of a key-value pair, connected by '=' and separated from subsequent parameters by '&'.</div>

      <div className='mt-4'>
        <div className='text-lg'>
          <span className='font-bold'>receiver:</span> Your cryptocurrency wallet address where the payment will be received. This is a unique identifier and should be input without spaces.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>itemName[]:</span> The name of each item the customer is buying. For multiple items, repeat the `itemName[]` parameter accordingly.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>itemPrice[]:</span> The price of each item, in the cryptocurrency specified by the `currency` parameter. Ensure the order of  `itemPrice[]` matches `itemName[]`.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>itemQuantity[]:</span> The quantity of each item, aligned with the order of `itemName[]` and `itemPrice[]`.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>currency:</span> The code/token identifier of the cryptocurrency being used for the transaction (e.g., "EGLD"). This is crucial for ensuring the correct crypto is received.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>thankYouMessage:</span> A custom message to show after a successful purchase. This should be URL-encoded to correctly handle spaces and special characters.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>callbackUrl:</span> The URL to which transaction details are sent post-completion. Typically, this would be an endpoint on your server to verify the payment.
        </div>

        <div className='text-lg'>
          <span className='font-bold'>redirectUrl:</span> The URL to redirect users after completing the transaction, such as a confirmation page.
        </div>
      </div>

      <div className='text-2xl font-semibold mt-16 mb-4'>Example URL</div>
      <CodeHighlight codeString={exampleCheckoutUrl} />

      <div className='text-2xl font-semibold mt-16 mb-4'>Important Notes</div>
      <div className='mt-4'>
        <div className='text-lg'> - Verify that all URLs (`callbackUrl` and `redirectUrl`) are fully qualified and properly encoded</div>
        <div className='text-lg'> - For `thankYouMessage`, remember to URL encode spaces and special characters</div>
        <div className='text-lg'> - Ensure the `currency` parameter accurately reflects the cryptocurrency used, as transactions are irreversible and errors could result in lost funds</div>
      </div>

      <div className='text-xl font-semibold mt-16 mb-16'>
        This tailored checkout URL creation process is designed to streamline cryptocurrency transactions for your customers, ensuring a secure and efficient payment experience.
      </div>
    </ContainedScreen>
  )
}
