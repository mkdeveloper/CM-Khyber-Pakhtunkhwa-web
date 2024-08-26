import Image from 'next/image'
import CM_Image from '../../../../public/kpk/ali-amin-gandapur_2.png'
import Link from 'next/link'
import { Dialog, NavButtons } from '@/components/Header/navbar'
import KP_Logo from '../../../../public/kpk/kp_logo.png'
import { cn } from '@/lib/utils'
export default function Hero() {
  return (
    <div className='bg-white'>
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-[#1eb2a6]/10 '>
        <div
          className={`mx-auto max-w-7xl flex h-full w-full justify-between  px-3 py-5  lg:py-6 max-md:max-w-full max-md:flex-wrap md:justify-center xl:justify-between`}
        >
          <div className='my-auto flex items-stretch justify-between gap-12 max-md:max-w-full max-md:flex-wrap'>
            <div className='flex lg:flex-1 outline-none'>
              <Link href='/' className='-m-1.5 p-1.5 outline-none'>
                <span className='sr-only'>
                  KP Initiative for Generative AI and Cloud Computing
                </span>
                <Image
                  //   placeholder='blur'
                  width={100}
                  height={100}
                  className=' h-28 w-auto outline-none'
                  src={KP_Logo}
                  alt='KPK GOV LOGO'
                />
              </Link>
            </div>
          </div>
          <div className='my-auto hidden grow items-center justify-center md:gap-x-5 lg:gap-x-7 xl:gap-x-12 self-start text-sm lg:text-base font-medium leading-5 text-zinc-800 max-md:max-w-full md:flex md:text-[13px]'>
            <NavButtons />
          </div>
          <div className='flex items-center md:hidden cursor-pointer '>
            <Dialog />
          </div>
          <div className='hidden items-center max-md:max-w-full max-md:flex-wrap md:flex'>
            <Link
              href='/registration'
              className={cn(
                `relative after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl after:duration-300 hover:after:w-full`,
                'after:hover:w-0 bg-custom-color  py-3 px-4 rounded-md text-white hover:text-custom-color hover:bg-transparent border border-custom-color duration-300 md:text-xs lg:text-base'
              )}
            >
              APPLY NOW
            </Link>
          </div>
        </div>
        <div
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl  px-6 py-10 lg:py-28 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-custom-color sm:text-5xl lg:col-span-2 xl:col-auto'>
              Chief Minister Khyber Pakhtunkhwa Initiative for Generative AI and
              Cloud Computing
            </h1>
            <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
              <p className='text-2xl font-semibold leading-8 text-gray-900'>
                Getting Khyber Pakhtunkhwa Ready For The $100 Trillion
                <br /> Global AI Industrial Revolution
              </p>
              <div className='my-10 flex sm:items-center items-start  flex-col sm:flex-row gap-6 '>
                <Link
                  href={'/registration'}
                  className={`bg-custom-color py-4 px-4 font-semibold relative rounded-lg text-white hover:bg-transparent duration-300 hover:text-custom-color border border-custom-color`}
                >
                  GET STARTED NOW <span aria-hidden='true'>→</span>
                </Link>
                <Link
                  href={'/course'}
                  className={`bg-white py-4 px-4 relative font-semibold rounded-lg text-custom-color hover:bg-transparent duration-300 hover:scale-105  border border-custom-color`}
                >
                  VIEW COURSE <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
            <Image
              src={CM_Image}
              alt=''
              className='aspect-square w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2'
            />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
    </div>
  )
}
