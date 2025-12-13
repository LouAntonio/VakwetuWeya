import { ArrowLeft, MapPin, Heart } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";
import logo from "figma:asset/logo.png";
const beaches = [
	{
		id: 1,
		name: "Praia da Ilha de Luanda",
		location: "Luanda",
		description: "Ic\xF3nica praia urbana com vista para a ba\xEDa",
		image: "https://images.unsplash.com/photo-1660289647786-bfa5e9e8ba16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzYzNDM3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 2,
		name: "Praia do Cabo Ledo",
		location: "Bengo",
		description: "Praia selvagem perfeita para surf",
		image: "https://images.unsplash.com/photo-1637027997087-5683522b715e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM0NTc5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 3,
		name: "Praia de Mussulo",
		location: "Luanda",
		description: "Pen\xEDnsula paradis\xEDaca com \xE1guas cristalinas",
		image: "https://images.unsplash.com/photo-1643325344964-14e0450ebce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNhbmQlMjBiZWFjaCUyMHR1cnF1b2lzZXxlbnwxfHx8fDE3NjM0NTc5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 4,
		name: "Praia Morena",
		location: "Benguela",
		description: "Areia dourada e p\xF4r do sol espetacular",
		image: "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 5,
		name: "Praia de Sangano",
		location: "Benguela",
		description: "Destino popular para desportos aqu\xE1ticos",
		image: "https://images.unsplash.com/photo-1660289647786-bfa5e9e8ba16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzYzNDM3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 6,
		name: "Praia das Miragens",
		location: "Namibe",
		description: "Praia des\xE9rtica com paisagem \xFAnica",
		image: "https://images.unsplash.com/photo-1643925690746-9eb744dae41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 7,
		name: "Praia de Caotinha",
		location: "Benguela",
		description: "Praia tranquila ideal para fam\xEDlias",
		image: "https://images.unsplash.com/photo-1637027997087-5683522b715e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM0NTc5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 8,
		name: "Praia do Saco",
		location: "Namibe",
		description: "Ba\xEDa protegida com \xE1guas calmas",
		image: "https://images.unsplash.com/photo-1643325344964-14e0450ebce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNhbmQlMjBiZWFjaCUyMHR1cnF1b2lzZXxlbnwxfHx8fDE3NjM0NTc5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 9,
		name: "Praia de Ba\xEDa Azul",
		location: "Benguela",
		description: "Praia urbana moderna com infraestrutura",
		image: "https://images.unsplash.com/photo-1729717949780-46e511489c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGhvdGVsfGVufDF8fHx8MTc2MzM1NDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 10,
		name: "Praia da Caotinha",
		location: "Luanda",
		description: "Praia rochosa com piscinas naturais",
		image: "https://images.unsplash.com/photo-1660289647786-bfa5e9e8ba16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzYzNDM3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
	},
];
const nature = [
	{
		id: 11,
		name: "Cataratas de Kalandula",
		location: "Malanje",
		description: "Segunda maior queda de \xE1gua de \xC1frica",
		image: "https://images.unsplash.com/photo-1760638135404-308b3a556cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NjMzNzQwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 12,
		name: "Fenda da Tundavala",
		location: "Hu\xEDla",
		description: "Miradouro natural com vista de 360\xB0",
		image: "https://images.unsplash.com/photo-1668900016730-75a72135f96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHNjZW5pY3xlbnwxfHx8fDE3NjM0MTA4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 13,
		name: "Parque Nacional da Kissama",
		location: "Bengo",
		description: "Reserva natural com fauna selvagem",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 14,
		name: "Serra da Leba",
		location: "Hu\xEDla",
		description: "Estrada sinuosa ic\xF3nica nas montanhas",
		image: "https://images.unsplash.com/photo-1760141322156-67ab48c351dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJvYWQlMjBzY2VuaWN8ZW58MXx8fHwxNzYzNDUzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 15,
		name: "Trilho da Leba",
		location: "Hu\xEDla",
		description: "Caminhada entre montanhas e vales",
		image: "https://images.unsplash.com/photo-1563141415-2ae640ce9c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMGhpa2luZ3xlbnwxfHx8fDE3NjMzODUyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 16,
		name: "Cascata da Hu\xEDla",
		location: "Hu\xEDla",
		description: "Queda de \xE1gua rodeada por vegeta\xE7\xE3o",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 17,
		name: "Deserto do Namibe",
		location: "Namibe",
		description: "Dunas de areia e paisagem des\xE9rtica",
		image: "https://images.unsplash.com/photo-1643925690746-9eb744dae41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 18,
		name: "Lagoa do Arco",
		location: "Hu\xEDla",
		description: "Lago tranquilo rodeado por montanhas",
		image: "https://images.unsplash.com/photo-1668900016730-75a72135f96d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHNjZW5pY3xlbnwxfHx8fDE3NjM0MTA4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 19,
		name: "Mata da Maiombe",
		location: "Cabinda",
		description: "Floresta tropical com biodiversidade rica",
		image: "https://images.unsplash.com/photo-1563141415-2ae640ce9c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMGhpa2luZ3xlbnwxfHx8fDE3NjMzODUyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
	},
	{
		id: 20,
		name: "Pedras Negras de Pungo Andongo",
		location: "Malanje",
		description: "Forma\xE7\xF5es rochosas \xFAnicas e impressionantes",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
	},
];
import { useParams, useNavigate } from "react-router-dom";

export default function DestinationExplorer() {
	const { category } = useParams();
	const navigate = useNavigate();
	const onBack = () => navigate(-1);
	// Wait, onBack was just navigate(-1) right?
	// I can just use navigate(-1) in the click handler.
	const [favorites, setFavorites] = useState([]);
	const destinations = category === "beaches" ? beaches : nature;
	const title =
		category === "beaches" ? "Praias de Angola" : "Natureza de Angola";
	const subtitle =
		category === "beaches"
			? "Descobre as melhores praias"
			: "Explora a natureza selvagem";
	const toggleFavorite = (id) => {
		setFavorites((prev) =>
			prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
		);
	};
	return (
		<div className="min-h-full bg-neutral-50">
			{/* Header */}
			<div className="bg-gradient-to-br from-emerald-600 to-teal-600 px-6 pt-12 pb-6 relative">
				<button
					onClick={() => navigate(-1)}
					className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
				>
					<ArrowLeft className="w-5 h-5 text-neutral-900" />
				</button>

				<div className="flex items-center gap-3 mb-2 mt-6">
					<div className="w-10 h-10 bg-white rounded-full p-1.5 flex-shrink-0">
						<img
							src={logo}
							alt="Vakwetu Weya"
							className="w-full h-full object-contain"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
					<h1 className="text-white">{title}</h1>
				</div>
				<p className="text-emerald-100">{subtitle}</p>
			</div>

			{/* Destinations Grid */}
			<div className="px-6 py-6 pb-24">
				<div className="grid grid-cols-2 gap-4">
					{destinations.map((dest) => {
						const isFavorite = favorites.includes(dest.id);
						return (
							<Card
								key={dest.id}
								className="overflow-hidden hover:shadow-lg transition-shadow"
							>
								<div className="relative">
									<div className="aspect-[4/5] relative">
										<img
											src={dest.image}
											alt={dest.name}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

										{/* Favorite Button */}
										<button
											onClick={() =>
												toggleFavorite(dest.id)
											}
											className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
										>
											<Heart
												className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-neutral-600"}`}
											/>
										</button>

										{/* Location Badge */}
										<div className="absolute top-2 left-2">
											<Badge className="bg-white text-neutral-900 hover:bg-white">
												<MapPin className="w-3 h-3 mr-1" />
												{dest.location}
											</Badge>
										</div>

										{/* Content */}
										<div className="absolute bottom-0 left-0 right-0 p-3">
											<h3 className="text-white mb-1">
												{dest.name}
											</h3>
											<p className="text-neutral-200 line-clamp-2">
												{dest.description}
											</p>
										</div>
									</div>
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
}
