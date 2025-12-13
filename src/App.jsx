import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Home from "./components/Home";
import Packages from "./components/Packages";
import PackageDetail from "./components/PackageDetail";
import AR360 from "./components/AR360";
import Hotels from "./components/Hotels";
import HotelDetail from "./components/HotelDetail";
import Restaurants from "./components/Restaurants";
import Crafts from "./components/Crafts";
import CustomTour from "./components/CustomTour";
import DestinationDetail from "./components/DestinationDetail";
import DestinationExplorer from "./components/DestinationExplorer";
import BottomNav from "./components/BottomNav";

export default function App() {
	const location = useLocation();
	const navigate = useNavigate();

	const isDetailScreen =
		location.pathname.startsWith("/packages/") ||
		location.pathname.startsWith("/hotels/") ||
		location.pathname.startsWith("/destinations/") ||
		location.pathname.startsWith("/explore/");

	const showBottomNav =
		location.pathname !== "/onboarding" &&
		location.pathname !== "/custom-tour" &&
		!isDetailScreen;

	return (
		<div className="h-screen flex flex-col bg-neutral-50">
			<div className="flex-1 overflow-auto">
				<Routes>
					<Route
						path="/onboarding"
						element={
							<Onboarding
								onFinish={() => navigate("/")}
							/>
						}
					/>
					<Route path="/" element={<Home />} />
					<Route path="/packages" element={<Packages />} />
					<Route
						path="/packages/:id"
						element={<PackageDetail />}
					/>
					<Route path="/ar360" element={<AR360 />} />
					<Route path="/hotels" element={<Hotels />} />
					<Route
						path="/hotels/:id"
						element={<HotelDetail />}
					/>
					<Route path="/restaurants" element={<Restaurants />} />
					<Route path="/crafts" element={<Crafts />} />
					<Route path="/custom-tour" element={<CustomTour />} />
					<Route
						path="/destinations/:id"
						element={<DestinationDetail />}
					/>
					<Route
						path="/explore/:category"
						element={<DestinationExplorer />}
					/>
				</Routes>
			</div>
			{showBottomNav && <BottomNav />}
		</div>
	);
}
