import { MapPin, Phone, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import logo from "figma:asset/logo.png";
const restaurants = [
	{
		id: 1,
		name: "Restaurante Sabores de Angola",
		location: "Luanda, Ilha",
		cuisine: "Tradicional Angolana",
		rating: 4.7,
		price: "$$",
		image: "https://images.unsplash.com/photo-1609792790758-0994786ad983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzYzMzI3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		phone: "+244 923 456 789",
		hours: "11:00 - 23:00",
		specialty: "Calulu e Muamba",
	},
	{
		id: 2,
		name: "Marisqueira Atl\xE2ntico",
		location: "Luanda, Marginal",
		cuisine: "Frutos do Mar",
		rating: 4.5,
		price: "$$$",
		image: "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
		phone: "+244 923 456 790",
		hours: "12:00 - 22:00",
		specialty: "Lagosta Grelhada",
	},
	{
		id: 3,
		name: "Churrasqueira do Sul",
		location: "Benguela",
		cuisine: "Churrasco",
		rating: 4.3,
		price: "$$",
		image: "https://images.unsplash.com/photo-1609792790758-0994786ad983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzYzMzI3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		phone: "+244 923 456 791",
		hours: "10:00 - 22:00",
		specialty: "Picanha na Brasa",
	},
	{
		id: 4,
		name: "Bistr\xF4 Colonial",
		location: "Huambo",
		cuisine: "Contempor\xE2nea",
		rating: 4.6,
		price: "$$$",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		phone: "+244 923 456 792",
		hours: "12:00 - 23:00",
		specialty: "Fus\xE3o Angolana",
	},
	{
		id: 5,
		name: "Cantina da Vila",
		location: "Malanje",
		cuisine: "Tradicional",
		rating: 4.2,
		price: "$",
		image: "https://images.unsplash.com/photo-1609792790758-0994786ad983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzYzMzI3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		phone: "+244 923 456 793",
		hours: "09:00 - 20:00",
		specialty: "Funge com Peixe",
	},
];
export default function Restaurants() {
	return (
		<div className="min-h-full bg-neutral-50 pb-24">
			{/* Header */}
			<div className="bg-orange-600 px-6 pt-12 pb-6">
				<div className="flex items-center gap-3 mb-1">
					<div className="w-10 h-10 bg-white rounded-full p-1.5 flex-shrink-0">
						<img
							src={logo}
							alt="Vakwetu Weya"
							className="w-full h-full object-contain"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
					<h1 className="text-white">Restaurantes</h1>
				</div>
				<p className="text-orange-100">Sabores autênticos de Angola</p>
			</div>

			{/* Filters */}
			<div className="px-6 py-4 bg-white border-b border-neutral-200">
				<div className="flex gap-2 overflow-x-auto">
					<Badge
						variant="default"
						className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap"
					>
						Todos
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Tradicional
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Frutos do Mar
					</Badge>
					<Badge variant="outline" className="whitespace-nowrap">
						Churrasco
					</Badge>
				</div>
			</div>

			{/* Restaurants List */}
			<div className="px-6 py-4">
				<div className="space-y-4">
					{restaurants.map((restaurant) => (
						<Card
							key={restaurant.id}
							className="overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div className="relative h-48">
								<img
									src={restaurant.image}
									alt={restaurant.name}
									className="w-full h-full object-cover"
								/>
								<div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full">
									<span className="text-orange-700">
										{restaurant.price}
									</span>
								</div>
							</div>
							<div className="p-4">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-neutral-900 flex-1">
										{restaurant.name}
									</h3>
									<Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
										{restaurant.rating}
									</Badge>
								</div>

								<div className="space-y-2 mb-4">
									<div className="flex items-center gap-1 text-neutral-600">
										<MapPin className="w-4 h-4" />
										<span>{restaurant.location}</span>
									</div>
									<div className="flex items-center gap-1 text-neutral-600">
										<Clock className="w-4 h-4" />
										<span>{restaurant.hours}</span>
									</div>
									<div className="flex items-center gap-1 text-neutral-600">
										<Phone className="w-4 h-4" />
										<span>{restaurant.phone}</span>
									</div>
								</div>

								<div className="flex gap-2 mb-4">
									<Badge variant="outline">
										{restaurant.cuisine}
									</Badge>
									<Badge
										variant="outline"
										className="border-orange-600 text-orange-700"
									>
										{restaurant.specialty}
									</Badge>
								</div>

								<div className="flex gap-2 pt-3 border-t border-neutral-200">
									<Button
										variant="outline"
										className="flex-1"
									>
										Ver menu
									</Button>
									<Button className="flex-1 bg-orange-600 hover:bg-orange-700">
										<Phone className="w-4 h-4 mr-2" />
										Contactar
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
