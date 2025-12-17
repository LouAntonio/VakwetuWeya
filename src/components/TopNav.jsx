import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../config/navConfig";
import { useState, useEffect } from "react";

export default function TopNav() {
	const location = useLocation();
	const navigate = useNavigate();
	const currentPath = location.pathname;
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const getActiveTab = (path) => {
		if (path === "/restaurants") return "/hotels";
		return path;
	};

	const activeTab = getActiveTab(currentPath);

	// Don't render on mobile
	if (!isDesktop) return null;

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50"
			style={{
				background: "rgba(255, 255, 255, 0.75)",
				backdropFilter: "blur(20px)",
				WebkitBackdropFilter: "blur(20px)",
				boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
				border: "1px solid rgba(255, 255, 255, 0.5)",
				borderTop: "none",
			}}
		>
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo/Brand */}
					<div className="flex items-center gap-3">
						<div
							className="w-10 h-10 rounded-xl flex items-center justify-center"
							style={{
								background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
								boxShadow: "0 4px 12px rgba(16, 185, 129, 0.35)",
							}}
						>
							<span className="text-white font-bold text-lg">V</span>
						</div>
						<span
							className="font-bold text-xl hidden lg:block"
							style={{
								background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							VakwetuWeya
						</span>
					</div>

					{/* Navigation Items */}
					<div className="flex items-center gap-2">
						{navItems.map((item) => {
							const isActive = activeTab === item.path;
							return (
								<button
									key={item.path}
									onClick={() => navigate(item.path)}
									className="relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300"
									style={{
										background: isActive
											? "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)"
											: "transparent",
										transform: isActive ? "translateY(-2px)" : "translateY(0)",
									}}
								>
									{/* Active indicator */}
									{isActive && (
										<span
											className="absolute top-0 left-1/2"
											style={{
												width: "24px",
												height: "3px",
												borderRadius: "0 0 3px 3px",
												background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
												transform: "translateX(-50%)",
												boxShadow: "0 2px 8px rgba(16, 185, 129, 0.5)",
											}}
										/>
									)}

									{/* Icon */}
									<div
										className="p-1.5 rounded-lg transition-all duration-300"
										style={{
											background: isActive
												? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
												: "transparent",
											boxShadow: isActive
												? "0 2px 8px rgba(16, 185, 129, 0.3)"
												: "none",
										}}
									>
										<item.icon
											style={{
												width: "18px",
												height: "18px",
												strokeWidth: isActive ? 2.5 : 1.8,
												color: isActive ? "#ffffff" : "#6b7280",
												transition: "all 0.3s ease",
											}}
										/>
									</div>

									{/* Label */}
									<span
										className="text-sm font-medium transition-all duration-300"
										style={{
											color: isActive ? "#059669" : "#6b7280",
											fontWeight: isActive ? 600 : 500,
										}}
									>
										{item.label}
									</span>
								</button>
							);
						})}
					</div>

					{/* Right side - placeholder for future features (user menu, etc) */}
					<div className="w-10" />
				</div>
			</div>
		</nav>
	);
}
