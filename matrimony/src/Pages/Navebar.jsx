import { useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/images/logo-a.png'
import Profile from '../assets/images/profile.png'
import '../assets/css/nav.css'
import { AnimatePresence, motion } from "framer-motion";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// import ChevronDownIcon from '@heroicons/react/24/outline'

// const navigation = [
//   {
//     name: 'EXPLORE',
//     href: '#'
//   },
//   {
//     name: 'All PAGES',
//     href: '#'
//   },
//   {
//     name: 'TOP PAGES',
//     href: '#'
//   },
//   {
//     name: 'PLANES',
//     href: '#'
//   },
//   {
//     name: 'REGISTER',
//     href: '#'
//   },
//   {
//     name: 'DASHBOARD',
//     href: '#'
//   }

// ]




const user = [
  { name: 'veera', headding: 'user' }
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
          <div className="hidden ps-20 lg:flex lg:gap-x-8 text-yellow-900">
            {/* {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/5  text-yellow-900">
                {item.name}
              </a>
            ))} */}


      <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Explore}>
      EXPLORE 
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Allpages}>
        ALL PAGES
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Toppages}>
        TOP PAGES
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " >
        PLANING
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " >
        REGISTER
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Dashboard}>
        DASHBOARD
      </FlyoutLink>
   
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


          <div className="hidden ps-2 lg:flex lg:gap-x-8">
            {user.map((item) => (

              <a key={item.name} href={item.href} className=''>
                <span className='text-sm/5 text-gray-600'>{item.headding}</span><br />
                <span className=" text-yellow-900">{item.name}</span>

              </a>
            ))}
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
                  {/* {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/5 text-yellow-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))} */}
                        <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Explore}>
      EXPLORE 
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Allpages}>
        ALL PAGES
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Toppages}>
        TOP PAGES
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " >
        PLANING
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " >
        REGISTER
      </FlyoutLink>
      <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Dashboard}>
        DASHBOARD
      </FlyoutLink>
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




const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-yellow-900">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-yellow-900 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// explore details
const Explore = () => {
  return (
    <>
      <h3 className="font-semibold text-yellow-900  bg-white p-6 shadow-xl">Explore</h3>

    <div className="fullwidth flex text-yellow-900  bg-white p-6 shadow-xl">
      <div className="mb-3 flex-none space-y-3">
        
        <a href="#" className="block text-sm ">
        <Card className="card-dtl card-child-1">
      <CardBody>
        <Typography variant="h5">
          UI/UX Review Check
        </Typography>
        <Typography>
          just
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button className="px-3 py-2 bg-black">Read More</Button>
      </CardFooter>
    </Card>
        </a>
       
      </div>
      <div className="mb-3  flex-none space-y-3">
        
        <a href="#" className="block text-sm hover:underline">
        <Card className="card-dtl card-child-1">
      <CardBody>
        <Typography variant="h5">
          UI/UX Review Check
        </Typography>
        <Typography>
          just
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button className="px-3 py-2 bg-black">Read More</Button>
      </CardFooter>
    </Card>
        </a>
      </div>
      <div className="mb-3 flex-none space-y-3">
       
        <a href="#" className="block text-sm hover:underline">
        <Card className="card-dtl card-child-1">
      <CardBody>
        <Typography variant="h5">
          UI/UX Review Check
        </Typography>
        <Typography>
          just
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button className="px-3 py-2 bg-black">Read More</Button>
      </CardFooter>
    </Card>
        </a>
      </div>
      

    </div>
    </>
  );
};



// All pages
const Allpages = () => {
  return (
    <div className="fullwidth flex flex-row text-yellow-900  bg-white p-6 shadow-xl">
      <div className="mb-3 flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 1</h3>
        <a href="#" className="block  text-sm hover:underline">
        ALL PROFILES
        </a>
        <a href="#" className="block text-sm hover:underline">
         PROFILE DETAILS
        </a>
        <a href="#" className="block text-sm hover:underline">
         WEDDING
        </a>
        <a href="#" className="block text-sm hover:underline">
         WEDDING VIDEO
        </a>
        <a href="#" className="block text-sm hover:underline">
         OUR SERVICES
        </a>
      </div>
      <div className="mb-3  flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 2</h3>
        <a href="#" className="block  text-sm hover:underline">
        PRICING PLANING
        </a>
        <a href="#" className="block text-sm hover:underline">
         LOGIN
        </a>
        <a href="#" className="block text-sm hover:underline">
         SING-UP
        </a>
        <a href="#" className="block text-sm hover:underline">
         PHOTO GALLERY 1
        </a>
        <a href="#" className="block text-sm hover:underline">
         PHOTO GALLERY 2
        </a>
      </div>
      <div className="mb-3 flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 3</h3>
        <a href="#" className="block  text-sm hover:underline">
        CONTACT
        </a>
        <a href="#" className="block text-sm hover:underline">
         ABOUT
        </a>
        <a href="#" className="block text-sm hover:underline">
         ASK YOUR DOUBTS
        </a>
        <a href="#" className="block text-sm hover:underline">
         FAQ
        </a>
        <a href="#" className="block text-sm hover:underline">
         404
        </a>
      </div>
      

    </div>
  );
};



// Toppages
const Toppages = () => {
  return (
    <div className="fullwidth flex flex-row text-yellow-900  bg-white p-6 shadow-xl">
      <div className="mb-3 flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 1</h3>
        <a href="#" className="block  text-sm hover:underline">
        ALL PROFILES
        </a>
        <a href="#" className="block text-sm hover:underline">
         PROFILE DETAILS
        </a>
        <a href="#" className="block text-sm hover:underline">
         WEDDING
        </a>
        <a href="#" className="block text-sm hover:underline">
         WEDDING VIDEO
        </a>
        <a href="#" className="block text-sm hover:underline">
         OUR SERVICES
        </a>
      </div>
      <div className="mb-3  flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 2</h3>
        <a href="#" className="block  text-sm hover:underline">
        PRICING PLANING
        </a>
        <a href="#" className="block text-sm hover:underline">
         LOGIN
        </a>
        <a href="#" className="block text-sm hover:underline">
         SING-UP
        </a>
        <a href="#" className="block text-sm hover:underline">
         PHOTO GALLERY 1
        </a>
        <a href="#" className="block text-sm hover:underline">
         PHOTO GALLERY 2
        </a>
      </div>
      <div className="mb-3 flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 3</h3>
        <a href="#" className="block  text-sm hover:underline">
        CONTACT
        </a>
        <a href="#" className="block text-sm hover:underline">
         ABOUT
        </a>
        <a href="#" className="block text-sm hover:underline">
         ASK YOUR DOUBTS
        </a>
        <a href="#" className="block text-sm hover:underline">
         FAQ
        </a>
        <a href="#" className="block text-sm hover:underline">
         404
        </a>
      </div>
      

    </div>
  );
};


// Dashboard
const Dashboard = () => {
  return (
    <div className="fullwidth flex flex-row text-yellow-900  bg-white p-6 shadow-xl">
      <div className="mb-3 flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 1</h3>
        <a href="#" className="block  text-sm hover:underline">
        ALL PROFILES
        </a>
        <a href="#" className="block text-sm hover:underline">
         PROFILE DETAILS
        </a>
        <a href="#" className="block text-sm hover:underline">
         WEDDING
        </a>
        <a href="#" className="block text-sm hover:underline">
         WEDDING VIDEO
        </a>
        <a href="#" className="block text-sm hover:underline">
         OUR SERVICES
        </a>
      </div>
      <div className="mb-3  flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 2</h3>
        <a href="#" className="block  text-sm hover:underline">
        PRICING PLANING
        </a>
        <a href="#" className="block text-sm hover:underline">
         LOGIN
        </a>
        <a href="#" className="block text-sm hover:underline">
         SING-UP
        </a>
        <a href="#" className="block text-sm hover:underline">
         PHOTO GALLERY 1
        </a>
        <a href="#" className="block text-sm hover:underline">
         PHOTO GALLERY 2
        </a>
      </div>
      <div className="mb-3 flex-none space-y-3">
        <h3 className="font-semibold">PAGE SETS 3</h3>
        <a href="#" className="block  text-sm hover:underline">
        CONTACT
        </a>
        <a href="#" className="block text-sm hover:underline">
         ABOUT
        </a>
        <a href="#" className="block text-sm hover:underline">
         ASK YOUR DOUBTS
        </a>
        <a href="#" className="block text-sm hover:underline">
         FAQ
        </a>
        <a href="#" className="block text-sm hover:underline">
         404
        </a>
      </div>
      

    </div>
  );
};


// export {FlyoutLink,PricingContent}







