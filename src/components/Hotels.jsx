import { MapPin, Star, Wifi, Coffee, Car } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import logo from "figma:asset/9ea65f0ca487a91974bdaf913ebea037eb7e4db4.png";
const hotels = [
	{
		id: 1,
		name: "Hotel Tr\xF3pico",
		location: "Luanda",
		rating: 4.5,
		price: "85.000 Kz",
		image: "https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Pequeno-almo\xE7o", "Estacionamento"],
	},
	{
		id: 2,
		name: "Pousada do Mar",
		location: "Benguela",
		rating: 4.2,
		price: "65.000 Kz",
		image: "https://images.unsplash.com/photo-1729717949780-46e511489c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGhvdGVsfGVufDF8fHx8MTc2MzM1NDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Vista para o mar", "Piscina"],
	},
	{
		id: 3,
		name: "Lodge Safari Vista",
		location: "Huambo",
		rating: 4.8,
		price: "95.000 Kz",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Safari tours", "Bar"],
	},
	{
		id: 4,
		name: "Hotel O\xE1sis Namibe",
		location: "Namibe",
		rating: 4.6,
		price: "78.000 Kz",
		image: "https://images.unsplash.com/photo-1643925690746-9eb744dae41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "AC", "Restaurante"],
	},
	{
		id: 5,
		name: "Residencial Kalandula",
		location: "Malanje",
		rating: 4,
		price: "55.000 Kz",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Pequeno-almo\xE7o", "Tours"],
	},
	{
		id: 6,
		name: "Epic Sana Luanda Hotel",
		location: "Luanda",
		rating: 4.9,
		price: "125.000 Kz",
		image: "https://images.unsplash.com/photo-1755644046048-989506b73a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwbW9kZXJufGVufDF8fHx8MTc2MzM4OTI0NHww&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Spa", "Gin\xE1sio"],
	},
	{
		id: 7,
		name: "Resort Baia Azul",
		location: "Benguela",
		rating: 4.7,
		price: "110.000 Kz",
		image: "https://images.unsplash.com/photo-1729717949948-56b52db111dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzYzMzY4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Piscina", "Spa"],
	},
	{
		id: 8,
		name: "Hotel Presidente",
		location: "Lubango",
		rating: 4.4,
		price: "72.000 Kz",
		image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYzMzg3NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Estacionamento", "Bar"],
	},
	{
		id: 9,
		name: "Boutique Hotel Colonial",
		location: "Huambo",
		rating: 4.3,
		price: "68.000 Kz",
		image: "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMzQ4OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Pequeno-almo\xE7o", "Restaurante"],
	},
	{
		id: 10,
		name: "Hotel Panorama",
		location: "Cabinda",
		rating: 4.1,
		price: "62.000 Kz",
		image: "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
		amenities: ["Wifi", "Vista panor\xE2mica", "AC"],
	},
];
const amenityIcons = {
	Wifi: Wifi,
	"Pequeno-almo\xE7o": Coffee,
	Estacionamento: Car,
};
import { useNavigate } from "react-router-dom";

export default function Hotels() {
	const navigate = useNavigate();
	return (
		<div className="min-h-full bg-neutral-50 pb-24">
			{/* Header */}
			<div className="bg-blue-600 px-6 pt-12 pb-6">
				<div className="flex items-center gap-3 mb-1">
					<div className="w-10 h-10 bg-white rounded-full p-1.5 flex-shrink-0">
						<img
							src={logo}
							alt="Vakwetu Weya"
							className="w-full h-full object-contain"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
					<h1 className="text-white">Hotéis</h1>
				</div>
				<p className="text-blue-100">Encontra o alojamento perfeito</p>
			</div>

			{/* Filters */}
			<div className="px-6 py-4 bg-white border-b border-neutral-200">
				<div className="flex gap-2 overflow-x-auto">
					<Badge
						variant="default"
						className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
					>
						Todos
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Luanda
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Benguela
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Huambo
					</Badge>
				</div>
			</div>

			{/* Hotels List */}
			<div className="px-6 py-4">
				<div className="space-y-4">
					{hotels.map((hotel) => (
						<Card
							key={hotel.id}
							className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
							onClick={() => navigate(`/hotels/${hotel.id}`)}
						>
							<div className="relative h-48">
								<img
									src={hotel.image}
									alt={hotel.name}
									className="w-full h-full object-cover"
								/>
								<div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-1">
									<Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
									<span className="text-neutral-900">
										{hotel.rating}
									</span>
								</div>
							</div>
							<div className="p-4">
								<h3 className="text-neutral-900 mb-2">
									{hotel.name}
								</h3>
								<div className="flex items-center gap-1 text-neutral-600 mb-3">
									<MapPin className="w-4 h-4" />
									<span>{hotel.location}</span>
								</div>

								<div className="flex flex-wrap gap-2 mb-4">
									{hotel.amenities
										.slice(0, 3)
										.map((amenity) => {
											const Icon = amenityIcons[amenity];
											return (
												<Badge
													key={amenity}
													variant="outline"
													className="flex items-center gap-1"
												>
													{Icon && (
														<Icon className="w-3 h-3" />
													)}
													{amenity}
												</Badge>
											);
										})}
								</div>

								<div className="flex justify-between items-center pt-3 border-t border-neutral-200">
									<div>
										<span className="text-neutral-600">
											Por noite
										</span>
										<div className="text-blue-700">
											{hotel.price}
										</div>
									</div>
									<Button className="bg-blue-600 hover:bg-blue-700">
										Ver detalhes
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
