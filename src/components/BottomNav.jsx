import { Home, Package, Glasses, Hotel, ShoppingBag } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
	{ icon: Home, label: "Home", path: "/" },
	{ icon: Package, label: "Pacotes", path: "/packages" },
	{ icon: Glasses, label: "RA 360°", path: "/ar360" },
	{ icon: Hotel, label: "Hotéis", path: "/hotels" },
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
		<div
			className="px-3 py-2 mx-3 rounded-t-2xl"
			style={{
				background: "rgba(255, 255, 255, 0.75)",
				backdropFilter: "blur(20px)",
				WebkitBackdropFilter: "blur(20px)",
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
				border: "1px solid rgba(255, 255, 255, 0.5)",
			}}
		>
			<div className="flex justify-around items-center">
				{navItems.map((item) => {
					const isActive = activeTab === item.path;
					return (
						<button
							b key={item.path}
							onClick={() => navigate(item.path)}
							className="relative flex flex-col items-center gap-0.5 py-2 px-3 rounded-xl"
							style={{
								transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								background: isActive
									? "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)"
									: "transparent",
								transform: isActive ? "translateY(-4px)" : "translateY(0)",
							}}
						>
							{/* Active indicator dot */}
							{isActive && (
								<span
									className="absolute -top-1 left-1/2"
									style={{
										width: "6px",
										height: "6px",
										borderRadius: "50%",
										background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
										transform: "translateX(-50%)",
										boxShadow: "0 2px 8px rgba(16, 185, 129, 0.5)",
									}}
								/>
							)}

							{/* Icon container */}
							<div
								style={{
									padding: "6px",
									borderRadius: "10px",
									background: isActive
										? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
										: "transparent",
									transition: "all 0.3s ease",
									boxShadow: isActive
										? "0 4px 12px rgba(16, 185, 129, 0.35)"
										: "none",
								}}
							>
								<item.icon
									style={{
										width: "20px",
										height: "20px",
										strokeWidth: isActive ? 2.5 : 1.8,
										color: isActive ? "#ffffff" : "#6b7280",
										transition: "all 0.3s ease",
									}}
								/>
							</div>

							{/* Label */}
							<span
								style={{
									fontSize: "10px",
									fontWeight: isActive ? 600 : 500,
									color: isActive ? "#059669" : "#6b7280",
									transition: "all 0.3s ease",
									letterSpacing: isActive ? "0.02em" : "0",
								}}
							>
								{item.label}
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
}
