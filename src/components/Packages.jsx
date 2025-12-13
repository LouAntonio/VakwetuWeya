import { MapPin, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import logo from "figma:asset/logo.png";
const packages = [
	{
		id: 1,
		name: "Cataratas de Kalandula",
		location: "Malanje",
		province: "Dentro da prov\xEDncia",
		price: "650.000 Kz",
		duration: "3 dias",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		type: "dentro",
	},
	{
		id: 2,
		name: "Deserto do Namibe",
		location: "Namibe",
		province: "Fora da prov\xEDncia",
		price: "1.200.000 Kz",
		duration: "5 dias",
		image: "https://images.unsplash.com/photo-1643925690746-9eb744dae41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
		type: "fora",
	},
	{
		id: 3,
		name: "Praias de Luanda",
		location: "Luanda",
		province: "Dentro da prov\xEDncia",
		price: "150.000 Kz",
		duration: "1 dia",
		image: "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
		type: "dentro",
	},
	{
		id: 4,
		name: "Safari no Kissama",
		location: "Bengo",
		province: "Dentro da prov\xEDncia",
		price: "250.000 Kz",
		duration: "2 dias",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		type: "dentro",
	},
	{
		id: 5,
		name: "Tour Hist\xF3rico de Benguela",
		location: "Benguela",
		province: "Fora da prov\xEDncia",
		price: "800.000 Kz",
		duration: "4 dias",
		image: "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
		type: "fora",
	},
	{
		id: 6,
		name: "Expedi\xE7\xE3o ao Huambo",
		location: "Huambo",
		province: "Fora da prov\xEDncia",
		price: "950.000 Kz",
		duration: "6 dias",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		type: "fora",
	},
];
import { useNavigate } from "react-router-dom";

export default function Packages() {
	const navigate = useNavigate();
	return (
		<div className="min-h-full bg-neutral-50 pb-24">
			{/* Header */}
			<div className="bg-emerald-600 px-6 pt-12 pb-6">
				<div className="flex items-center gap-3 mb-1">
					<div className="w-10 h-10 bg-white rounded-full p-1.5 flex-shrink-0">
						<img
							src={logo}
							alt="Vakwetu Weya"
							className="w-full h-full object-contain"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
					<h1 className="text-white">Pacotes Turísticos</h1>
				</div>
				<p className="text-emerald-100">
					Explora Angola com os nossos tours
				</p>
			</div>

			{/* Filters */}
			<div className="px-6 py-4 bg-white border-b border-neutral-200">
				<div className="flex gap-2 overflow-x-auto">
					<Badge
						variant="default"
						className="bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap"
					>
						Todos
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Dentro da província
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Fora da província
					</Badge>
				</div>
			</div>

			{/* Packages List */}
			<div className="px-6 py-4">
				<div className="space-y-4">
					{packages.map((pkg) => (
						<Card
							key={pkg.id}
							className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
							onClick={() => navigate(`/packages/${pkg.id}`)}
						>
							<div className="flex gap-4">
								<div className="relative w-32 h-32 flex-shrink-0">
									<img
										src={pkg.image}
										alt={pkg.name}
										className="w-full h-full object-cover"
									/>
									{pkg.type === "fora" && (
										<div className="absolute top-2 left-2">
											<Badge className="bg-orange-600 text-white">
												Fora
											</Badge>
										</div>
									)}
								</div>
								<div className="flex-1 py-3 pr-3 flex flex-col justify-between">
									<div>
										<h3 className="text-neutral-900 mb-1">
											{pkg.name}
										</h3>
										<div className="flex items-center gap-1 text-neutral-600 mb-1">
											<MapPin className="w-3 h-3" />
											<span>{pkg.location}</span>
										</div>
										<div className="flex items-center gap-1 text-neutral-600">
											<Clock className="w-3 h-3" />
											<span>{pkg.duration}</span>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-emerald-700">
											{pkg.price}
										</span>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
