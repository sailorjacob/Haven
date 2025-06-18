"use client"

import Link from "next/link"

export default function CookiesPage() {
  return (
    <main className="bg-white min-h-screen py-24 px-6 text-zinc-900">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold">Cookies</h1>
        <p>
          To make this site work properly, we sometimes place small data files called cookies on your device. Most big websites do this too.
        </p>
        <h2 className="text-xl font-medium">What are cookies?</h2>
        <p>
          A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
        </p>
        <h2 className="text-xl font-medium">How do we use cookies?</h2>
        <p>
          We use cookies for many purposes. We use them, for example, to remember your preferences, to count how many visitors we receive to a page and other statistical reasons, to help you sign up for our services and to protect your data.
        </p>
        <p>
          This website uses cookies from Google to provide its services, to personalise content and ads and to analyse our traffic. Google shares information about your use of our site. By using this website, you accept the usage of cookies. Learn more…
        </p>
        <h2 className="text-xl font-medium">How to control cookies</h2>
        <p>
          You can control and/or delete cookies as you wish – for details, see <Link href="https://aboutcookies.org" className="underline" target="_blank" rel="noopener noreferrer">aboutcookies.org</Link>. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
      </div>
    </main>
  )
} 