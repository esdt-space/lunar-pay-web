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
 
const components: { title: string; href: string; subtitle?: string; menuIconLabel?: string}[] = [
  {
    title: 'Donations',
    menuIconLabel: 'donations_icon',
    href: `${RoutesConfig.donations}`,
    subtitle: 'Start your donation plan',
  },
  {
    title: 'Subscriptions',
    menuIconLabel: 'subscriptions_icon',
    href: `${RoutesConfig.subscriptions}`,
    subtitle: 'Start your subscription plan',
  },
  // {
  //   title: 'Admin',
  //   href: `${RoutesConfig.admin}`
  // }
]

type Props = {
  isMobile: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
 
export const LunarPayNavigationMenu = ({isMobile, setIsMobileMenuOpen}: Props) => {
  const { address } = useGetAccount();

  const signOutHandler = () => logout(RoutesConfig.home)
  
  return (
    <NavigationMenu>
      <NavigationMenuList className={`flex ${isMobile && 'flex-col justify-start'}`}>
        <NavigationMenuItem className={`${isMobile && 'self-start md:ml-1 max-sm: -ml-3'}`}>
          <NavigationMenuTrigger className='text-md'>Actions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className={'flex flex-col p-4 space-y-2 cursor-pointer'}>
              {components.map((component, index) => (
                <div onClick={() => setIsMobileMenuOpen(false)}>
                  <HeaderLink
                    key={index}
                    menuItem={component.title}
                    location={component.href}
                    subtitle={component.subtitle}
                    menuIconLabel={component.menuIconLabel}
                    isDropdown
                  />
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={`${isMobile && 'self-start mt-2 md:ml-1 max-sm: -ml-3'}`} onClick={() => setIsMobileMenuOpen(false)}>
          <div className='-ml-4'>
            <HeaderLink menuItem={'Token Operations'} location={RoutesConfig.tokensOperations} />
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem className={`${isMobile && 'self-start mt-4 md:ml-1 max-sm: -ml-3'}`} onClick={() => setIsMobileMenuOpen(false)}>
          {isMobile && 
            <div>
              <div className='-ml-4' onClick={signOutHandler}>
                <HeaderLink menuItem={'Logout'} location={""} />
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
