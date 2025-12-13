import {
	MapPin,
	Hotel,
	UtensilsCrossed,
	Package,
	Glasses,
	ShoppingBag,
	Car,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import logo from "figma:asset/logo.png";

const featuredPackages = [
	{
		id: 1,
		name: "Cataratas de Kalandula",
		location: "Malanje",
		price: "650.000 Kz",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "3 dias",
	},
	{
		id: 2,
		name: "Deserto do Namibe",
		location: "Namibe",
		price: "1.200.000 Kz",
		image: "https://images.unsplash.com/photo-1643925690746-9eb744dae41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "5 dias",
	},
];

const quickAccess = [
	{
		icon: Package,
		label: "Pacotes",
		path: "/packages",
		color: "bg-emerald-100 text-emerald-700",
	},
	{
		icon: Hotel,
		label: "Hotéis",
		path: "/hotels",
		color: "bg-blue-100 text-blue-700",
	},
	{
		icon: UtensilsCrossed,
		label: "Restaurantes",
		path: "/restaurants",
		color: "bg-orange-100 text-orange-700",
	},
	{
		icon: ShoppingBag,
		label: "Artesanato",
		path: "/crafts",
		color: "bg-purple-100 text-purple-700",
	},
	{
		icon: Glasses,
		label: "RA 360°",
		path: "/ar360",
		color: "bg-pink-100 text-pink-700",
	},
];

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="min-h-full bg-neutral-50">
			{/* Header */}
			<div className="bg-emerald-600 px-6 pt-12 pb-8 rounded-b-3xl">
				<div className="flex items-center gap-3 mb-2">
					<div className="w-12 h-12 bg-white rounded-full p-1.5 flex-shrink-0">
						<img
							src={logo}
							alt="Vakwetu Weya"
							className="w-full h-full object-contain"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
					<div>
						<h1 className="text-white">Vakwetu Weya</h1>
					</div>
				</div>
				<p className="text-emerald-100">Descobre a beleza de Angola</p>
			</div>

			{/* Quick Access */}
			<div className="px-6 -mt-6">
				<Card className="p-4 shadow-lg">
					<div className="grid grid-cols-3 gap-4">
						{quickAccess.map((item) => (
							<button
								key={item.label}
								onClick={() => navigate(item.path)}
								className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
							>
								<div
									className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}
								>
									<item.icon className="w-6 h-6" />
								</div>
								<span className="text-neutral-700">
									{item.label}
								</span>
							</button>
						))}
					</div>
				</Card>
			</div>

			{/* Custom Tour Section */}
			<div className="px-6 mt-6">
				<Card
					className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-teal-600 to-emerald-600"
					onClick={() => navigate("/custom-tour")}
				>
					<div className="p-6">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
								<Car className="w-6 h-6 text-teal-700" />
							</div>
							<div className="flex-1">
								<h2 className="text-white mb-2">
									Passeios pela Província
								</h2>
								<p className="text-teal-100 mb-4">
									Cria o teu passeio personalizado! Escolhe os
									destinos e nós tratamos do resto.
								</p>
								<div className="flex items-center gap-2">
									<Badge className="bg-white text-teal-700 hover:bg-white">
										A partir de 50.000 Kz
									</Badge>
									<Badge className="bg-teal-700 text-white hover:bg-teal-700">
										Até 3 locais incluídos
									</Badge>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</div>

			{/* Featured Packages */}
			<div className="px-6 mt-8">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-neutral-900">Pacotes em Destaque</h2>
					<Button
						variant="ghost"
						onClick={() => navigate("/packages")}
					>
						Ver todos
					</Button>
				</div>

				<div className="space-y-4">
					{featuredPackages.map((pkg) => (
						<Card
							key={pkg.id}
							className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
							onClick={() => navigate(`/packages/${pkg.id}`)}
						>
							<div className="relative h-48">
								<img
									src={pkg.image}
									alt={pkg.name}
									className="w-full h-full object-cover"
								/>
								<div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full">
									<span className="text-emerald-700">
										{pkg.duration}
									</span>
								</div>
							</div>
							<div className="p-4">
								<h3 className="text-neutral-900 mb-2">
									{pkg.name}
								</h3>
								<div className="flex justify-between items-center">
									<div className="flex items-center gap-1 text-neutral-600">
										<MapPin className="w-4 h-4" />
										<span>{pkg.location}</span>
									</div>
									<span className="text-emerald-700">
										{pkg.price}
									</span>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>

			{/* Explore Destinations */}
			<div className="px-6 mt-8 pb-24">
				<h2 className="text-neutral-900 mb-4">Explorar Destinos</h2>
				<div className="grid grid-cols-2 gap-4">
					<Card
						className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
						onClick={() => navigate("/explore/beaches")}
					>
						<div className="relative h-32">
							<img
								src="https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
								alt="Praias"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-3">
								<span className="text-white">Praias</span>
							</div>
						</div>
					</Card>
					<Card
						className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
						onClick={() => navigate("/explore/nature")}
					>
						<div className="relative h-32">
							<img
								src="https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
								alt="Natureza"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-3">
								<span className="text-white">Natureza</span>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
