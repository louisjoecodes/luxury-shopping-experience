import { YnsLink } from "@/ui/yns-link";
import { ShoppingBagIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Nav = async () => {
	return (
		<header className="z-50 py-5 sticky top-0 bg-black nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 flex-row lg:px-8">
				<YnsLink href="/" className="flex items-center">
					<div className="flex flex-col items-center relative">
						<Image
							src="/images/logo.png"
							alt="ELEVENLABS Logo"
							width={160}
							height={40}
							className="h-auto"
							priority
						/>
						<span className="text-xs font-medium text-gray-400 tracking-widest mt-1 absolute bottom-0 right-0 translate-y-full">
							TIMEPIECES
						</span>
					</div>
				</YnsLink>

				<div className="hidden md:flex items-center space-x-8">
					<YnsLink href="/" className="text-sm text-white font-medium hover:text-gray-300 transition-colors">
						Home
					</YnsLink>
					<YnsLink
						href="/product/eleven-1"
						className="text-sm text-white font-medium hover:text-gray-300 transition-colors"
					>
						The Watch
					</YnsLink>
					<Link
						href="/#craftsmanship"
						className="text-sm text-white font-medium hover:text-gray-300 transition-colors"
					>
						Craftsmanship
					</Link>
				</div>

				<div className="flex items-center space-x-5">
					<YnsLink href="/cart" className="text-white hover:text-gray-300 transition-colors">
						<ShoppingBagIcon className="h-5 w-5" />
					</YnsLink>
					<YnsLink href="/login" className="text-white hover:text-gray-300 transition-colors">
						<UserIcon className="h-5 w-5" />
					</YnsLink>
				</div>
			</div>
		</header>
	);
};
