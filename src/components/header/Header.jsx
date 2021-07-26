import React, { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    UserIcon,
    BriefcaseIcon,
    MenuIcon,
    DeviceMobileIcon,
    DesktopComputerIcon,
    AcademicCapIcon,
    XIcon,
} from '@heroicons/react/outline'

const menu = [
  {
    name: 'About',
    href: '#about',
    icon: UserIcon,
  },
  {
    name: 'Experience',
    href: '#experience',
    icon: BriefcaseIcon,
  },
  { 
      name: 'Eduction', 
      href: '#education', 
      icon: AcademicCapIcon, 
  },
  {
    name: 'Skills',
    href: '#skill',
    icon: DesktopComputerIcon,
  },
  {
    name: 'Contact',
    href: '#contact',
    icon: DeviceMobileIcon,
  },
]

export default function Header({about}) {
  const THEME = 'dark';

  const getIsDark = () =>  window.localStorage.getItem(THEME) === THEME;

  const [isDark, setIsDark] = useState(getIsDark);

  const themeToggle = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    if(isDark) {
      window.localStorage.setItem(THEME, 'dark');
      document.documentElement.classList.add('dark')
    } else {
      window.localStorage.setItem(THEME, '');
      document.documentElement.classList.remove('dark')
    }
  });

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#home" className="logo">
                    <span className="text-base logo-name text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">{about.logo}</span>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav as="nav" className="hidden md:flex space-x-10">
                {menu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                      >
                        {item.name}
                      </a>
                ))}
                <button type="button" onClick={() => themeToggle()} className="text-base font-medium text-gray-500 hover:text-gray-900 animate-wiggle dark:text-gray-200 dark:hover:text-white">
                  {
                    isDark ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  }
                </button>    
              </nav>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-0 p-2 transition transform origin-top-right md:hidden h-screen"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 h-screen bg-white dark:bg-gray-800">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="#home" className="logo">
                        <span className="text-base logo-name text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">{about.logo}</span>
                      </a>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {menu.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-500"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-gray-500 dark:text-gray-200" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-200">{item.name}</span>
                        </a>
                      ))}
                      
                    </nav>
                  </div>
                </div>

              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}