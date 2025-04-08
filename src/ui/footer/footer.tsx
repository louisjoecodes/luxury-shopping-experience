import { YnsLink } from "@/ui/yns-link";
import Image from "next/image";

const links = [
	{
		header: "The Eleven-1",
		items: [{ label: "Specifications", href: "/product/eleven-1" }],
	},
];

export async function Footer() {
	return (
		<footer className="bg-black text-white border-t border-gray-800">
			{/* Top section with logo and navigation */}
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
					{/* Logo and tagline */}
					<div className="mb-12 lg:mb-0 text-center lg:text-left">
						<div className="flex flex-col items-center lg:items-start">
							<Image
								src="/images/logo.png"
								alt="ELEVENLABS Logo"
								width={160}
								height={40}
								className="h-auto"
							/>
							<span className="text-xs font-medium text-gray-400 tracking-widest mt-1 mb-4">
								PRECISION TIMEPIECES
							</span>
						</div>
						<p className="mt-4 text-sm text-gray-400 max-w-sm">
							Every Eleven-1 timepiece is a testament to ElevenLabs' commitment to excellence and
							craftsmanship without compromise.
						</p>
					</div>

					{/* Navigation links */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
						{links.map((section) => (
							<div key={section.header} className="text-center lg:text-left">
								<h3 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">
									{section.header}
								</h3>
								<ul className="space-y-3">
									{section.items.map((link) => (
										<li key={link.label}>
											<YnsLink
												href={link.href}
												className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
											>
												{link.label}
											</YnsLink>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
