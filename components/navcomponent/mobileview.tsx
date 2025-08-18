'use client'

// MobileView.tsx

import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from "react-icons/rx";

interface MobileViewProps {
    toggleMenu: () => void;
    isOpen: boolean;
}

const MobileView = ({toggleMenu , isOpen} : MobileViewProps) => {

    return (
        <>
            <ul className=" relative h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 flex w-full gap-2 sm:hidden" data-justify="end">

                <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold flex h-full items-center">
                    <label aria-label="Switch to light mode" className="group relative max-w-fit inline-flex items-center justify-start touch-none tap-highlight-transparent select-none p-1 w-8 h-8 transition-opacity hover:opacity-80 cursor-pointer">

                        <div aria-hidden="true" className="relative shrink-0 overflow-hidden outline-solid outline-transparent group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:text-primary-foreground transition-background w-auto h-auto bg-transparent rounded-lg flex items-center justify-center group-data-[selected=true]:bg-transparent pt-0 px-0 mx-0 text-default-500! dark:text-default-500!">
                            <svg aria-hidden="true" fill="none" focusable="false" height="22" role="presentation" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.778 4.223L17.556 6.254M4.222 4.223L6.444 6.254M6.444 17.556L4.222 19.778M19.778 19.777L17.556 17.555" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                            </svg>
                        </div>

                    </label>
                </li>

                {/* Hamburger Menu Icon */}

                <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold w-10 h-full" onClick={toggleMenu}>
                    <button className="group flex justify-center rounded-small tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-full h-full">
                        {
                            !isOpen ? <GiHamburgerMenu size={22} />
                                
                                : <RxCross2 size={22} />
                        }
                    </button>
                </li>


            </ul>

        </>
    )
}

export default MobileView;
