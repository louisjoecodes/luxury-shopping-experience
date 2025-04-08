import { publicUrl } from "@/env.mjs";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	return (
		<main className="bg-black text-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-0"></div>

				{/* Watch image as background */}
				<div className="absolute inset-0 opacity-50 z-0">
					<Image
						src="/images/watches/eleven-1.png"
						alt="Eleven-1 Watch"
						fill
						priority
						className="object-cover object-center opacity-60"
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
					<div className="max-w-2xl">
						<h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl uppercase mb-2">
							Eleven-1
						</h1>
						<p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-6">
							The Timepiece of Innovation
						</p>
						<h2 className="text-5xl font-medium tracking-tight text-white sm:text-6xl mb-8">
							Crafted From Meteorite
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl">
							A testament to human ingenuity. Each dial is carved from genuine meteorite, making every
							timepiece as unique as its owner.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<a
								href="/product/eleven-1"
								className="bg-white px-8 py-3 text-sm font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none transition duration-300"
							>
								Discover More
							</a>
							<a href="/product/eleven-1" className="text-sm font-medium leading-6 text-white">
								View Specifications <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 border-t border-gray-800">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
							Unmatched Excellence
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							The Eleven-1 represents the pinnacle of watchmaking precision, combining centuries of tradition
							with cutting-edge innovation.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							<div className="flex flex-col">
								<dt className="text-lg font-medium leading-7 text-white">Meteorite Dial</dt>
								<dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-400">
									<p className="flex-auto">
										Each dial features a unique pattern formed over billions of years in the depths of space,
										making every Eleven-1 truly one of a kind.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-medium leading-7 text-white">Superlative Chronometer</dt>
								<dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-400">
									<p className="flex-auto">
										Certified for exceptional precision, surpassing the standards of Swiss chronometry by
										maintaining accuracy within -2/+2 seconds per day.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-medium leading-7 text-white">Perpetual Movement</dt>
								<dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-400">
									<p className="flex-auto">
										Our proprietary self-winding mechanical movement, designed and manufactured in-house with
										a 72-hour power reserve.
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Full Watch Display */}
			<section className="py-24 relative border-t border-gray-800 overflow-hidden">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-medium tracking-tight text-white">Timeless Design</h2>
						<p className="mt-4 text-lg text-gray-300">Engineered to perfection down to the smallest detail</p>
					</div>
					<div className="relative mx-auto max-w-5xl">
						<div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center">
							<Image
								src="/images/watches/eleven-1.png"
								alt="Eleven-1 Watch"
								width={800}
								height={600}
								className="object-contain"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Craftsmanship Section */}
			<section className="py-24 border-t border-gray-800" id="craftsmanship">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl mb-6">
								Swiss Craftsmanship
							</h2>
							<p className="text-lg text-gray-300 mb-6">
								Every Eleven-1 is meticulously assembled by master watchmakers, combining generations of
								expertise with state-of-the-art technology.
							</p>
							<ul className="space-y-4 text-gray-400">
								<li className="flex items-center">
									<span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
									<span>Hand-finished case and bracelet</span>
								</li>
								<li className="flex items-center">
									<span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
									<span>Scratch-resistant sapphire crystal</span>
								</li>
								<li className="flex items-center">
									<span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
									<span>300m water resistance</span>
								</li>
								<li className="flex items-center">
									<span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
									<span>Five-year international warranty</span>
								</li>
							</ul>
							<div className="mt-10">
								<a
									href="/product/eleven-1"
									className="inline-block border border-white px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition duration-300"
								>
									Explore Craftsmanship
								</a>
							</div>
						</div>
						<div className="relative h-[500px] w-full">
							<div className="absolute inset-0 bg-gradient-radial from-gray-800/30 to-black rounded-xl"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-64 h-64 rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-800 to-black opacity-80"></div>
									<div className="relative z-10 text-center p-8">
										<p className="text-5xl font-medium mb-2">11-1</p>
										<p className="text-sm uppercase tracking-widest text-gray-400">Precision Beyond Time</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 border-t border-gray-800">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-medium tracking-tight text-white mb-6">
						Experience the Extraordinary
					</h2>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
						The Eleven-1 is more than a timepiece. It's a statement of excellence, a work of art, and a
						technological marvel.
					</p>
					<a
						href="/product/eleven-1"
						className="inline-block bg-white px-8 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none transition duration-300"
					>
						Discover More
					</a>
				</div>
			</section>
		</main>
	);
}
