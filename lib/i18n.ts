export type Locale = "fi" | "en";

export const defaultLocale: Locale = "fi";
export const supportedLocales: Locale[] = ["fi", "en"];

type Messages = {
  intro: {
    badge: string;
    title: string;
    lead: string;
    steps: { label: string; desc: string }[];
    privacyNote: string;
    begin: string;
  };
  locale: {
    label: string;
    finnish: string;
    english: string;
  };
  corporate: {
    badge: string;
    title: string;
    body: string;
    rateButton: string;
    navOverview: string;
    navFeatures: string;
    navBack: string;
  };
  survey: {
    title: string;
    description: string;
    responsesSaved: string;
    notConfigured: string;
    close: string;
    back: string;
    next: string;
  };
  floating: {
    openSurvey: string;
    hint: string;
  };
  pages: {
    page1Title: string;
    page2Title: string;
    page3Title: string;
    page4Title: string;
    pageBody: string;
  };
};

const messages: Record<Locale, Messages> = {
  fi: {
    intro: {
      badge: "Käyttöliittymätutkimus",
      title: "Tutkimuksen ohjeet",
      lead: "Tehtävänäsi on käydä läpi sarja testiverkkosivuja ja arvioida niitä aivan kuin olisit mahdollinen asiakas. Suosittelemme käyttämään tietokonetta.",
      steps: [
        { label: "Aloita esitiedoista", desc: "Vastaa kyselyn ensimmäisellä sivulla muutamaan taustakysymykseen." },
        { label: "Arvioi sivuja", desc: "Nettisivut ovat prototyyppejä, joten kaikki toiminnot eivät ole aitoja. Arvioi niitä ulkoasun ja yleisen käyttötuntuman perusteella." },
        { label: "Vastaa kyselyyn", desc: "Jokaiselle testisivulle on kyselyssä oma arviosivunsa. Muista painaa kyselyssä 'Seuraava' aina sivua vaihtaessasi." },
        { label: "Lähetä vastaukset", desc: "Muista lopuksi painaa kyselyn viimeisellä sivulla 'Lähetä'." },
      ],
      privacyNote: "Tämä tutkimus ei kerää sinusta mitään tunnistettavia tietoja. Sivuilla näkyvät evästeilmoitukset ovat mukana vain luomassa realistista käyttökokemusta, eivätkä ne oikeasti kerää dataa.",
      begin: "Aloita tutkimus",
    },
    locale: {
      label: "Kieli",
      finnish: "Suomi 🇫🇮",
      english: "Englanti 🇬🇧",
    },
    corporate: {
      badge: "Esimerkkisivu",
      title: "Esimerkkisivun käyttökokemus",
      body: "Tämä sivu toimii tutkimuksen demona. Arvioi vaikutelmasi ja avaa sitten kysely.",
      rateButton: "Arvioi tämä sivu",
      navOverview: "Yleiskuva",
      navFeatures: "Ominaisuudet",
      navBack: "Takaisin",
    },
    survey: {
      title: "Arviointikysely",
      description: "Vastaa kysymyksiin ja paina 'Seuraava sivu', kun olet valmis siirtymään eteenpäin.",
      responsesSaved: "Vastaukset säilyvät sivujen välillä",
      notConfigured:
        "Aseta NEXT_PUBLIC_WEBROPOL_SURVEY_URL, jotta kysely upotetaan tähän.",
      close: "Sulje",
      back: "Takaisin",
      next: "Seuraava sivu",
    },
    floating: {
      openSurvey: "Avaa kysely",
      hint: "Paina tästä, kun olet valmis vastaamaan kysymyksiin.",
    },
    pages: {
      page1Title: "Tutkimussivu 1",
      page2Title: "Tutkimussivu 2",
      page3Title: "Tutkimussivu 3",
      page4Title: "Tutkimussivu 4",
      pageBody:
        "Tarkastele sivua normaalisti ja käytä kelluvaa kyselypainiketta vastataksesi.",
    },
  },
  en: {
    intro: {
      badge: "Website interface study",
      title: "Study Instructions",
      lead: "Your task is to go through a series of test websites and evaluate them as if you were a potential customer. We recommend using a computer.",
      steps: [
        { label: "Start with background questions", desc: "Answer a few background questions on the first page of the survey." },
        { label: "Evaluate the pages", desc: "The websites are prototypes, so not all features are real. Evaluate them based on their appearance and overall feel." },
        { label: "Answer the survey", desc: "Each test page has its own rating page in the survey. Remember to press 'Next' in the survey every time you change pages." },
        { label: "Submit your answers", desc: "Finally, remember to press 'Submit' on the last page of the survey." },
      ],
      privacyNote: "This study does not collect any identifiable information about you. Cookie notices shown on the pages are included only to simulate a realistic browsing experience and do not actually collect any data.",
      begin: "Begin Study",
    },
    locale: {
      label: "Language",
      finnish: "Finnish 🇫🇮",
      english: "English 🇬🇧",
    },
    corporate: {
      badge: "Sample Page",
      title: "Sample Page Experience",
      body: "This page acts as a study demo. Review your impression and then open the survey.",
      rateButton: "Rate This Page",
      navOverview: "Overview",
      navFeatures: "Features",
      navBack: "Back",
    },
    survey: {
      title: "Interface Study Survey",
      description: "Answer the questions and press 'Next page' when you are ready to move on.",
      responsesSaved: "Responses stay between pages",
      notConfigured:
        "Set NEXT_PUBLIC_WEBROPOL_SURVEY_URL to embed the survey here.",
      close: "Close",
      back: "Back",
      next: "Next page",
    },
    floating: {
      openSurvey: "Open Survey",
      hint: "Press here when you are ready to answer the questions.",
    },
    pages: {
      page1Title: "Study Page 1",
      page2Title: "Study Page 2",
      page3Title: "Study Page 3",
      page4Title: "Study Page 4",
      pageBody:
        "Review the page naturally and use the floating survey button to submit your response.",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages[defaultLocale];
}
