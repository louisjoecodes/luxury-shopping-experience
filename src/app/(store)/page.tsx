import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
import ApparelImage from "@/images/apparel.png";
import StoreConfig from "@/store.config";
import { CategoryBox } from "@/ui/category-box";
import { ProductList } from "@/ui/products/product-list";
import * as Commerce from "commerce-kit";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
	const t = await getTranslations("/");

	return (
		<main>
			<section className="rounded bg-neutral-100 py-24 sm:py-32">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-12 px-8 sm:px-24 md:grid-cols-2">
					<div className="max-w-md space-y-4">
						<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("hero.title")}</h2>
						<p className="text-pretty text-neutral-600">{t("hero.description")}</p>
					</div>
					<Image
						alt="ElevenLabs Quarter-Zip Sweatshirt"
						loading="eager"
						priority={true}
						height={450}
						width={450}
						src={ApparelImage}
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 640px) 70vw, 450px"
					/>
				</div>
			</section>

			<ProductList products={products} />

			<section className="w-full py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{StoreConfig.categories.map(({ slug, image: src }) => (
						<CategoryBox key={slug} categorySlug={slug} src={src} />
					))}
				</div>
			</section>
		</main>
	);
}
