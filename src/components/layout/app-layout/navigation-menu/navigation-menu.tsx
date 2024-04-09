import { logout } from '@multiversx/sdk-dapp/utils';
import { useGetAccount } from '@multiversx/sdk-dapp/hooks';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { CopyIconComponent, HeaderLink } from '../components';
import { RoutesConfig } from '@/navigation';
 
const components: { title: string; href: string;}[] = [
  {
    title: 'Donations',
    href: `${RoutesConfig.donations}`
  },
  {
    title: 'Subscriptions',
    href: `${RoutesConfig.subscriptions}`
  },
  // {
  //   title: 'Admin',
  //   href: `${RoutesConfig.admin}`
  // }
]

type Props = {
  isMobile: boolean
}
 
export const LunarPayNavigationMenu = ({isMobile}: Props) => {
  const { address } = useGetAccount();

  const signOutHandler = () => logout(RoutesConfig.home)
  
  return (
    <NavigationMenu>
      <NavigationMenuList className={`flex ${isMobile && 'flex-col justify-start'}`}>
        <NavigationMenuItem className={`${isMobile && 'self-start md:ml-1 max-sm: -ml-3'}`}>
          <NavigationMenuTrigger className='text-md'>Actions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className={'flex flex-col p-4 space-y-2'}>
              {components.map((component, index) => (
                <HeaderLink
                  key={index}
                  text={component.title}
                  location={component.href}
                />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={`${isMobile && 'self-start mt-2'}`}>
          <HeaderLink text={'Token Operations'} location={RoutesConfig.tokensOperations} />
        </NavigationMenuItem>
        <NavigationMenuItem className={`${isMobile && 'self-start mt-4 ml-1'}`}>
          {isMobile && 
            <div>
              <div onClick={signOutHandler}>
                <HeaderLink text={'Logout'} location={""} />
              </div>
              <div className={"flex w-full items-center sm:flex-row md:w-max mt-6 md:ml-4 space-x-4"}>
                <span className="text-xs max-w-[80px] truncate">
                  {address}
                </span>
                <CopyIconComponent address={address} />
              </div>
            </div>
          }
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
