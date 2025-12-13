import { Home, Package, Glasses, Hotel, ShoppingBag } from "lucide-react";
const navItems = [
	{ icon: Home, label: "Home", screen: "home" },
	{ icon: Package, label: "Pacotes", screen: "packages" },
	{ icon: Glasses, label: "RA 360\xB0", screen: "ar360" },
	{ icon: Hotel, label: "Hot\xE9is", screen: "hotels" },
	{ icon: ShoppingBag, label: "Artesanato", screen: "crafts" },
];
export default function BottomNav({ currentScreen, onNavigate }) {
	const displayScreen =
		currentScreen === "restaurants" ? "hotels" : currentScreen;
	return (
		<div className="bg-white border-t border-neutral-200 px-2 py-2 shadow-lg">
			<div className="flex justify-around items-center">
				{navItems.map((item) => {
					const isActive = displayScreen === item.screen;
					return (
						<button
							key={item.screen}
							onClick={() => onNavigate(item.screen)}
							className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${isActive ? "text-emerald-600" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}
						>
							<item.icon
								className={`w-6 h-6 ${isActive ? "stroke-[2.5]" : "stroke-2"}`}
							/>
							<span className={isActive ? "" : ""}>
								{item.label}
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
}
