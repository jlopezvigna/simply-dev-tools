"use client";

import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

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
  }, [cookieConsent]);

  return (
    <div
      className={`transition-all fixed max-w-screen-lg mx-auto bg-white m-auto ${
        cookieConsent != null ? "translate-y-full" : "-translate-y-1/3"
      } bottom-0 inset-x-5 p-5 rounded-lg flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between`}
    >
      <div className="w-full">
        This website uses cookies to ensure you get the best experience on our
        website.
      </div>
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button
          color="primary"
          variant="flat"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </Button>
        <Button
          color="primary"
          className="px-5 py-2"
          onClick={() => setCookieConsent(true)}
        >
          Allow Coockies
        </Button>
      </div>
    </div>
  );
}
