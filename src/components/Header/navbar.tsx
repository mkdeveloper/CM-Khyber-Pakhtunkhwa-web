import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { FC, ReactNode } from 'react';
import {
  Sheet,
  SheetClose,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet';

import KP_Logo from '../../../public/kpk/kp_logo.png';
import Image from 'next/image';
import { NavigationList } from '@/constants/NavigationLinks';

interface NavButtonProps {
  name?: string; // Make optional if using children instead
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}
// interface DialogProps {
//   dialogRef: MutableRefObject<HTMLDialogElement | null>
//   children: ReactNode
// }
interface MenuProps {
  onClose: () => void;
}
export const NavButton: FC<NavButtonProps> = ({
  name,
  href = '#',
  onClick,
  className = '',
}) => (
  <Link
    href={href}
    className={cn(
      `relative after:absolute after:hover:bg-black after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full ${className}`
    )}
    onClick={onClick}
  >
    {name}
  </Link>
);

export const Dialog = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="w-10 h-10" />
      </SheetTrigger>

      <SheetContent className=" bg-custom-color border-none">
        <SheetHeader className=" items-center">
          <SheetTitle className="w-fit">
            <Link href="/" className=" outline-none ">
              <span className="sr-only">
                KP Initiative for Generative AI and Cloud Computing
              </span>
              <Image
                //   placeholder='blur'
                width={100}
                height={100}
                className=" h-28 w-auto outline-none"
                src={KP_Logo}
                alt="KPK GOV LOGO"
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="hidden">
            KP CM IT PROGRAM.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-y-6">
          {NavigationList.map(
            (item) => (
              <SheetClose key={item.name} asChild>
                <NavButton
                  className="after:hover:bg-black text-lg font-medium leading-6 text-white hover:scale-105 duration-300 w-fit"
                  name={item.name}
                  href={item.href}
                />
              </SheetClose>
            )
            // <span
            //   key={item.name}
            //   className='text-lg font-medium leading-6 text-white hover:scale-105 duration-300 w-fit'
            // >
            //   <Link href={item.href}>{item.name}</Link>
            // </span>
          )}
          <SheetClose asChild>
            <NavButton
              name="APPLY NOW"
              className="after:hover:w-0 bg-custom-color py-2.5 px-4 rounded-md text-white border-2 border-white duration-300 text-lg font-medium hover:scale-105 leading-6 text-center"
              href="/registration"
            />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// export const Dialog: FC<DialogProps> = ({ dialogRef, children }) => (
//   <dialog
//     ref={dialogRef}
//     onClick={(ev) => {
//       const target = ev.target as HTMLDialogElement
//       if (target.nodeName === 'DIALOG') {
//         target.close()
//       }
//     }}
//     className='bottom-0 left-auto block h-full min-h-dvh w-0 overflow-hidden bg-custom-color p-0 opacity-0 transition-[width] duration-500 backdrop:bg-[#000000B2] backdrop:backdrop-blur md:hidden [&[open]]:w-[290px] [&[open]]:opacity-100'
//   >
//     {children}
//   </dialog>
// )

export const Menu: FC<MenuProps> = ({ onClose }) => (
  <nav className="flex h-full w-full min-w-[290px] flex-col px-6 pt-6">
    <div className="flex justify-end pb-11">
      <button onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="2"
            d="M1 13L13 1M1 1l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div className="flex flex-col gap-y-6">
      {NavigationList.map((item) => (
        <span
          key={item.name}
          className="text-lg font-medium leading-6 text-white"
        >
          <a href={item.href}>{item.name}</a>
        </span>
      ))}

      <NavButton
        name="APPLY NOW"
        className="after:hover:w-0 bg-custom-color py-2.5 px-4 rounded-md text-white hover:text-custom-color hover:bg-transparent border border-custom-color duration-300"
        href="#"
      />
    </div>
  </nav>
);
