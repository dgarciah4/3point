import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Logo from './Logo.svg'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  GlobeAmericasIcon,
  BeakerIcon,
  BanknotesIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { FaBeer } from 'react-icons/fa';
import { GiBasketballBasket, GiHockey, GiSoccerField } from "react-icons/gi";
import { IoAmericanFootballOutline, IoBaseballOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

const more = [
  { name: 'The Lab', description: 'Build your perfect parlay', href: '/TheLab', icon: BeakerIcon },
  { name: 'Social Hub', description: 'Keep up with the 3Point community, see shared props and more', href: '/SocialHub', icon: GlobeAmericasIcon },
  { name: 'Betting Simulator', description: 'Simulate your props, or just simulate props your interested in', href: '/BettingSimulator', icon: BanknotesIcon },
  { name: 'Cheat Sheet', description: 'Cheat Sheet prop projections', href: '/CheatSheet', icon: ChartPieIcon },
]


const sports = [
   { name: 'Basketball', href: '/Basketball', icon: GiBasketballBasket },
  { name: 'Football', href: '/Football', icon: IoAmericanFootballOutline },
  { name: 'Baseball', href: '/Baseball', icon: IoBaseballOutline },
  { name: 'Hockey', href: '/Hockey', icon: GiHockey },
  { name: 'Soccer', href: '/Soccer', icon: GiSoccerField },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact Support', href: '#', icon: EnvelopeIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/Home" className="-m-1.5 p-1.5">
            <span className="sr-only">3Point</span>
            <img className=""style={{height: 205, width: 205}} src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-15 w-14" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
  <NavLink to="/StartTrial" className="text-sm font-semibold leading-6 text-white hover:text-gold">
  Start-Trial
</NavLink>
  <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gold">
      Sports
      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
    </Popover.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {sports.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
             <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent group-hover:bg-transparent">
                  <item.icon className="h-6 w-6 text-gold group-hover:text-indigo-600" aria-hidden="true" />
              </div>
              <div className="flex-auto">
                <NavLink to={item.href} className="block font-semibold text-gold">
                  {item.name}
                  <span className="absolute inset-0" />
                </NavLink>
                <p className="mt-1 text-gold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  <NavLink to="/Faq" className="text-sm font-semibold leading-6 text-white hover:text-gold">
  FAQ
</NavLink>
  <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gold">
      More
      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
    </Popover.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {more.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent group-hover:bg-transparent">
                <item.icon className="h-6 w-6 text-gold group-hover:text-indigo-600" aria-hidden="true" />
              </div>
              <div className="flex-auto">
                <NavLink to={item.href} className="block font-semibold text-gold">
                  {item.name}
                  <span className="absolute inset-0" />
                </NavLink>
                <p className="mt-1 text-gold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-black hover:bg-gray-100 bg-gold"
            >
              <item.icon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
</Popover.Group>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <a href="Login" className="text-sm font-semibold leading-6 bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-600 hover:to-gray-800 text-gray-50 px-3 py-1 rounded-md border-2 border-gold">
    Log in <span className="ml-1 text-gold" aria-hidden="true">&rarr;</span>
  </a>
</div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/Home" className="-m-1.5 p-1.5">
            <span className="sr-only">3Point</span>
            <img className=""style={{height: 205, width: 205}} src={Logo} alt="" />
          </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                  
                <NavLink
                  to="StartTrial"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gold hover:text-black"
                >
                  Start-Trial
                </NavLink>
                 <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gold">
      Sports
      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
    </Popover.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
     <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {sports.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-black">
                                <item.icon className="h-6 w-6 text-text-sky-100 group-hover:text-indigo-600" aria-hidden="true" />
                              </div>
                              <div className="flex-auto">
                                <NavLink to={item.href} className="block font-semibold text-gold">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </NavLink>
                                <p className="mt-1 text-gold">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                  <NavLink
                  to="Faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gold hover:text-black"
                >
                  FAQ
                </NavLink>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gold hover:text-black">
                    More 
                    <ChevronDownIcon
                      className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {[...more, ...callsToAction].map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gold hover:text-black"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="py-6">
            <NavLink
              to="Login"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gold hover:text-black"
            >
              Log in
            </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
