import "@/app/globals.css";
import { ElevenLabsWidget } from "@/components/ElevenLabsWidget";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartModalProvider } from "@/context/cart-modal";
import { Footer } from "@/ui/footer/footer";
import { JsonLd, accountToWebsiteJsonLd } from "@/ui/json-ld";
import { Nav } from "@/ui/nav/nav";
import * as Commerce from "commerce-kit";
import { CartModalPage } from "./cart/cart-modal";

export default async function StoreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const accountResult = await Commerce.accountGet();
	const logoLink =
		accountResult?.logo?.links?.data.find((link) => !link.expired) ||
		(accountResult?.logo?.id ? await Commerce.fileGet(accountResult.logo.id) : null);

	return (
		<>
			<CartModalProvider>
				<Nav />
				<TooltipProvider>
					<main className="bg-black text-white mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
						{children}
						<CartModalPage />
					</main>
					<Footer />
				</TooltipProvider>
			</CartModalProvider>
			<JsonLd
				jsonLd={accountToWebsiteJsonLd({
					account: accountResult?.account,
					logoUrl: logoLink?.url,
				})}
			/>
			<ElevenLabsWidget />
		</>
	);
}
