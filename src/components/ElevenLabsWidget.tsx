"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ElevenLabsConvaiEvent extends CustomEvent {
	detail: {
		config: {
			clientTools: {
				get_current_page: () => string;
				go_to_checkout: () => void;
				add_to_cart: ({ quantity }: { quantity?: number }) => Promise<void>;
				go_to_route: ({ path }: { path: string }) => void;
			};
		};
	};
}

export function ElevenLabsWidget() {
	const router = useRouter();

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://elevenlabs.io/convai-widget/index.js";
		script.async = true;
		script.type = "text/javascript";
		document.head.appendChild(script);

		const wrapper = document.createElement("div");
		wrapper.className = "desktop";

		const widget = document.createElement("elevenlabs-convai");
		widget.setAttribute("agent-id", "wofv768yFSfi0mlKsELB");
		widget.setAttribute("variant", "full");

		const updateWidgetColors = (widget: HTMLElement) => {
			const isDarkMode = !document.documentElement.classList.contains("light");
			if (isDarkMode) {
				widget.setAttribute("avatar-orb-color-1", "#2E2E2E");
				widget.setAttribute("avatar-orb-color-2", "#B8B8B8");
			} else {
				widget.setAttribute("avatar-orb-color-1", "#4D9CFF");
				widget.setAttribute("avatar-orb-color-2", "#9CE6E6");
			}
		};

		const updateWidgetVariant = (widget: HTMLElement) => {
			const isMobile = window.innerWidth <= 640;
			widget.setAttribute("variant", isMobile ? "expandable" : "full");
		};

		updateWidgetColors(widget);
		updateWidgetVariant(widget);

		const observer = new MutationObserver(() => {
			updateWidgetColors(widget);
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		window.addEventListener("resize", () => {
			updateWidgetVariant(widget);
		});

		widget.innerHTML = `\
    <form slot="terms" class="prose text-sm">
      <h3>Terms and conditions</h3>
      <p>
        By clicking "Continue," and each time I interact with this AI agent, I 
        consent to ElevenLabs collecting and using my voice and data derived from 
        it to interpret my speech, and provide the support services I request, and 
        to the recording, storage, and sharing of my communications with 
        third-party service providers, and as described in the 
        <a href="/terms-of-use">Privacy Policy</a>. If you do not wish to have 
        your conversations recorded, please refrain from using this service.
      </p>
    </form>`;

		widget.addEventListener("elevenlabs-convai:call", (event: Event) => {
			const customEvent = event as ElevenLabsConvaiEvent;
			customEvent.detail.config.clientTools = {
				get_current_page: () => {
					return window.location.pathname;
				},
				go_to_checkout: () => {
					router.push("/cart");
				},
				add_to_cart: async ({ quantity = 1 }) => {
					const addToCartButton = document.querySelector('[data-testid="add-to-cart-button"]');
					if (addToCartButton instanceof HTMLButtonElement) {
						for (let i = 0; i < quantity; i++) {
							addToCartButton.click();
							await new Promise((resolve) => setTimeout(resolve, 50));
						}
					}
				},
				go_to_route: ({ path }: { path: string }) => {
					router.push(path);
				},
			};
		});

		wrapper.appendChild(widget);
		document.body.appendChild(wrapper);

		return () => {
			wrapper.remove();
			observer.disconnect();
		};
	}, [router]);

	return null;
}
