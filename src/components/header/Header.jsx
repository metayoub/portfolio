import React, { Fragment } from 'react'
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
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#home" className="logo">
                    <span className="text-base logo-name text-gray-500 hover:text-gray-900">{about.logo}</span>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav as="nav" className="hidden md:flex space-x-10">
                {menu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                ))}
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
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 h-screen bg-white">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="#home" className="logo">
                        <span className="text-base logo-name text-gray-500 hover:text-gray-900">{about.logo}</span>
                      </a>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
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
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-gray-500 hover:text-gray-900" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
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