"use client";

import { useLocale } from "@/lib/LocaleContext";
import { siteData } from "@/lib/shared-data";
import Image from "next/image";
import { Mada, Marcellus_SC } from "next/font/google";
import { useEffect, useState } from "react";
import { useVariant } from "@/lib/VariantContext";
import LogoIcon from "@/components/LogoIcon";
import PromoPopup from "@/components/PromoPopup";

const titleFont = Marcellus_SC({
	weight: "400",
	subsets: ["latin"],
});

const bodyFont = Mada({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

const pageContent = {
	fi: {
		nav: ["Palvelut", "Tiimi", "Kokemuksia", "Yhteystiedot"],
		heroTitle: "Harmonia hyvinvointi, Tampere",
		heroSubtitle: "Ammattitaitoista hoitoa kehollesi ja mielellesi",
		heroHours: "Ma-pe 9-18, la 10-16, su suljettu",
		booking: "Ajanvaraus",
		bookingNote: "Tämä veisi Timmaan",
		servicesTitle: "Palvelut",
		servicesNotice:
			"Huomioithan: Kaikkiin ensimmäisiin hoitokertoihin sisältyy 15 minuutin maksuton alkukartoitus, jonka aikana kartoitamme tarpeesi ja tavoitteesi. Tämä aika lisätään hoidon kestoon, joten varaa aikaa hieman enemmän.",
		services: [
			{
				title: "Klassinen hieronta",
				description:
					"Perinteinen menetelmä lihaskireyksien poistoon ja verenkierron vilkastuttamiseen. Lievittää kiputiloja ja rentouttaa mieltä.",
				pricing: "30 min 47 € | 45 min 60 € | 60 min 75 €",
				pricingAnchor30: "54 €",
			},
			{
				title: "Urheiluhieronta",
				description:
					"Tehokkaampi hoitomuoto aktiiviliikkujille ja urheilijoille. Keskittyy lihashuoltoon, palautumiseen ja vammojen ennaltaehkäisyyn.",
				pricing: "30 min 50 € | 45 min 65 € | 60 min 80 €",
				pricingAnchor30: "57 €",
			},
			{
				title: "Naprapatia",
				description:
					"Tuki- ja liikuntaelimistön häiriöiden asiantuntijahoito, johon sisältyy nivelten manipulaatiota ja mobilisaatiota sekä terapeuttista harjoittelua.",
				pricing: "30 min 55 € | 45 min 70 € | 60 min 85 €",
				pricingAnchor30: "62 €",
			},
			{
				title: "Raskausajan hieronta",
				description:
					"Turvallista ja rentouttavaa hierontaa odottaville äideille. Hoito lievittää selkä- ja jalkasärkyä sekä parantaa kokonaisvaltaista hyvinvointia raskauden aikana.",
				pricing: "30 min 47 € | 45 min 60 € | 60 min 75 €",
				pricingAnchor30: "54 €",
			},
		],
		teamTitle: "Tiimi",
		teamDescription:
			"Bloom-tiimin vahvuus on monipuolinen asiantuntemus. Kaikki terapeuttimme ovat Valviran laillistamia terveydenhuollon ammattilaisia, jotka sitoutuvat korkealaatuiseen hoitoon ja ammattitaitonsa jatkuvaan kehittämiseen. Tavoitteemme on aina tarjota sinulle yksilöllinen hoitosuunnitelma, joka tukee juuri sinun hyvinvointiasi.",
		testimonialsTitle: "Kokemuksia",
		testimonialsIntro:
			"Asiakkaidemme hyvinvointi on meillä Bloomilla kaiken tekemisemme keskiössä. Tärkein palkintomme on se, kun voimme auttaa sinua voimaan paremmin.",
		testimonialsCta: "Lisää kokemuksia voit käydä lukemassa täältä: linkki",
		testimonials: [
			"Olen kärsinyt pitkään istumatyön aiheuttamista niska-hartiakivuista, jotka säteilivät välillä päänsärkyinä. Sain luona sain vihdoin avun jumituksiin. Hän kuunteli tarkasti, missä kipu tuntuu, ja käsittely oli todella ammattitaitoista.",
			"Ihana ja turvallista hoitoa raskausaikana. Sarin luona sai todella keskittyä omaan hyvinvointiin, ja selkäkivut helpottivat huomattavasti.",
			"Sari on todellinen tuki- ja liikuntaelimistön asiantuntija. Sain häneltä paitsi tehokkaan hoidon krooniseen kipuuni, myös selkeät ohjeet, joilla pystyin ylläpitämään tuloksia itse kotona.",
			"Aktiiviliikkujana arvostan Leon tarkkaa otetta. Hän ymmärtää urheilijan kehon ja palautumisen tarpeet todella hyvin.",
		],
		contactTitle: "Yhteystiedot",
		hoursTitle: "Aukioloajat:",
		hours: ["Ma-pe 9-18, la 10-16", "Su suljettu"],
		paymentsTitle: "Maksutavat:",
		payments: "Kortti, ePassi, Smartum, Edenred",
		socialsTitle: "Löydät meidät myös:",
		mapLabel: "Kartta",
		mapAlt: "Karttanäkymä toimipisteen alueesta",
		popupClose: "Sulje",
		discountPopup: {
			titleLines: ["HALUATKO EROON KIVUSTA?", "NYT -30% ALENNUS!"],
			buttonText: "Lunasta",
			emailPlaceholder: "Syötä sähköpostisi tähän..",
		},
		newsletterPopup: {
			title: "Tilaa uutiskirje:",
			subtitleLines: [
				"Saat kerran kuukaudessa vinkkejä",
				"lihashuoltoon ja kehon hyvinvointiin.",
			],
			buttonText: "Tilaa",
			emailPlaceholder: "Syötä sähköpostisi tähän..",
		},
		facebook: "Harmonia hyvinvointi",
		instagram: "@harmoniawellness",
	},
	en: {
		nav: ["Services", "Team", "Testimonials", "Contact"],
		heroTitle: "Harmonia Wellness, Tampere",
		heroSubtitle: "Professional care for your body and mind",
		heroHours: "Mon-Fri 9-18, Sat 10-16, Sun closed",
		booking: "Book now",
		bookingNote: "This would link to Timma",
		servicesTitle: "Services",
		servicesNotice:
			"Please note: Every first treatment includes a free 15-minute initial assessment where we review your needs and goals. This time is added to the treatment length, so reserve a little extra time.",
		services: [
			{
				title: "Classic massage",
				description:
					"A traditional method for reducing muscle tension and improving circulation. Helps with pain relief and deep relaxation.",
				pricing: "30 min 47 € | 45 min 60 € | 60 min 75 €",
				pricingAnchor30: "54 €",
			},
			{
				title: "Sports massage",
				description:
					"A stronger treatment for active people and athletes. Focuses on muscle care, recovery, and injury prevention.",
				pricing: "30 min 50 € | 45 min 65 € | 60 min 80 €",
				pricingAnchor30: "57 €",
			},
			{
				title: "Naprapathy",
				description:
					"Expert musculoskeletal care including joint manipulation, mobilization, and therapeutic exercise.",
				pricing: "30 min 55 € | 45 min 70 € | 60 min 85 €",
				pricingAnchor30: "62 €",
			},
			{
				title: "Pregnancy massage",
				description:
					"Safe and relaxing treatment for expecting mothers. Helps reduce back and leg discomfort while supporting overall wellbeing.",
				pricing: "30 min 47 € | 45 min 60 € | 60 min 75 €",
				pricingAnchor30: "54 €",
			},
		],
		teamTitle: "Team",
		teamDescription:
			"The strength of the Bloom team is broad expertise. All of our therapists are licensed healthcare professionals committed to high-quality care and continuous professional development. Our goal is always to provide a treatment plan tailored for your wellbeing.",
		testimonialsTitle: "Testimonials",
		testimonialsIntro:
			"Our clients' wellbeing is at the center of everything we do at Bloom. Our most important reward is helping you feel better.",
		testimonialsCta: "Read more client experiences here: link",
		testimonials: [
			"I had long-term neck and shoulder pain from desk work, often with headaches. I finally got real help and truly professional treatment.",
			"Wonderful and safe care during pregnancy. The treatment helped my back pain a lot and made everyday life easier.",
			"Sari is a true musculoskeletal expert. I received effective treatment for chronic pain and clear home-care guidance.",
			"As an active athlete, I value Leo's precise approach. He understands recovery needs exceptionally well.",
		],
		contactTitle: "Contact",
		hoursTitle: "Opening hours:",
		hours: ["Mon-Fri 9-18, Sat 10-16", "Sun closed"],
		paymentsTitle: "Payment methods:",
		payments: "Card, ePassi, Smartum, Edenred",
		socialsTitle: "You can also find us on:",
		mapLabel: "Map preview",
		mapAlt: "Map view near the clinic",
		popupClose: "Close",
		discountPopup: {
			titleLines: ["READY TO BE PAIN FREE?", "NOW 30% OFF!"],
			buttonText: "Claim",
			emailPlaceholder: "Enter your email here..",
		},
		newsletterPopup: {
			title: "Subscribe to the newsletter:",
			subtitleLines: ["Get monthly tips", "for muscle care and wellbeing."],
			buttonText: "Subscribe",
			emailPlaceholder: "Enter your email here..",
		},
		facebook: "Harmonia Wellness",
		instagram: "@harmoniawellness",
	},
} as const;
export default function StudyPage3() {
	const { locale } = useLocale();
	const content = pageContent[locale];
	const info = siteData[locale];
	const { studyGroup } = useVariant();
	const [isWelcomePopupOpen, setIsWelcomePopupOpen] = useState(studyGroup === "A");
	const [isBottomPopupOpen, setIsBottomPopupOpen] = useState(false);
	const [hasShownBottomPopup, setHasShownBottomPopup] = useState(studyGroup === "B");

	const renderLines = (lines: string[]) => (
		<>
			{lines.map((line, index) => (
				<span key={`${line}-${index}`}>
					{line}
					{index < lines.length - 1 && <br />}
				</span>
			))}
		</>
	);

	const handlePromoSubmit = (_email: string) => {
		setIsWelcomePopupOpen(false);
		setIsBottomPopupOpen(false);
	};

	useEffect(() => {
		const previousBodyBackground = document.body.style.backgroundColor;
		const previousHtmlBackground = document.documentElement.style.backgroundColor;

		document.body.style.backgroundColor = "#c9bdd9";
		document.documentElement.style.backgroundColor = "#c9bdd9";

		return () => {
			document.body.style.backgroundColor = previousBodyBackground;
			document.documentElement.style.backgroundColor = previousHtmlBackground;
		};
	}, []);

	useEffect(() => {
		if (hasShownBottomPopup) return;

		const checkIfAtBottom = () => {
			const scrolledTo = window.scrollY + window.innerHeight;
			const pageHeight = document.documentElement.scrollHeight;

			if (scrolledTo >= pageHeight - 4) {
				setIsBottomPopupOpen(true);
				setHasShownBottomPopup(true);
			}
		};

		window.addEventListener("scroll", checkIfAtBottom, { passive: true });
		return () => window.removeEventListener("scroll", checkIfAtBottom);
	}, [hasShownBottomPopup]);

	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		if (isWelcomePopupOpen || isBottomPopupOpen) {
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isWelcomePopupOpen, isBottomPopupOpen]);

	return (
		<div className={`${bodyFont.className} min-h-screen bg-[#c9bdd9] text-[#332f3f]`}>
			{isWelcomePopupOpen && (
				<PromoPopup
					title={renderLines(content.discountPopup.titleLines)}
					buttonText={content.discountPopup.buttonText}
					emailPlaceholder={content.discountPopup.emailPlaceholder}
					closeLabel={content.popupClose}
					onClose={() => setIsWelcomePopupOpen(false)}
					onSubmit={handlePromoSubmit}
				/>
			)}
			{isBottomPopupOpen && (
				<PromoPopup
					title={content.newsletterPopup.title}
					subtitle={renderLines(content.newsletterPopup.subtitleLines)}
					buttonText={content.newsletterPopup.buttonText}
					emailPlaceholder={content.newsletterPopup.emailPlaceholder}
					closeLabel={content.popupClose}
					onClose={() => setIsBottomPopupOpen(false)}
					onSubmit={handlePromoSubmit}
				/>
			)}
			<header className="sticky top-0 z-10 border-b border-[#5d457d] bg-[#8556bf] text-white">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-3 py-2 sm:px-6">
					<div className="flex items-center gap-3">
						<div className="rounded-full bg-white/90 p-1.5 text-[#5c3a8e]">
							<LogoIcon className="h-10 w-10" />
						</div>
						<nav className={`${titleFont.className} flex items-center gap-4 text-sm uppercase tracking-wide`}>
							<a href="#services" className="hover:opacity-85">
								{content.nav[0]}
							</a>
							<a href="#team" className="hidden sm:inline hover:opacity-85">
								{content.nav[1]}
							</a>
							<a href="#testimonials" className="hidden sm:inline hover:opacity-85">
								{content.nav[2]}
							</a>
							<a href="#contact" className="hidden md:inline hover:opacity-85">
								{content.nav[3]}
							</a>
						</nav>
					</div>
					<div className="flex items-center gap-3">
						<div className="group relative flex items-end">
							<button
								type="button"
								className={`${titleFont.className} rounded-md border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide`}
							>
								{content.booking}
							</button>
							<p className="pointer-events-none absolute top-full mt-1 w-max rounded-md bg-[#312150]/95 px-2 py-1 text-[10px] leading-tight text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
								{content.bookingNote}
							</p>
						</div>
						<div className="hidden text-right text-[10px] leading-tight text-white/90 sm:block">
							<div>English</div>
							<div>Suomi</div>
						</div>
					</div>
				</div>
			</header>

			<main>
				<section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10 sm:px-6">
					<div className="text-center">
						<h1 className={`${titleFont.className} text-3xl uppercase tracking-wide text-[#3f334d] sm:text-5xl`}>
							{content.heroTitle}
						</h1>
						<p className={`${titleFont.className} mt-2 text-lg uppercase tracking-wide text-[#4d425d] sm:text-2xl`}>
							{content.heroSubtitle}
						</p>
					</div>

					<div className="mx-auto mt-8 max-w-3xl overflow-hidden border border-[#ad9fc2] bg-[#d7ccdf]">
						<Image
							src="/massage-hero-alt.jpg"
							alt={content.heroTitle}
							width={1200}
							height={700}
							className="h-auto w-full object-cover"
							priority
						/>
					</div>
					<p className="mt-4 text-center text-base font-semibold text-[#4a4159]">{content.heroHours}</p>
				</section>

				<section id="services" className="border-y border-[#b6a8cb] bg-[#baaace]">
					<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
						<h2 className={`${titleFont.className} text-center text-4xl text-[#40334e]`}>{content.servicesTitle}</h2>
						<p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-[#473d57]">
							<strong>{locale === "fi" ? "Huomioithan:" : "Please note:"}</strong>{content.servicesNotice.replace(/^Huomioithan:|^Please note:/, "")}
						</p>
						<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
							{content.services.map((service) => {
								const anchor = "pricingAnchor30" in service
									? (service as typeof service & { pricingAnchor30: string }).pricingAnchor30
									: null;
								// Split pricing into first tier (30 min) and the rest
								const [first30, ...rest] = service.pricing.split(" | ");
								// Extract just the price token from "30 min 47 €"
								const parts30 = first30.split(" "); // ["30","min","47","€"]
								const realPrice = parts30.slice(2).join(" "); // "47 €"
								return (
									<article key={service.title}>
										<h3 className="text-2xl font-bold text-[#2f2839]">{service.title}</h3>
										<p className="mt-2 text-base leading-7 text-[#4c445b]">{service.description}</p>
										<p className="mt-2 text-base font-semibold text-[#322c3e]">
											{/* 30 min portion */}
											<span>30 min </span>
											{studyGroup === "A" && anchor ? (
												<>
													<strong className="text-lg text-[#c0392b]">{realPrice}</strong>
													<span className="ml-1 text-sm font-normal text-[#9b8fa8] line-through">{anchor}</span>
												</>
											) : (
												<span className="text-lg font-bold">{realPrice}</span>
											)}
											{/* Remaining tiers */}
											{rest.length > 0 && <span className="font-semibold text-[#322c3e]"> | {rest.join(" | ")}</span>}
										</p>
									</article>
								);
							})}
						</div>
					</div>
				</section>

				<section id="team" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
					<h2 className={`${titleFont.className} text-center text-4xl text-[#40334e]`}>{content.teamTitle}</h2>
					<p className="mx-auto mt-4 max-w-4xl text-center text-base leading-7 text-[#4c445b]">{content.teamDescription}</p>

					<div className="mx-auto mt-9 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
						{info.employees.map((member) => (
							<article key={member.id} className="text-center">
								<Image
									src={member.image}
									alt={member.name}
									width={320}
									height={320}
									className="mx-auto h-64 w-64 object-cover shadow-sm"
								/>
								<h3 className="mt-4 text-xl font-bold text-[#302a3a]">{member.name}</h3>
								<p className="text-lg text-[#4c445b]">{member.role}</p>
							</article>
						))}
					</div>
				</section>

				<section id="testimonials" className="border-y border-[#b6a8cb] bg-[#baaace]">
					<div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
						<h2 className={`${titleFont.className} text-center text-4xl text-[#40334e]`}>{content.testimonialsTitle}</h2>
						<p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-[#4b425a]">{content.testimonialsIntro}</p>
						{/* Stars shown only on sm+ as a shared row */}
						<p className="mt-4 hidden text-center text-2xl tracking-[0.4rem] text-[#5c3a8e] sm:block">★★★★★</p>

						<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
							{content.testimonials.map((quote, index) => (
								<blockquote key={index} className="text-center text-base leading-7 text-[#4a4258]">
									{/* Per-testimonial stars on mobile only */}
									<p className="mb-2 text-xl tracking-[0.3rem] text-[#5c3a8e] sm:hidden">★★★★★</p>
									&quot;{quote}&quot;
								</blockquote>
							))}
						</div>
						<p className="mt-10 text-center text-sm text-[#5b516a]">{content.testimonialsCta}</p>
					</div>
				</section>

				<section id="contact" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
					<h2 className={`${titleFont.className} text-center text-4xl text-[#40334e]`}>{content.contactTitle}</h2>
					<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
						<div className="space-y-3 text-lg text-[#3f374f]">
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#a892c7] bg-white">
									<Image src="/icons/location-icon.png" alt="Location" width={28} height={28} className="h-7 w-7 object-cover" />
								</div>
								<p>{info.address}</p>
							</div>
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#a892c7] bg-white">
									<Image src="/icons/call-icon.png" alt="Phone" width={28} height={28} className="h-7 w-7 object-cover" />
								</div>
								<p>{info.phone}</p>
							</div>
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#a892c7] bg-white">
									<Image src="/icons/mail-icon.png" alt="Email" width={28} height={28} className="h-7 w-7 object-cover" />
								</div>
								<p>{info.email}</p>
							</div>

							<div className="grid grid-cols-2 gap-4 pt-4 sm:block">
								<div>
									<h3 className={`${titleFont.className} text-2xl font-semibold`}>{content.hoursTitle}</h3>
									{content.hours.map((line) => (
										<p key={line}>{line}</p>
									))}
								</div>
								<div className="sm:pt-4">
									<h3 className={`${titleFont.className} text-2xl font-semibold`}>{content.paymentsTitle}</h3>
									<p>{content.payments}</p>
								</div>
							</div>
						</div>

						<div className="relative h-72 overflow-hidden border border-[#9e8fb8] bg-[#2d3956]">
							<Image src="/icons/map.png" alt={content.mapAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
							<div className={`${titleFont.className} absolute inset-x-0 bottom-0 bg-[#2d3956]/70 px-3 py-2 text-center text-sm font-semibold text-white`}>
								{content.mapLabel}
							</div>
						</div>
					</div>

					<div className="mt-10 text-center">
						<p className={`${titleFont.className} text-lg font-semibold text-[#3d354b]`}>{content.socialsTitle}</p>
						<div className="mt-4 flex flex-wrap items-center justify-center gap-4">
							<span className="flex items-center gap-2">
								<div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#a892c7] bg-white">
									<Image src="/icons/facebook-icon.png" alt="Facebook" width={28} height={28} className="h-7 w-7 object-cover" />
								</div>
								<p>{content.facebook}</p>
							</span>
							<span className="flex items-center gap-2">
								<div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#a892c7] bg-white">
									<Image src="/icons/instagram-icon.png" alt="Instagram" width={28} height={28} className="h-7 w-7 object-cover" />
								</div>
								<p>{content.instagram}</p>
							</span>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
