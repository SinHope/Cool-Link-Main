import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

import { WhatsAppButton } from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Contact',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Contact Us
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Would you like to message us direct?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
        <WhatsAppButton />
        </Link>{' '}
        `Send us a message on WhatsApp!`
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <p>Otherwise, please use below email service</p>
        <br></br>
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Company Name"
          name="company_name"
          type="text"
          autoComplete="company"
          required
        />
        <SelectField
          className="col-span-full"
          label="Purpose Of Your Message"
          name="referral_source"
        >
          <option>Quote Enquiry</option>
          <option>Feedback</option>
          <option>Commercial Relations</option>
          <option>Customer Service(order/aftersales)</option>
        </SelectField>
        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Type your message here..."
            required
          />
        </div>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Send Message <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
