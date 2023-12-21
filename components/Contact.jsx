'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 mt-20 pt-20" id='contact'>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-600" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form action="#" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" data-aos="zoom-in-right"
              data-aos-duration="2000" className="block text-sm font-semibold leading-6 text-gray-600">
              First name
            </label>
            <div className="mt-2.5">
              <input
                data-aos="zoom-in-right"
                data-aos-duration="2000"
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-full shadow-2xl shadow-gray-500 border-0 px-3.5 py-2 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" data-aos="zoom-in-left"
              data-aos-duration="2000" className="block text-sm font-semibold leading-6 text-gray-600">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-600 shadow-2xl shadow-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" data-aos="fade-inwn"
              data-aos-duration="2000" className="block text-sm font-semibold leading-6 text-gray-600">
              Email
            </label>
            <div className="mt-2.5">
              <input
                data-aos="fade-inwn"
                data-aos-duration="2000"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-600 shadow-2xl shadow-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="message" data-aos="fade-inwn"
              data-aos-duration="2000" className="block text-sm font-semibold leading-6 text-gray-600">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                data-aos="fade-inwn"
                data-aos-duration="2000"
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-3xl p-6 shadow-2xl shadow-gray-500 truncate border-0 px-3.5 py-2 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                data-aos="fade-inght"
                data-aos-duration="2000"
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only pt-6" data-aos="fade-inght"
                  data-aos-duration="2000">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600" data-aos="fade-in"
              data-aos-duration="2000">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            data-aos="fade-in"
            data-aos-duration="2000"
            type="submit"
            className="block w-full rounded-full  bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-2xl shadow-gray-500 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-90 transition-all duration-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
