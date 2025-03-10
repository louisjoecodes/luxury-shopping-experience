import { getTranslations } from "@/i18n/server";
import StoreConfig from "@/store.config";
import { Newsletter } from "@/ui/footer/newsletter.client";
import { YnsLink } from "@/ui/yns-link";

const sections = [
	{
		header: "Products",
		links: StoreConfig.categories.map(({ name, slug }) => ({
			label: name,
			href: `/category/${slug}`,
		})),
	},
	{
		header: "Support",
		links: [
			{
				label: "ElevenLabs Conversational AI",
				href: "https://elevenlabs.io/conversational-ai",
			},
			{
				label: "Pricing",
				href: "https://elevenlabs.io/pricing",
			},
			{
				label: "Contact Sales",
				href: "https://elevenlabs.io/contact-sales",
			},
		],
	},
];

export async function Footer() {
	const t = await getTranslations("Global.footer");

	return (
		<footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-12">
			<div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
				<div className="">
					<div className="flex w-full max-w-sm flex-col gap-2">
						<h3 className="font-semibold">{t("newsletterTitle")}</h3>
						<Newsletter />
					</div>
				</div>

				<nav className="grid grid-cols-2 gap-16">
					{sections.map((section) => (
						<section key={section.header}>
							<h3 className="mb-2 font-semibold">{section.header}</h3>
							<ul role="list" className="grid gap-1">
								{section.links.map((link) => (
									<li key={link.label}>
										<YnsLink className="underline-offset-4 hover:underline" href={link.href}>
											{link.label}
										</YnsLink>
									</li>
								))}
							</ul>
						</section>
					))}
				</nav>
			</div>
			<div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
				<div>
					<p>
						© 2025 <a href="https://elevenlabs.io/conversational-ai">ElevenLabs</a>{" "}
						<YnsLink
							className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
							href="https://x.com/giaccoangelo"
						>
							@giaccoangelo
						</YnsLink>
					</p>
					<p>
						Inspired by <a href="github.com/yournextstore">Your Next Store</a> by{" "}
						<YnsLink href="https://x.com/zaiste" className="hover:text-neutral-700">
							@zaiste
						</YnsLink>{" "}
						&{" "}
						<YnsLink href="https://x.com/typeofweb" className="hover:text-neutral-700">
							@typeofweb
						</YnsLink>
					</p>
				</div>
				<div className="flex items-center gap-4"></div>
			</div>
		</footer>
	);
}
