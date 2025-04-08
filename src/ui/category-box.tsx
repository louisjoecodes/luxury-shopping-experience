import { getTranslations } from "@/i18n/server";
import { deslugify } from "@/lib/utils";
import { YnsLink } from "@/ui/yns-link";
import Image, { type ImageProps } from "next/image";

export async function CategoryBox({
	categorySlug,
	src,
}: {
	categorySlug: string;
	src: ImageProps["src"];
}) {
	const t = await getTranslations("Global.actions");

	return (
		<YnsLink href={`/category/${categorySlug}`} className="group relative">
			<div className="relative overflow-hidden rounded-lg border border-gray-800">
				<div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-0"></div>
				<Image
					alt="Cover image"
					className="w-full scale-105 object-cover transition-all group-hover:scale-100"
					sizes="(max-width: 1024x) 100vw, (max-width: 1280px) 33vw, 400px"
					height={300}
					width={400}
					src={src}
				/>
			</div>
			<div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
				<h3 className="text-xl font-medium tracking-tight">{deslugify(categorySlug)}</h3>
				<p className="text-sm mt-2 uppercase tracking-widest">{t("shopNow")}</p>
			</div>
		</YnsLink>
	);
}
