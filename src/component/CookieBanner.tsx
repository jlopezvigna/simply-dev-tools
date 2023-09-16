"use client";
import React from "react";
import Link from "next/link";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${
                          cookieConsent != null ? "hidden" : "flex"
                        } px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            We use <span className="font-bold text-sky-400">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}

// We use cookies to improve your experience on this and other websites. Cookies are text files stored by your browser. They contain information that helps us tailor the content you see on F‑Secure pages, aggregate statistics of site usage and performance, and offer more relevant advertisements of our products and services elsewhere on the web. Accepting all cookies provides you with a better user experience. By using F‑Secure websites, you accept the use of cookies. By declining you opt-out from optional cookies. You may also adjust your settings to disable certain optional cookies.
