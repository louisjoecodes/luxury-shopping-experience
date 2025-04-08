import AccessoriesImage from "@/images/accessories.png";
import ApparelImage from "@/images/apparel.png";

export const config = {
	categories: [
		{ name: "Luxury Watches", slug: "luxury-watches", image: ApparelImage },
		{ name: "Watch Accessories", slug: "watch-accessories", image: AccessoriesImage },
	],

	social: {
		x: "https://x.com/elevenlabsio",
	},

	contact: {
		email: "concierge@elevenlabs.com",
		phone: "+1 (800) 555-1111",
		address: "11 Precision Avenue, New York, NY 10001",
	},

	// Keep the product info for our use, but maintain original structure for compatibility
	elevenlabs_watch: {
		name: "Eleven-1",
		slug: "eleven-1",
		price: 11000,
		currency: "USD",
		features: [
			"Meteorite Dial",
			"Superlative Chronometer",
			"Perpetual Movement",
			"300m Water Resistance",
			"Sapphire Crystal",
			"Five-Year Warranty",
		],
	},
};

export type StoreConfig = typeof config;
export default config;
