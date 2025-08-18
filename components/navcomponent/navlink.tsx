import Link from 'next/link';
import React from 'react'

interface NavlinkProps {
    href: string;
    name: string;
}

const Navlink = ({href , name} : NavlinkProps) => {
  return (
      <>
          <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
              <Link className="relative inline-flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href={href}>{name}
              
              {/* Right Arrow Icon  */}
              { (name === "Roadmap" || name === "T&C") ?
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="absolute right-[-10px] top-0 outline-solid outline-transparent transition-transform group-data-[hover=true]:translate-y-0.5 [&amp;&gt;path]:stroke-[2.5px]" width="10" height="10" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6m0 0H9m9 0v9"></path></svg> : ""
                  }
                </Link>
          </li>
      </>
  )
}

export default React.memo(Navlink);
