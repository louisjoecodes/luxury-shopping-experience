"use client";

import StoreConfig from "@/store.config";
import { AddToCartButton } from "@/ui/add-to-cart-button";
import Image from "next/image";

export default function Eleven1ProductPage() {
	const watchProduct = StoreConfig.elevenlabs_watch;

	return (
		<main className="bg-black text-white py-12 sm:py-16">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
						{/* Product image */}
						<div className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
							<Image
								src="/images/watches/eleven-1.png"
								alt="Eleven-1 Watch with Meteorite Dial"
								width={600}
								height={600}
								className="object-contain"
								priority
							/>
						</div>

						{/* Product details */}
						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							<div className="flex flex-col">
								<h2 className="text-xl font-medium tracking-tight uppercase mb-1">ElevenLabs</h2>
								<h1 className="text-4xl font-medium tracking-tight mb-1">{watchProduct.name}</h1>
								<p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">
									Meteorite Dial
								</p>

								<div className="mt-6">
									<h3 className="sr-only">Description</h3>
									<div className="space-y-6 text-base text-gray-300">
										<p>
											The Eleven-1 represents the pinnacle of watchmaking excellence. Each timepiece features
											a unique dial crafted from genuine meteorite, ensuring that no two watches are exactly
											alike. A testament to both nature's artistry and human craftsmanship.
										</p>
									</div>
								</div>

								<div className="mt-8">
									<div className="flex items-center justify-between">
										<h2 className="text-lg font-medium text-white">Price</h2>
										<p className="text-xl text-white">
											{new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: watchProduct.currency,
											}).format(watchProduct.price)}
										</p>
									</div>
								</div>

								<div className="mt-8 border-t border-gray-800 pt-8">
									<h3 className="text-lg font-medium text-white mb-4">Features</h3>
									<ul className="space-y-3">
										{watchProduct.features.map((feature) => (
											<li key={feature} className="flex items-center">
												<span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
												<span className="text-gray-300">{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-8 flex">
									<AddToCartButton productId="prod_S5m0QUdNGw9fVW" className="w-full py-4 px-4 text-lg" />
								</div>

								<div className="mt-6 text-center">
									<p className="text-sm text-gray-500">
										Each Eleven-1 is handcrafted to order. Please allow 4-6 weeks for delivery.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Additional details */}
					<div className="mt-20 border-t border-gray-800 pt-12">
						<div className="prose prose-invert mx-auto max-w-3xl">
							<h2 className="text-2xl font-medium tracking-tight text-white mb-6 text-center">
								Exceptional Craftsmanship
							</h2>

							<p className="text-gray-300">
								The Eleven-1 is the culmination of our pursuit of horological excellence. Each component is
								meticulously crafted and assembled by master watchmakers who have dedicated their lives to the
								art of fine watchmaking.
							</p>

							<h3 className="text-xl font-medium text-white mt-8 mb-4">The Meteorite Dial</h3>
							<p className="text-gray-300">
								Each dial is cut from the Muonionalusta meteorite, which fell to Earth over one million years
								ago in what is now northern Scandinavia. The distinctive crystalline pattern, known as
								Widmanstätten patterns, was formed by the extremely slow cooling of the meteorite in space
								over billions of years.
							</p>

							<h3 className="text-xl font-medium text-white mt-8 mb-4">Perpetual Movement</h3>
							<p className="text-gray-300">
								Our in-house caliber features a perpetual self-winding mechanism with a 72-hour power reserve.
								Each movement undergoes rigorous testing to ensure superlative precision and reliability in
								all conditions.
							</p>

							<h3 className="text-xl font-medium text-white mt-8 mb-4">Crafted Without Compromise</h3>
							<p className="text-gray-300">
								The case and bracelet are hand-finished with alternating polished and brushed surfaces,
								creating a play of light that highlights the exceptional quality of the craftsmanship. Each
								link of the bracelet is individually finished to ensure perfect integration and comfort.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
