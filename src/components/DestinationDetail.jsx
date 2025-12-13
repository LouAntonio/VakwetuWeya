import {
	ArrowLeft,
	MapPin,
	Clock,
	Eye,
	Calendar,
	Camera,
	Compass,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
const destinationData = {
	1: {
		name: "Fenda da Tundavala",
		location: "Lubango",
		description: "Vista panor\xE2mica espetacular de 2.600m de altitude",
		fullHistory:
			"A Fenda da Tundavala \xE9 um dos pontos tur\xEDsticos mais emblem\xE1ticos de Angola. Situada a cerca de 18 km de Lubango, esta forma\xE7\xE3o geol\xF3gica natural oferece uma vista panor\xE2mica de tirar o f\xF4lego sobre o planalto da Hu\xEDla. A fenda foi formada por processos erosivos ao longo de milh\xF5es de anos, criando um precip\xEDcio vertical de mais de 1.000 metros. O local \xE9 especialmente popular ao nascer e p\xF4r do sol, quando as cores do c\xE9u se misturam com as montanhas criando um espet\xE1culo natural \xFAnico.",
		image: "https://images.unsplash.com/photo-1666052396658-d708d801dbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjB0dW5kYXZhbGElMjBnYXB8ZW58MXx8fHwxNzYzNDUzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "2 horas",
		bestTime: "Nascer ou p\xF4r do sol",
		difficulty: "F\xE1cil",
		highlights: [
			"Vista panor\xE2mica 360\xB0 sobre o planalto",
			"Fotografia profissional do vale",
			"P\xF4r do sol \xFAnico sobre as montanhas",
			"Miradouro com prote\xE7\xE3o de seguran\xE7a",
			"Espa\xE7o para piquenique",
		],
		tips: [
			"Levar roupa quente, pois a temperatura pode ser baixa no topo",
			"Melhor visitado durante a manh\xE3 ou final da tarde",
			"Excelente para fotografia - trazer c\xE2mara profissional",
			"Evitar dias muito nublados para melhor visibilidade",
		],
		activities: [
			"Fotografia",
			"Observa\xE7\xE3o de paisagem",
			"Piquenique",
		],
	},
	2: {
		name: "Serra da Leba",
		location: "Hu\xEDla",
		description: "Estrada sinuosa ic\xF3nica com curvas impressionantes",
		fullHistory:
			"A Serra da Leba \xE9 uma das estradas mais espetaculares de \xC1frica e um verdadeiro \xEDcone de Angola. Constru\xEDda entre 1970 e 1975 por engenheiros portugueses, esta estrada de montanha conecta o planalto da Hu\xEDla \xE0 prov\xEDncia do Namibe atrav\xE9s de uma s\xE9rie de curvas acentuadas em forma de ziguezague. A engenharia impressionante permite vencer um desn\xEDvel de mais de 1.000 metros em poucos quil\xF3metros. A vista desde o miradouro no topo \xE9 simplesmente espetacular, mostrando todas as curvas da estrada serpenteando pela montanha.",
		image: "https://images.unsplash.com/photo-1760141322156-67ab48c351dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJvYWQlMjBzY2VuaWN8ZW58MXx8fHwxNzYzNDUzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "1.5 horas",
		bestTime: "Manh\xE3 cedo",
		difficulty: "F\xE1cil",
		highlights: [
			"Miradouro panor\xE2mico no topo",
			"Fotografia a\xE9rea da estrada sinuosa",
			"Arquitectura e engenharia impressionante",
			"Vista sobre o deserto do Namibe",
			"Monumento hist\xF3rico de Angola",
		],
		tips: [
			"Ir ao miradouro no topo para a melhor vista",
			"Cuidado ao tirar fotos pr\xF3ximo \xE0 estrada",
			"Perfeito para fotografia com drone",
			"Visitar pela manh\xE3 para luz ideal",
		],
		activities: [
			"Fotografia",
			"Aprecia\xE7\xE3o arquitet\xF3nica",
			"Observa\xE7\xE3o",
		],
	},
	3: {
		name: "Cristo Rei",
		location: "Lubango",
		description: "Est\xE1tua monumental com vista privilegiada da cidade",
		fullHistory:
			"O Cristo Rei de Lubango \xE9 uma das est\xE1tuas mais emblem\xE1ticas de Angola. Inaugurada em 1950, com 30 metros de altura, a est\xE1tua ergue-se majestosamente sobre a cidade de Lubango, oferecendo uma vista panor\xE2mica incompar\xE1vel. Inspirada no Cristo Redentor do Rio de Janeiro, a est\xE1tua tornou-se um s\xEDmbolo religioso e cultural da regi\xE3o. Do topo, os visitantes podem apreciar toda a extens\xE3o da cidade e das montanhas circundantes, especialmente impressionante ao p\xF4r do sol.",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "1 hora",
		bestTime: "Final da tarde",
		difficulty: "F\xE1cil",
		highlights: [
			"Vista panor\xE2mica de 360\xB0 da cidade",
			"Monumento religioso e hist\xF3rico",
			"Espa\xE7o contemplativo e sereno",
			"Jardins bem cuidados ao redor",
			"Fotografia da est\xE1tua e cidade",
		],
		tips: [
			"Respeitar o local como espa\xE7o religioso",
			"Melhor vista ao final da tarde",
			"Trazer \xE1gua e protetor solar",
			"Ideal para reflex\xE3o e contempla\xE7\xE3o",
		],
		activities: ["Contempla\xE7\xE3o", "Fotografia", "Turismo religioso"],
	},
	4: {
		name: "Cascata da Hu\xEDla",
		location: "Hu\xEDla",
		description: "Queda de \xE1gua natural em cen\xE1rio deslumbrante",
		fullHistory:
			"A Cascata da Hu\xEDla \xE9 uma das maravilhas naturais da prov\xEDncia, oferecendo um ref\xFAgio de frescura e beleza. As \xE1guas cristalinas caem de uma altura consider\xE1vel, criando uma n\xE9voa refrescante e um arco-\xEDris natural nos dias ensolarados. O local \xE9 rodeado por vegeta\xE7\xE3o exuberante e rochas antigas, criando um cen\xE1rio perfeito para relaxamento e contacto com a natureza. Durante a \xE9poca das chuvas, o volume de \xE1gua aumenta significativamente, tornando o espet\xE1culo ainda mais impressionante.",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "2 horas",
		bestTime: "Durante ou ap\xF3s \xE9poca das chuvas",
		difficulty: "Moderada",
		highlights: [
			"Banho refrescante nas piscinas naturais",
			"Piquenique junto \xE0 natureza",
			"Fotografia de natureza e paisagem",
			"Observa\xE7\xE3o de flora local",
			"Arco-\xEDris natural em dias ensolarados",
		],
		tips: [
			"Trazer roupa de banho e toalha",
			"Cal\xE7ado adequado para terreno irregular",
			"Levar comida para piquenique",
			"Melhor visitado ap\xF3s chuvas",
		],
		activities: ["Banho", "Piquenique", "Fotografia", "Caminhada"],
	},
};
const getDestinationData = (id) => {
	return (
		destinationData[id] || {
			...destinationData[1],
			name: `Destino ${id}`,
			fullHistory: "Informa\xE7\xE3o detalhada em breve.",
		}
	);
};
export default function DestinationDetail({ destinationId, onBack }) {
	const destination = getDestinationData(destinationId);
	return (
		<div className="min-h-full bg-neutral-50">
			{/* Header Image */}
			<div className="relative h-96">
				<img
					src={destination.image}
					alt={destination.name}
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

				{/* Back Button */}
				<button
					onClick={onBack}
					className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
				>
					<ArrowLeft className="w-5 h-5 text-neutral-900" />
				</button>

				{/* Title Overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-6">
					<div className="flex items-center gap-2 mb-2">
						<MapPin className="w-5 h-5 text-white" />
						<span className="text-white">
							{destination.location}
						</span>
					</div>
					<h1 className="text-white mb-2">{destination.name}</h1>
					<p className="text-neutral-200">
						{destination.description}
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-6 py-6">
				{/* Quick Info */}
				<div className="grid grid-cols-3 gap-3 mb-6">
					<Card className="p-4 text-center bg-teal-50 border-teal-200">
						<Clock className="w-6 h-6 text-teal-700 mx-auto mb-2" />
						<div className="text-neutral-600">Duração</div>
						<div className="text-neutral-900">
							{destination.duration}
						</div>
					</Card>
					<Card className="p-4 text-center bg-emerald-50 border-emerald-200">
						<Calendar className="w-6 h-6 text-emerald-700 mx-auto mb-2" />
						<div className="text-neutral-600">Melhor época</div>
						<div className="text-neutral-900">
							{destination.bestTime}
						</div>
					</Card>
					<Card className="p-4 text-center bg-blue-50 border-blue-200">
						<Compass className="w-6 h-6 text-blue-700 mx-auto mb-2" />
						<div className="text-neutral-600">Dificuldade</div>
						<div className="text-neutral-900">
							{destination.difficulty}
						</div>
					</Card>
				</div>

				{/* History Section */}
				<Card className="p-6 mb-6">
					<h2 className="text-neutral-900 mb-4">
						História e Significado
					</h2>
					<p className="text-neutral-700 leading-relaxed">
						{destination.fullHistory}
					</p>
				</Card>

				{/* Highlights */}
				<Card className="p-6 mb-6">
					<div className="flex items-center gap-2 mb-4">
						<Eye className="w-5 h-5 text-teal-600" />
						<h2 className="text-neutral-900">Destaques</h2>
					</div>
					<ul className="space-y-3">
						{destination.highlights.map((highlight, index) => (
							<li key={index} className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="w-2 h-2 rounded-full bg-teal-600" />
								</div>
								<span className="text-neutral-700 flex-1">
									{highlight}
								</span>
							</li>
						))}
					</ul>
				</Card>

				{/* Activities */}
				<Card className="p-6 mb-6">
					<div className="flex items-center gap-2 mb-4">
						<Camera className="w-5 h-5 text-emerald-600" />
						<h2 className="text-neutral-900">Atividades</h2>
					</div>
					<div className="flex flex-wrap gap-2">
						{destination.activities.map((activity, index) => (
							<Badge
								key={index}
								className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
							>
								{activity}
							</Badge>
						))}
					</div>
				</Card>

				{/* Tips */}
				<Card className="p-6 mb-24 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
					<h2 className="text-neutral-900 mb-4">
						Dicas para visitantes
					</h2>
					<ul className="space-y-3">
						{destination.tips.map((tip, index) => (
							<li key={index} className="flex items-start gap-3">
								<div className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
									<span className="text-xs">💡</span>
								</div>
								<span className="text-neutral-700 flex-1">
									{tip}
								</span>
							</li>
						))}
					</ul>
				</Card>
			</div>

			{/* Fixed Bottom CTA */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-lg">
				<Button
					onClick={onBack}
					className="w-full bg-teal-600 hover:bg-teal-700"
				>
					Adicionar ao meu passeio
				</Button>
			</div>
		</div>
	);
}
