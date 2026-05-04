"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { useVariant } from "@/lib/VariantContext";
import Image from "next/image";
import { siteData } from "@/lib/shared-data";
import LogoIcon from "@/components/LogoIcon";
import { Playfair_Display } from "next/font/google";

const logoFont = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

const pageContent = {
  fi: {
    nav: ["Valikko", "Hieronnat", "Palvelut", "Yrityksille", "Meistä"],
    teamDescription:
      "Harmonia-tiimin vahvuus on monipuolinen asiantuntemus. Kaikki terapeuttimme ovat Valviran laillistamia terveydenhuollon ammattilaisia, jotka sitoutuvat korkealaatuiseen hoitoon ja ammattitaitonsa jatkuvaan kehittämiseen. Tavoitteemme on aina tarjota sinulle yksilöllinen hoitosuunnitelma, joka tukee juuri sinun hyvinvointiasi.",
    booking: "Varaa aika",
    bookingNav: ["Palvelut", "Aika", "Asiakastiedot", "Maksu"],
    cardDesc:
      "Etukortilla saat aina 30% alennusta koulutettujen hierojiemme palveluista. Osta oma korttisi joko verkosta tai vastaanotoltamme ja säästä heti ensimmäisestä hieronnasta.",
    services: [
      {
        title: "Ensikäynti 50 min",
        description:
          "Hieronnan ensikäynti on tarkoitettu uusille asiakkaille sekä heille, jotka eivät ole käyneet meillä vuosina 2025–2026. (Palvelusta ei ole mahdollista saada alennusta)",
        pricing: "46€",
      },
      {
        title: "Ensikäynti 25 min",
        description:
          "Hieronnan ensikäynti on tarkoitettu uusille asiakkaille sekä heille, jotka eivät ole käyneet meillä vuosina 2025–2026. (Palvelusta ei ole mahdollista saada alennusta)",
        pricing: "29€",
      },
      {
        title: "Klassinen hieronta",
        description: "Perinteinen hieronta.",
        pricing: "47€",
      },
      {
        title: "Kuumakivihieronta",
        description: "Perinteinen hieronta kohtaa lämpöhoidon.",
        pricing: "60€",
      },
      {
        title: "Urheiluhieronta",
        description: "Tehokas hieronta lihasten palautumiseen.",
        pricing: "55€",
      },
      {
        title: "Jalkahieronta",
        description: "Jalkapohjien hieronta.",
        pricing: "52€",
      },
      {
        title: "Hieronnat",
      },
      {
        title: "Osteopatia",
      },
    ],
    progressButtonF: "Jatka",
    progressButtonB: "Takaisin",
    confirmButton: "Vahvista varaus",
    appointment: "Ajanvaraus",
    date: "Päivämäärä",
    openTimes: "Vapaat ajat",
    selectTime: "Valitse aika...",
    employee: "Työntekijä",
    selectEmployee: "Valitse työntekijä",
    customerDetails: "Asiakkaan tiedot",
    fName: "Etunimi",
    lName: "Sukunimi",
    eAddress: "Sähköpostiosoite",
    payment: "Maksu",
    paymentAction: "Siirry maksamaan verkkopankkiin",
    locationMainTitle: "Sijainti ja aukioloajat",
    locationTitle: "Sijainti",
    openHours: "Aukioloajat",
    monFri: "Maanantai - Perjantai",
    sat: "Lauantai",
    sun: "Sunnuntai",
    monFriOpenHours: "9:00-19:00",
    satOpenHours: "10:00-17:00",
    sunOpenHours: "Suljettu",
    mapTitle: "Kartta",
    aboutUs: "Tutustu meihin",
    footer: ["Tietosuoja", "Käyttöehdot", "Saavutettavuus"],
    phonePricing: "0,39 €/min",
    phoneOpenHours: "ma-pe 9-14",
    footerCopyright: "Harmonia. Kaikki oikeudet pidätetään.",
    confirmationAlert: "Varaus onnistui!",
    ad: "Mainos",
    cookieTitle: "Evästeasetukset",
    cookieText: "Käytämme evästeitä parantaaksemme käyttökokemustasi ja analysoidaksemme sivuston liikennettä.",
    cookieAccept: "Hyväksy evästeet",
    cookieDecline: "Hylkää",
    cookieDeclineHover: "Sinun täytyy hyväksyä evästeet",
    cookieLocation: "Sijaintitiedot",
    cookieAds: "Kohdennettu mainonta",
    aiTitle: "Harmonia Asiakaspalvelu",
    aiGreeting: "Hei, olen tekoälyavustajasi ja olen valmiina auttamaan sinua. Onko sinulla kysyttävää palveluistamme?",
    aiPlaceholder: "Kirjoita viesti...",
    aiSend: "Lähetä",
    aiWait: "Odota hetki, ilmoitamme sinulle heti kun asiakaspalvelija on vapaana.",
    cardsTitle: "Suomen rentouttavin hierontaketju palveluksessasi!",
    cardsDesc: "Harmonia on Suomen johtava hyvinvointipalveluja tarjoava hierontaketju. Vastaanotoillamme sinua hoitavat koulutetut hierojat, erikoishierojat, osteopaatit ja naprapaatit tavoitteellisesti kohti parempaa hyvinvointia.",
    card1Title: "Hierontakortti",
    card1Desc: "Harmonian kanta-asiakkaana saat 30% alennuksen normaalihintaisista hieronnoista.",
    card1Link: "Siirry kauppaan",
    card2Title: "Terveytesi tukena",
    card2Desc: "Lue kuinka hieronta auttaa ylläpitämään terveyttäsi läpi elämän.",
    card2Link: "Lue lisää",
    card3Title: "Hinnat ja maksutavat",
    card3Desc: "Tutustu palveluvalikoimaan ja hinnastoon. Meillä käy ePassi, Smartum ja Edenred.",
    card3Link: "Katso hinnasto",
    footerTitle: "Terveytesi on tärkein!",
    footerCol1: "Ajanvaraus",
    footerCol1_1: "Varaa aika",
    footerCol1_2: "Siirrä ajanvaraus",
    footerCol1_3: "Palvelumme",
    footerCol1_4: "Hinnasto",
    footerCol2: "Verkkokauppa",
    footerCol2_1: "Lahjakortit",
    footerCol2_2: "Ostoskori",
    footerCol2_3: "Kassa",
    footerCol2_4: "Oma tili",
    footerCol3: "Yrityksemme",
    footerCol3_1: "Julkaisut",
    footerCol3_2: "Yrityksemme",
    footerCol3_3: "Meille töihin",
    footerCol3_4: "Yhteystiedot",
    footerCol4: "Ehdot",
    footerCol4_1: "Varaus- ja peruutusehdot",
    footerCol4_2: "Verkkokaupan tilausehdot",
    footerCol4_3: "Sivuston käyttöehdot",
    footerCol4_4: "Tietosuojaseloste",
    footerCol5: "Yrityksille",

  },
  en: {
    nav: ["Menu", "Massages", "Services", "To companies", "About us"],
    teamDescription:
      "The strength of the Harmonia team is its diverse expertise. All our therapists are Valvira‑licensed healthcare professionals who are committed to high‑quality care and the continuous development of their skills. Our goal is always to offer you an individual treatment plan that supports your well‑being.",
    booking: "Book an appointment",
    bookingNav: ["Services", "Time", "Customer information", "Payment"],
    cardDesc:
      "With a membership card, you always get a 30% discount on the services of our trained massage therapists. Buy your own card either online or at our reception and save from your very first massage.",
    services: [
      {
        title: "First visit 50 min",
        description:
          "The first massage visit is intended for new customers and for those who have not visited us during 2025–2026. (Discounts are not available for this service)",
        pricing: "46€",
      },
      {
        title: "First visit 25 min",
        description:
          "The first massage visit is intended for new customers and for those who have not visited us during 2025–2026. (Discounts are not available for this service)",
        pricing: "29€",
      },
      {
        title: "Classic massage",
        description: "Traditional massage.",
        pricing: "47€",
      },
      {
        title: "Hot stone massage",
        description: "Traditional massage meets heat therapy.",
        pricing: "60€",
      },
      {
        title: "Sports massage",
        description: "Effective massage for muscle recovery.",
        pricing: "55€",
      },
      {
        title: "Foot massage",
        description: "Feet focused massage",
        pricing: "52€",
      },
      {
        title: "Massages",
      },
      {
        title: "Osteopathy",
      },
    ],
    progressButtonF: "Continue",
    progressButtonB: "Back",
    confirmButton: "Confirm booking",
    appointment: "Appointment",
    date: "Date",
    openTimes: "Available times",
    selectTime: "Select a time...",
    employee: "Employee",
    selectEmployee: "Select an employee",
    customerDetails: "Customer details",
    fName: "First name",
    lName: "Last name",
    eAddress: "Email address",
    payment: "Payment",
    paymentAction: "Proceed to online banking",
    locationMainTitle: "Location and business hours",
    locationTitle: "Location",
    openHours: "Business hours",
    monFri: "Monday - Friday",
    sat: "Saturday",
    sun: "Sunday",
    monFriOpenHours: "9:00-19:00",
    satOpenHours: "10:00-17:00",
    sunOpenHours: "Closed",
    mapTitle: "Map",
    aboutUs: "Get to know us",
    footer: ["Privacy policy", "Terms of use", "Accessibility"],
    phonePricing: "0.39 €/min",
    phoneOpenHours: "Mon–Fri 9–14",
    footerCopyright: "Harmonia. All rights reserved.",
    confirmationAlert: "Reservation complete!",
    ad: "Ad",
    cookieTitle: "Cookie settings",
    cookieText: "We use cookies to improve your experience and analyze site traffic.",
    cookieAccept: "Accept cookies",
    cookieDecline: "Decline",
    cookieDeclineHover: "You must accept cookies",
    cookieLocation: "Location",
    cookieAds: "Targeted advertising",
    aiTitle: "Harmonia Customer Service",
    aiGreeting: "Hi, I am your AI assistant and I am ready to help you. Do you have any questions about our services?",
    aiPlaceholder: "Type a message...",
    aiSend: "Send",
    aiWait: "Please wait, we will notify you as soon as a customer service representative is available.",
    cardsTitle: "The most relaxing massage chain in Finland at your service!",
    cardsDesc: "Harmonia is Finland's leading wellness massage chain. At our clinics, you will be treated by trained massage therapists, specialized massage therapists, osteopaths, and naprapaths, working towards your better well-being.",
    card1Title: "Massage card",
    card1Desc: "As a Harmonia loyal customer, you get a 30% discount on normal-priced massages.",
    card1Link: "Go to store",
    card2Title: "Your health, our priority",
    card2Desc: "Read how massage helps you maintain your health and well-being throughout life.",
    card2Link: "Read more",
    card3Title: "Prices & payment",
    card3Desc: "Browse our services and price list. We accept ePassi, Smartum, and Edenred.",
    card3Link: "See price list",
    footerTitle: "Feel free to take time for yourself!",
    footerCol1: "Booking",
    footerCol1_1: "Book appointment",
    footerCol1_2: "Reschedule appointment",
    footerCol1_3: "Our services",
    footerCol1_4: "Price list",
    footerCol2: "Online store",
    footerCol2_1: "Gift cards",
    footerCol2_2: "Shopping cart",
    footerCol2_3: "Checkout",
    footerCol2_4: "My account",
    footerCol3: "Our company",
    footerCol3_1: "Publications",
    footerCol3_2: "Our company",
    footerCol3_3: "Work with us",
    footerCol3_4: "Contact information",
    footerCol4: "Terms",
    footerCol4_1: "Booking and cancellation terms",
    footerCol4_2: "Online store order terms",
    footerCol4_3: "Site terms of use",
    footerCol4_4: "Privacy policy",
    footerCol5: "For companies",

  },
} as const;

export function CookiePopup({
  isOpen,
  onAccept,
  onDecline,
  studyGroup,
  content,
}: {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  studyGroup: "A" | "B" | null;
  content: typeof pageContent[keyof typeof pageContent];
}) {
  const isGroupB = studyGroup === "B";
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [adsEnabled, setAdsEnabled] = useState(!isGroupB); // Group B: ads off by default
  const isAcceptDisabled = isGroupB && (!locationEnabled || !adsEnabled);

  if (!isOpen) return null;

  const toggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };
  const toggleAds = () => {
    setAdsEnabled(!adsEnabled);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white shadow-2xl border border-gray-200 rounded-xl p-6 z-[100] animate-in slide-in-from-bottom-5">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{content.cookieTitle}</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{content.cookieText}</p>

      <div className="mb-6 space-y-3">
        <div className="relative">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium text-gray-700">{content.cookieLocation}</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={locationEnabled} onChange={toggleLocation} />
              <div className={`block w-10 h-6 rounded-full transition-colors ${locationEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${locationEnabled ? 'transform translate-x-4' : ''}`}></div>
            </div>
          </label>
        </div>
        <div className="relative">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium text-gray-700">{content.cookieAds}</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={adsEnabled} onChange={toggleAds} />
              <div className={`block w-10 h-6 rounded-full transition-colors ${adsEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${adsEnabled ? 'transform translate-x-4' : ''}`}></div>
            </div>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative group">
          <button
            onClick={isAcceptDisabled ? undefined : onAccept}
            disabled={isAcceptDisabled}
            className={`w-full font-semibold py-2.5 rounded-lg transition-colors ${isAcceptDisabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-700 text-white hover:bg-blue-800"
              }`}
          >
            {content.cookieAccept}
          </button>
          {isAcceptDisabled && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block group-focus-within:block w-max max-w-xs bg-gray-900 text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none z-50">
              {content.cookieDeclineHover}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
            </div>
          )}
        </div>

        <div
          className="w-full relative group"
        >
          <button
            onClick={isGroupB ? undefined : onDecline}
            disabled={isGroupB}
            className={`w-full font-medium py-2.5 rounded-lg transition-colors border ${isGroupB
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
          >
            {content.cookieDecline}
          </button>
          {isGroupB && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max max-w-xs bg-gray-900 text-white text-xs py-1.5 px-3 rounded shadow-lg pointer-events-none z-50">
              {content.cookieDeclineHover}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function AiAssistantPopup({
  isOpen,
  onClose,
  onOpen,
  studyGroup,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  studyGroup: "A" | "B" | null;
  content: typeof pageContent[keyof typeof pageContent];
}) {
  const [messages, setMessages] = useState<{ text: string; isAi: boolean }[]>([
    { text: content.aiGreeting, isAi: true }
  ]);
  const [inputValue, setInputValue] = useState("");


  if (!isOpen) {
    return (
      <button
        onClick={onOpen}
        className="ai-assistant fixed left-4 bottom-4 z-[90] w-14 h-14 bg-[#0047AB] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-800 transition-colors animate-in slide-in-from-bottom-4"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      </button>
    );
  }

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { text: inputValue, isAi: false }]);
    setInputValue("");

    setTimeout(() => {
      setMessages(prev => [...prev, { text: content.aiWait, isAi: true }]);
    }, 1000);
  };

  return (
    <div className="ai-assistant fixed left-2 sm:left-4 bottom-4 z-[90] animate-in slide-in-from-bottom-4 max-w-[calc(100vw-1rem)]">
      <div className="bg-white shadow-2xl border border-gray-200 rounded-lg w-80 max-w-full flex flex-col overflow-hidden">
        <div className="bg-[#0047AB] text-white p-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium text-sm">{content.aiTitle}</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            ✕
          </button>
        </div>

        <div className="h-64 p-4 overflow-y-auto flex flex-col space-y-3 bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`max-w-[85%] rounded-lg p-2.5 text-sm ${msg.isAi ? "bg-white border border-gray-200 text-gray-800 self-start" : "bg-[#0047AB] text-white self-end"}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="p-3 bg-white border-t border-gray-200 flex">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#0047AB]"
            placeholder={content.aiPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-[#0047AB] text-white px-3 py-1.5 rounded-r-md text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            {content.aiSend}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Studypage4() {
  const [step, setStep] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { locale } = useLocale();
  const info = siteData[locale];
  const employeeOrder = [2, 4, 0, 3, 1];
  const employeesForPage = employeeOrder
    .map((idx) => info.employees[idx])
    .filter((employee): employee is (typeof info.employees)[number] => Boolean(employee));
  const { studyGroup } = useVariant();
  const content = pageContent[locale];
  const [isAiShowing, setIsAiShowing] = useState(studyGroup === "A");
  const [showCookie, setShowCookie] = useState(true);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const submitBooking = () => {
    alert(content.confirmationAlert);
    setStep(1);
  };

  const isSticky = studyGroup === "A" || studyGroup === null;

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <CookiePopup
        isOpen={showCookie}
        onAccept={() => setShowCookie(false)}
        onDecline={() => setShowCookie(false)}
        studyGroup={studyGroup}
        content={content}
      />
      <AiAssistantPopup
        isOpen={isAiShowing}
        onClose={() => setIsAiShowing(false)}
        onOpen={() => setIsAiShowing(true)}
        studyGroup={studyGroup}
        content={content}
      />

      {/* Navbar - White with blue text */}
      <nav
        className={`bg-white border-b border-gray-200 z-50 ${isSticky ? "sticky top-0" : "relative"}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-3xl font-bold text-[#0047AB] tracking-wide flex items-center">
            <LogoIcon className="h-10 w-10 text-[#0047AB] mr-2" />
            <span className={logoFont.className}>Harmonia</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-[#0047AB] font-medium text-lg">
            {content.nav.map((navItem, idx) => (
              <button key={idx} className="flex items-center hover:text-blue-900">
                {navItem}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            <button className="text-[#0047AB] hover:text-blue-900 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-2 bg-[#0047AB] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button className="text-[#0047AB] hover:text-blue-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hidden sm:block px-6 py-2 rounded-full border-2 border-[#0047AB] text-[#0047AB] font-semibold hover:bg-blue-50 transition-colors">
              {content.footerCol2_1}
            </button>
            <button className="px-6 py-2.5 rounded-full bg-[#0047AB] text-white font-semibold hover:bg-blue-800 transition-colors">
              {content.booking}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-16 px-4 sm:px-6 mt-6 sm:mt-16">

        <div className="flex flex-col md:flex-row gap-12 mt-8 py-10">
          <div className="flex-1 py-8">
            <p className="text-sm text-[#0047AB] mb-6 hover:underline cursor-pointer">
              Etusivu / Vastaanottomme / Hieronta / {info.siteName}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0047AB] mb-6 tracking-tight">
              {info.siteName}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {content.teamDescription}
            </p>
            <button className="text-white bg-[#0047AB] rounded-full px-10 py-4 text-lg font-medium hover:bg-blue-800 transition-colors">
              {content.booking}
            </button>
          </div>
          <div className="flex-1 min-h-[300px] sm:min-h-[500px] relative">
            <Image
              src="/stock-photos/massage-hero-stock.jpg"
              alt="Massage"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              loading="eager"
            />
          </div>
        </div>

        {/* Reservation Portal */}
        <section id="booking" className="scroll-mt-10 border-t-4 border-[#0047AB] pt-10">
          <div className="flex flex-col items-center mb-10 mt-6 text-center">
            <h2 className="text-4xl font-semibold text-[#0047AB] mb-4">
              {content.booking}
            </h2>
          </div>
          <div className="bg-white shadow-lg border border-gray-200 overflow-x-auto w-full mx-auto">
            <div className="flex bg-gray-100 border-b border-gray-200">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className={`flex-1 text-center py-3 font-medium text-sm transition-colors duration-300 cursor-pointer hover:bg-gray-50 ${step === num ? "bg-blue-800 text-white shadow-inner hover:bg-blue-800" : "text-blue-600 bg-white"}`}
                  onClick={() => setStep(num)}
                >
                  <span
                    className={`inline-block w-6 h-6 -full mr-2 ${step === num ? "bg-white text-blue-800" : "bg-blue-100 text-blue-800"} leading-6`}
                  >
                    {num}
                  </span>
                  {num === 1
                    ? content.bookingNav[0]
                    : num === 2
                      ? content.bookingNav[1]
                      : num === 3
                        ? content.bookingNav[2]
                        : content.bookingNav[3]}
                </div>
              ))}
            </div>

            <div className="p-8 min-h-[400px]">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-white bg-blue-800 p-3 mb-4">
                    {content.cardDesc}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      content.services[idx] && (
                        <label key={idx} className="block cursor-pointer group">
                          <input type="radio" name="service" className="peer sr-only" />
                          <div className="border-2 border-gray-200 p-4 h-full hover:bg-blue-50 transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-50/50">
                            <div className="flex justify-between mb-1">
                              <span className="font-semibold text-gray-800 text-sm">{content.services[idx].title}</span>
                              {"pricing" in content.services[idx] && (
                                <span className="font-semibold text-blue-800 text-sm shrink-0 ml-2">{(content.services[idx] as { pricing: string }).pricing}</span>
                              )}
                            </div>
                            {"description" in content.services[idx] && (content.services[idx] as { description: string }).description && (
                              <p className="text-xs text-gray-600">{(content.services[idx] as { description: string }).description}</p>
                            )}
                          </div>
                        </label>
                      )
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-md mx-auto">
                  <h3 className="text-xl font-medium text-gray-700 mb-6 pb-2 border-b">
                    {content.appointment}
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.date}
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                        defaultValue="2026-05-01"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.openTimes}
                      </label>
                      <select className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white" defaultValue="">
                        <option value="" disabled>
                          {content.selectTime}
                        </option>
                        <option>09:00</option>
                        <option>10:30</option>
                        <option>13:00</option>
                        <option>15:00</option>
                        <option>16:30</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.employee}
                      </label>
                      <select className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white" defaultValue="">
                        <option value="" disabled>
                          {content.selectEmployee}
                        </option>
                        {employeesForPage.map((employee) => (
                          <option key={employee.id}>{employee.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-lg mx-auto">
                  <h3 className="text-xl font-medium text-gray-700 mb-6 pb-2 border-b">
                    {content.customerDetails}
                  </h3>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {content.fName}
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {content.lName}
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {content.eAddress}
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 -md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-md mx-auto">
                  <h3 className="text-xl font-medium text-gray-700 mb-4 pb-2 border-b ">
                    {content.payment}
                  </h3>
                  <button
                    className={`px-5 py-2.5  shadow-sm text-sm font-medium transition-colors`}
                  >
                    {content.paymentAction}
                  </button>
                </div>
              )}
            </div>

            {/* Footer Form Controls */}
            <div className="p-5 flex justify-between items-center -b-xl -mt-10 mr-3">
              <button
                onClick={prevStep}
                className={`px-5 py-2.5  shadow-sm text-sm font-medium transition-colors ${step === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed hidden" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}
                disabled={step === 1}
              >
                {content.progressButtonB}
              </button>

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2.5  shadow text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-auto transition-colors"
                >
                  {content.progressButtonF}
                </button>
              ) : (
                <button
                  onClick={submitBooking}
                  className="px-6 py-2.5  shadow-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors ml-auto flex items-center"
                >
                  {content.confirmButton}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section>
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-4xl font-semibold text-[#0047AB] mb-4">
              {content.locationMainTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-grey-300 -xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {content.locationTitle}
              </h3>

              <div className="text-gray-600 mb-8 text-center">
                <p>{info.address}</p>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {content.openHours}
              </h4>
              <ul className="space-y-2 text-gray-600 text-center">
                <li className="py-1 border-b border-gray-100">
                  <span>{content.monFri}</span>
                  <span className="font-medium text-gray-800 ml-2">
                    {content.monFriOpenHours}
                  </span>
                </li>
                <li className="py-1 border-b border-gray-100">
                  <span>{content.sat}</span>
                  <span className="font-medium text-gray-800 ml-2">
                    {content.satOpenHours}
                  </span>
                </li>
                <li className="py-1">
                  <span>{content.sun}</span>
                  <span className="font-medium text-gray-400 ml-2">
                    {content.sunOpenHours}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 relative min-h-[300px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-100 border-l border-gray-200">
                <Image
                  src="/icons/map-light.png"
                  alt="Location"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h5 className="absolute top-2 left-3 z-10 text-sm font-semibold text-gray-800 bg-white/80 px-2 py-1 rounded">
                {content.mapTitle}
              </h5>
            </div>
          </div>
        </section>

        {/* Employee Information */}
        <section className="pb-16">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-4xl font-semibold text-[#0047AB] mb-4">
              {content.aboutUs}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {employeesForPage.map((employee) => (
              <article key={employee.id} className="text-center">
                <div className="flex flex-col items-center rounded-xl bg-white p-2">
                  <div className="h-44 w-44 overflow-hidden rounded-full bg-white sm:h-36 sm:w-36 md:h-40 md:w-40">
                    {/* Next.js unoptimized used for external links in this mockup */}
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {employee.name}
                    </h3>
                    <div className="flex items-center justify-center text-sm mb-4">
                      <span className="text-blue-600 font-medium">
                        {employee.role}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>


      {/* 3 Cards Section */}
      <section className="bg-white py-16 mt-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="border-t-4 border-[#0047AB] mb-12" />
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl font-medium text-[#0047AB] mb-4">
              {content.cardsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl">
              {content.cardsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 flex flex-col group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                <Image src="/stock-photos/Extra1-fit.avif" alt="Hierontakortti" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{content.card1Title}</h3>
                <p className="text-gray-600 mb-8 flex-1 text-lg">
                  {content.card1Desc}
                </p>
                <div className="text-[#0047AB] font-medium flex items-center group-hover:underline text-lg">
                  {content.card1Link} <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 flex flex-col group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                <Image src="/stock-photos/Extra2-oldman.avif" alt="Maksutavat" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{content.card2Title}</h3>
                <p className="text-gray-600 mb-8 flex-1 text-lg">
                  {content.card2Desc}
                </p>
                <div className="text-[#0047AB] font-medium flex items-center group-hover:underline text-lg">
                  {content.card2Link} <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 flex flex-col group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                <Image src="/stock-photos/Extra3-relaxedwoman.avif" alt="Hinnat" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{content.card3Title}</h3>
                <p className="text-gray-600 mb-8 flex-1 text-lg">
                  {content.card3Desc}
                </p>
                <div className="text-[#0047AB] font-medium flex items-center group-hover:underline text-lg">
                  {content.card3Link} <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Blue Footer */}
      <footer className="bg-[#0047AB] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

            {/* Logo and Info Column */}
            <div className="md:col-span-4 flex flex-col">
              <div className="text-4xl font-bold tracking-wide flex items-center mb-6">
                <LogoIcon className="h-16 w-16 text-white mr-3" />
                <span className={logoFont.className}>Harmonia</span>
              </div>
              <p className="font-semibold text-xl mb-8">
                {content.footerTitle}
              </p>

              <div className="flex items-center mb-4 text-sm font-medium">
                <svg className="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                {info.address}
              </div>
              <div className="flex items-center mb-4 text-sm font-medium">
                <span className="mr-4 text-xl">@</span>
                {info.email}
              </div>
              <div className="flex items-center text-sm font-medium">
                <svg className="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {info.phone} ({content.phonePricing}) {content.phoneOpenHours}
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h4 className="font-semibold text-lg mb-6">{content.footerCol1}</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="hover:underline">{content.footerCol1_1}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol1_2}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol1_3}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol1_4}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6">{content.footerCol2}</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="hover:underline">{content.footerCol2_1}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol2_2}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol2_3}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol2_4}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6">{content.footerCol3}</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="hover:underline">{content.footerCol3_1}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol3_2}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol3_3}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol3_4}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6">{content.footerCol4}</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="hover:underline">{content.footerCol4_1}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol4_2}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol4_3}</a></li>
                  <li><a href="#" className="hover:underline">{content.footerCol4_4}</a></li>
                </ul>
                <h4 className="font-semibold text-lg mt-8 mb-6">{content.footerCol5}</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="hover:underline">{content.footerCol5}</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-700 flex justify-between items-center text-xs font-medium">
            <p>
              &copy; 2026 Harmonia Oy | Design by Uef students
            </p>
            <div className="flex space-x-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
