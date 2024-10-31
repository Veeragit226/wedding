import { useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/images/logo-a.png'
import Profile from '../assets/images/profile.png'
import '../assets/css/nav.css'

const navigation = [
  { name: 'EXPLORE', href: '#' },
  { name: 'All PAGES', href: '#' },
  { name: 'TOP PAGES', href: '#' },
  { name: 'PLANES', href: '#' },
  { name: 'REGISTER', href: '#' },
  { name: 'DASHBOARD', href: '#' }

]

export default function Navebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovering, setHovering] = useState(false)

  return (
    <>
      <header className="sticky bg-white inset-x-0 top-0 z-50  shadow-md ">
        <nav aria-label="Global" className="mx-auto max-w-7xl px-5 flex items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">

            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={Logo}
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden  ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-white  animate-ping relative  bg-yellow-600"
            >
              <span className=" sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className=" h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex absolute items-center justify-center rounded-full p-2.5 text-white  bg-yellow-600"
            >
              <span className=" sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className=" h-6 w-6" />
            </button>
          </div>
          <div className="hidden ps-20 lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/5  text-yellow-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative  flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={Profile}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed  inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={Logo}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/5 text-yellow-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}
