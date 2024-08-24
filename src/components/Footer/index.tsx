import navigationData from './NavigationData'
import Image from 'next/image'
import KP_Logo from '../../../public/kpk/kp_logo.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer
        className='relative mt-32 sm:mt-40'
        aria-labelledby='footer-heading'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8'>
              <Image
                width={200}
                height={200}
                className=' h-28 w-auto outline-none'
                src={KP_Logo}
                alt='KPK GOV LOGO'
              />
              <p className='text-sm leading-6 text-gray-600'>
                CM KPK Initiative for Generative AI and Cloud Computing.
              </p>
              <div className='flex space-x-6'>
                {navigationData.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-gray-500 hover:text-gray-400'
                  >
                    <span className='sr-only'>{item.name}</span>
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                ))}
              </div>
            </div>
            <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className=' text-base font-semibold leading-6 text-gray-900'>
                    Navigation Links
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigationData.navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`relative after:absolute after:hover:bg-custom-color after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-base font-semibold leading-6 text-gray-900'>
                    Course Content Links
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigationData.course.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`relative after:absolute after:hover:bg-custom-color after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full`}
                          // className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-base font-semibold leading-6 text-gray-900'>
                    Contact Us
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    <li
                      className={`relative w-fit after:absolute after:hover:bg-custom-color after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full`}
                    >
                      Email Address
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                    Company
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigationData.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}
                {/* <div className='mt-10 md:mt-0'>
                  <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                    Legal
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigationData.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className='border-t border-white/10 pt-8 '>
            <p className='text-sm leading-6 text-gray-600'>
              &copy; 2024 KPK, GOV. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
