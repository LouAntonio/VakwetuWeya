import { Home, Package, Glasses, Hotel, ShoppingBag } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
	{ icon: Home, label: "Home", path: "/home" },
	{ icon: Package, label: "Pacotes", path: "/packages" },
	{ icon: Glasses, label: "RA 360\xB0", path: "/ar360" },
	{ icon: Hotel, label: "Hot\xE9is", path: "/hotels" },
	{ icon: ShoppingBag, label: "Artesanato", path: "/crafts" },
];

export default function BottomNav() {
	const location = useLocation();
	const navigate = useNavigate();
	const currentPath = location.pathname;

	const getActiveTab = (path) => {
		if (path === "/restaurants") return "/hotels";
		return path;
	};

	const activeTab = getActiveTab(currentPath);

	return (
		<div className="bg-white border-t border-neutral-200 px-2 py-2 shadow-lg">
			<div className="flex justify-around items-center">
				{navItems.map((item) => {
					const isActive = activeTab === item.path;
					return (
						<button
							key={item.path}
							onClick={() => navigate(item.path)}
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
