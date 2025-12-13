import {
	ArrowLeft,
	Calendar,
	MapPin,
	Check,
	Car,
	Route,
	ExternalLink,
	Info,
	Clock,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState, useEffect } from "react";
import logo from "figma:asset/logo.png";
const destinations = [
	{
		id: 1,
		name: "Fenda da Tundavala",
		location: "Lubango",
		description: "Vista panor\xE2mica espetacular de 2.600m de altitude",
		history:
			"Miradouro natural formado h\xE1 milh\xF5es de anos, oferecendo uma das vistas mais impressionantes de Angola.",
		fullHistory:
			"A Fenda da Tundavala \xE9 um dos pontos tur\xEDsticos mais emblem\xE1ticos de Angola. Situada a cerca de 18 km de Lubango, esta forma\xE7\xE3o geol\xF3gica natural oferece uma vista panor\xE2mica de tirar o f\xF4lego sobre o planalto da Hu\xEDla. A fenda foi formada por processos erosivos ao longo de milh\xF5es de anos, criando um precip\xEDcio vertical de mais de 1.000 metros. O local \xE9 especialmente popular ao nascer e p\xF4r do sol, quando as cores do c\xE9u se misturam com as montanhas criando um espet\xE1culo natural \xFAnico.",
		image: "https://images.unsplash.com/photo-1666052396658-d708d801dbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjB0dW5kYXZhbGElMjBnYXB8ZW58MXx8fHwxNzYzNDUzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "2h",
		highlights: [
			"Vista panor\xE2mica 360\xB0",
			"Fotografia profissional",
			"P\xF4r do sol \xFAnico",
		],
	},
	{
		id: 2,
		name: "Serra da Leba",
		location: "Hu\xEDla",
		description: "Estrada sinuosa ic\xF3nica com curvas impressionantes",
		history:
			"Obra-prima da engenharia portuguesa constru\xEDda nos anos 70, tornou-se s\xEDmbolo nacional de Angola.",
		fullHistory:
			"A Serra da Leba \xE9 uma das estradas mais espetaculares de \xC1frica e um verdadeiro \xEDcone de Angola. Constru\xEDda entre 1970 e 1975 por engenheiros portugueses, esta estrada de montanha conecta o planalto da Hu\xEDla \xE0 prov\xEDncia do Namibe atrav\xE9s de uma s\xE9rie de curvas acentuadas em forma de ziguezague. A engenharia impressionante permite vencer um desn\xEDvel de mais de 1.000 metros em poucos quil\xF3metros. A vista desde o miradouro no topo \xE9 simplesmente espetacular, mostrando todas as curvas da estrada serpenteando pela montanha.",
		image: "https://images.unsplash.com/photo-1760141322156-67ab48c351dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJvYWQlMjBzY2VuaWN8ZW58MXx8fHwxNzYzNDUzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "1.5h",
		highlights: [
			"Miradouro panor\xE2mico",
			"Fotografia a\xE9rea",
			"Arquitectura impressionante",
		],
	},
	{
		id: 3,
		name: "Cristo Rei",
		location: "Lubango",
		description: "Est\xE1tua monumental com vista privilegiada da cidade",
		history:
			"Erguido em 1950, o Cristo Rei de Lubango foi inspirado no Cristo Redentor do Rio de Janeiro.",
		fullHistory:
			"O Cristo Rei de Lubango \xE9 uma das est\xE1tuas mais emblem\xE1ticas de Angola. Inaugurada em 1950, com 30 metros de altura, a est\xE1tua ergue-se majestosamente sobre a cidade de Lubango, oferecendo uma vista panor\xE2mica incompar\xE1vel. Inspirada no Cristo Redentor do Rio de Janeiro, a est\xE1tua tornou-se um s\xEDmbolo religioso e cultural da regi\xE3o. Do topo, os visitantes podem apreciar toda a extens\xE3o da cidade e das montanhas circundantes, especialmente impressionante ao p\xF4r do sol.",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "1h",
		highlights: [
			"Vista da cidade",
			"S\xEDmbolo hist\xF3rico",
			"Espa\xE7o contemplativo",
		],
	},
	{
		id: 4,
		name: "Cascata da Hu\xEDla",
		location: "Hu\xEDla",
		description: "Queda de \xE1gua natural em cen\xE1rio deslumbrante",
		history:
			"Quedas de \xE1gua alimentadas pelos rios da regi\xE3o, criam um o\xE1sis natural no planalto.",
		fullHistory:
			"A Cascata da Hu\xEDla \xE9 uma das maravilhas naturais da prov\xEDncia, oferecendo um ref\xFAgio de frescura e beleza. As \xE1guas cristalinas caem de uma altura consider\xE1vel, criando uma n\xE9voa refrescante e um arco-\xEDris natural nos dias ensolarados. O local \xE9 rodeado por vegeta\xE7\xE3o exuberante e rochas antigas, criando um cen\xE1rio perfeito para relaxamento e contacto com a natureza. Durante a \xE9poca das chuvas, o volume de \xE1gua aumenta significativamente, tornando o espet\xE1culo ainda mais impressionante.",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "2h",
		highlights: [
			"Banho refrescante",
			"Piquenique natural",
			"Fotografia de natureza",
		],
	},
	{
		id: 5,
		name: "Cascata da Catchukuvila",
		location: "Hu\xEDla",
		description: "Cascata escondida no meio da vegeta\xE7\xE3o",
		history:
			"Tesouro escondido da Hu\xEDla, esta cascata \xE9 conhecida pelos locais mas pouco explorada por turistas.",
		fullHistory:
			"A Cascata da Catchukuvila \xE9 uma j\xF3ia escondida nas montanhas da Hu\xEDla. Menos conhecida que outras atra\xE7\xF5es da regi\xE3o, oferece uma experi\xEAncia mais \xEDntima e aut\xEAntica com a natureza. O acesso requer uma pequena caminhada atrav\xE9s da vegeta\xE7\xE3o, mas a recompensa vale o esfor\xE7o. A cascata forma v\xE1rias piscinas naturais perfeitas para um mergulho refrescante. O som da \xE1gua a cair e o canto dos p\xE1ssaros criam uma atmosfera de paz e tranquilidade absoluta.",
		image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "1.5h",
		highlights: [
			"Trilho ecol\xF3gico",
			"Piscinas naturais",
			"Biodiversidade",
		],
	},
	{
		id: 6,
		name: "Esta\xE7\xE3o Zoot\xE9cnica",
		location: "Hu\xEDla",
		description: "Centro de investiga\xE7\xE3o com fauna e flora local",
		history:
			"Fundada no per\xEDodo colonial, preserva e estuda a biodiversidade \xFAnica do planalto angolano.",
		fullHistory:
			"A Esta\xE7\xE3o Zoot\xE9cnica da Hu\xEDla \xE9 um centro de investiga\xE7\xE3o e conserva\xE7\xE3o que desempenha um papel fundamental na preserva\xE7\xE3o da fauna e flora nativas de Angola. Fundada durante o per\xEDodo colonial, a esta\xE7\xE3o continua a realizar trabalho importante na cria\xE7\xE3o e estudo de esp\xE9cies locais, incluindo a famosa palanca negra gigante, s\xEDmbolo nacional de Angola. Os visitantes podem observar diversos animais em ambiente semi-natural e aprender sobre os esfor\xE7os de conserva\xE7\xE3o da biodiversidade angolana.",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "2h",
		highlights: ["Palanca negra", "Centro educativo", "Conserva\xE7\xE3o"],
	},
	{
		id: 7,
		name: "Lagoa do Arco",
		location: "Hu\xEDla",
		description: "Lagoa tranquila ideal para piqueniques",
		history:
			"Reservat\xF3rio natural que se tornou ponto de encontro para fam\xEDlias e amantes da natureza.",
		fullHistory:
			"A Lagoa do Arco \xE9 um o\xE1sis de tranquilidade no cora\xE7\xE3o da Hu\xEDla. Este corpo de \xE1gua natural \xE9 cercado por vegeta\xE7\xE3o e montanhas, criando um cen\xE1rio id\xEDlico para relaxamento e lazer. O local \xE9 muito popular entre as fam\xEDlias locais, especialmente aos fins de semana, para piqueniques e atividades ao ar livre. As \xE1guas calmas refletem o c\xE9u e as montanhas circundantes, criando uma paisagem perfeita para fotografia. \xC9 poss\xEDvel observar v\xE1rias esp\xE9cies de aves aqu\xE1ticas e, ocasionalmente, pequenos animais que v\xEAm beber \xE1gua.",
		image: "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "1h",
		highlights: [
			"Piquenique familiar",
			"Observa\xE7\xE3o de aves",
			"Relaxamento",
		],
	},
	{
		id: 8,
		name: "Museu da Hu\xEDla",
		location: "Lubango",
		description: "Hist\xF3ria e cultura da prov\xEDncia",
		history:
			"Inaugurado em 1955, preserva artefactos hist\xF3ricos, etnogr\xE1ficos e art\xEDsticos da regi\xE3o.",
		fullHistory:
			"O Museu da Hu\xEDla \xE9 uma institui\xE7\xE3o cultural fundamental para compreender a rica hist\xF3ria e diversidade cultural da prov\xEDncia. Inaugurado em 1955, o museu abriga uma vasta cole\xE7\xE3o de artefactos que contam a hist\xF3ria da regi\xE3o desde os tempos pr\xE9-coloniais at\xE9 \xE0 atualidade. As exposi\xE7\xF5es incluem pe\xE7as etnogr\xE1ficas dos povos Nhaneka-Humbe e Mu\xEDla, instrumentos musicais tradicionais, ferramentas agr\xEDcolas antigas, e documenta\xE7\xE3o hist\xF3rica. O edif\xEDcio em si \xE9 tamb\xE9m uma pe\xE7a de arquitectura colonial digna de aprecia\xE7\xE3o.",
		image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		duration: "1.5h",
		highlights: [
			"Cultura Nhaneka-Humbe",
			"Arte tradicional",
			"Hist\xF3ria regional",
		],
	},
];
import { useNavigate } from "react-router-dom";

export default function CustomTour() {
	const navigate = useNavigate();
	const [selectedDate, setSelectedDate] = useState(void 0);
	const [selectedDestinations, setSelectedDestinations] = useState([]);
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [isCardMinimized, setIsCardMinimized] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 100 && currentScrollY > lastScrollY) {
				setIsCardMinimized(true);
			} else if (currentScrollY < 50) {
				setIsCardMinimized(false);
			}
			setLastScrollY(currentScrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);
	const toggleDestination = (id) => {
		setSelectedDestinations((prev) =>
			prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id],
		);
	};
	const calculatePrice = () => {
		const basePrice = 5e4;
		const count = selectedDestinations.length;
		if (count <= 3) return basePrice;
		return basePrice + (count - 3) * 1e4;
	};
	const formatPrice = (price) => {
		return price.toLocaleString("pt-AO") + " Kz";
	};
	const formatDate = (date) => {
		if (!date) return "Selecione uma data";
		return date.toLocaleDateString("pt-AO", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};
	const selectedCount = selectedDestinations.length;
	const totalPrice = calculatePrice();
	const extraLocations = selectedCount > 3 ? selectedCount - 3 : 0;
	const isFormValid = selectedCount > 0 && selectedDate !== void 0;
	const handleOpenGoogleMaps = () => {
		const selectedDests = destinations.filter((d) =>
			selectedDestinations.includes(d.id),
		);
		if (selectedDests.length > 0) {
			const waypoints = selectedDests
				.map((d) => `${d.name}, ${d.location}, Angola`)
				.join("|");
			const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedDests[selectedDests.length - 1].name + ", " + selectedDests[selectedDests.length - 1].location + ", Angola")}&waypoints=${encodeURIComponent(waypoints)}`;
			window.open(url, "_blank");
		}
	};
	return (
		<div className="min-h-full bg-neutral-50">
			{/* Header */}
			<div className="bg-gradient-to-br from-teal-600 to-emerald-600 px-6 pt-12 pb-6 relative">
				<button
					onClick={() => navigate("/")}
					className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-50 transition-colors"
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
					<h1 className="text-white">Passeios pela Província</h1>
				</div>
				<p className="text-teal-100">
					Monte o teu passeio personalizado pela Huíla
				</p>
			</div>

			<div className="px-6 py-6">
				{/* Date Selection - Enhanced */}
				<Card className="p-6 mb-6 border-2 border-teal-200 shadow-md">
					<div className="flex items-center gap-2 mb-4">
						<Calendar className="w-5 h-5 text-teal-700" />
						<h2 className="text-neutral-900">Data do passeio</h2>
					</div>
					<Popover
						open={isCalendarOpen}
						onOpenChange={setIsCalendarOpen}
					>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className={`w-full justify-start text-left h-14 ${!selectedDate ? "text-neutral-400" : "text-neutral-900"}`}
							>
								<Calendar className="mr-3 h-5 w-5 text-teal-600" />
								<div className="flex-1">
									{selectedDate ? (
										<div>
											<div className="text-neutral-900">
												{formatDate(selectedDate)}
											</div>
										</div>
									) : (
										<span>Clique para escolher a data</span>
									)}
								</div>
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<CalendarComponent
								mode="single"
								selected={selectedDate}
								onSelect={(date) => {
									setSelectedDate(date);
									setIsCalendarOpen(false);
								}}
								disabled={(date) =>
									date <
									new Date(
										/* @__PURE__ */ new Date().setHours(
										0,
										0,
										0,
										0,
									),
									)
								}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</Card>

				{/* Price Summary - Enhanced with Collapsible */}
				<Card
					className={`mb-6 sticky top-4 z-10 shadow-xl border-3 border-teal-600 bg-gradient-to-br from-white to-teal-50 transition-all duration-300 ${isCardMinimized ? "p-4" : "p-6"}`}
				>
					{/* Header - Always visible */}
					<div
						className="flex items-center justify-between cursor-pointer"
						onClick={() => setIsCardMinimized(!isCardMinimized)}
					>
						<div className="flex items-center gap-2">
							<Car
								className={`text-teal-700 ${isCardMinimized ? "w-5 h-5" : "w-6 h-6"}`}
							/>
							<h2
								className={`text-neutral-900 ${isCardMinimized ? "" : ""}`}
							>
								{isCardMinimized
									? "Resumo"
									: "Resumo do Passeio"}
							</h2>
						</div>
						<div className="flex items-center gap-3">
							{isCardMinimized && (
								<div className="text-right mr-2">
									<div className="text-teal-700">
										{formatPrice(totalPrice)}
									</div>
									<div className="text-neutral-600">
										{selectedCount}{" "}
										{selectedCount === 1
											? "local"
											: "locais"}
									</div>
								</div>
							)}
							<button className="w-8 h-8 rounded-full bg-teal-100 hover:bg-teal-200 flex items-center justify-center transition-colors">
								{isCardMinimized ? (
									<ChevronDown className="w-5 h-5 text-teal-700" />
								) : (
									<ChevronUp className="w-5 h-5 text-teal-700" />
								)}
							</button>
						</div>
					</div>

					{/* Expandable Content */}
					{!isCardMinimized && (
						<>
							<div className="space-y-4 mt-5">
								{/* Locations Count */}
								<div className="flex items-center justify-between pb-4 border-b border-teal-200">
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
											<MapPin className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="text-neutral-600">
												Locais selecionados
											</div>
											<div className="text-teal-900">
												{selectedCount}{" "}
												{selectedCount === 1
													? "destino"
													: "destinos"}
											</div>
										</div>
									</div>
								</div>

								{/* Price Breakdown */}
								<div className="bg-white rounded-lg p-4 space-y-3 border border-teal-200">
									<div className="flex justify-between items-center">
										<span className="text-neutral-700">
											Valor base (até 3 locais)
										</span>
										<span className="text-neutral-900">
											50.000 Kz
										</span>
									</div>
									{extraLocations > 0 && (
										<div className="flex justify-between items-center">
											<span className="text-neutral-700">
												{extraLocations}{" "}
												{extraLocations === 1
													? "local extra"
													: "locais extras"}{" "}
												(+10.000 Kz cada)
											</span>
											<span className="text-neutral-900">
												{formatPrice(
													extraLocations * 1e4,
												)}
											</span>
										</div>
									)}
									<div className="pt-3 border-t border-neutral-200 flex justify-between items-center">
										<span className="text-neutral-900">
											Valor Total
										</span>
										<div className="text-right">
											<div className="text-teal-700">
												{formatPrice(totalPrice)}
											</div>
											<div className="text-neutral-600">
												por carro
											</div>
										</div>
									</div>
								</div>

								{/* Info Box */}
								<div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
									<div className="flex items-start gap-2">
										<Info className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
										<div className="text-teal-900">
											<p className="mb-1">
												O passeio é cobrado por carro,
												independente do número de
												passageiros.
											</p>
											<p>
												Preço fixo até 3 locais, depois
												+10.000 Kz por cada local
												adicional.
											</p>
										</div>
									</div>
								</div>
							</div>

							<Button
								className={`w-full mt-5 h-12 ${isFormValid ? "bg-teal-600 hover:bg-teal-700" : "bg-neutral-300 cursor-not-allowed"}`}
								disabled={!isFormValid}
							>
								{!selectedDate &&
									selectedCount === 0 &&
									"Escolha data e locais"}
								{!selectedDate &&
									selectedCount > 0 &&
									"Escolha uma data"}
								{selectedDate &&
									selectedCount === 0 &&
									"Selecione pelo menos 1 local"}
								{isFormValid && "Confirmar passeio"}
							</Button>
						</>
					)}
				</Card>

				{/* Destinations List - Enhanced */}
				<div className="mb-6">
					<h2 className="text-neutral-900 mb-4">
						Escolhe os destinos turísticos
					</h2>
					<p className="text-neutral-600 mb-4">
						Selecione os locais que deseja visitar. Clique no card
						para adicionar ao passeio ou em "Ver história completa"
						para saber mais.
					</p>
					<div className="space-y-4">
						{destinations.map((destination) => {
							const isSelected = selectedDestinations.includes(
								destination.id,
							);
							return (
								<Card
									key={destination.id}
									className={`overflow-hidden transition-all ${isSelected ? "ring-2 ring-teal-600 shadow-xl bg-teal-50 border-teal-300" : "hover:shadow-md border-neutral-200"}`}
								>
									<div className="flex gap-4">
										<div
											className="relative w-32 h-40 flex-shrink-0 cursor-pointer"
											onClick={() =>
												toggleDestination(
													destination.id,
												)
											}
										>
											<img
												src={destination.image}
												alt={destination.name}
												className="w-full h-full object-cover"
											/>
											{isSelected && (
												<div className="absolute inset-0 bg-teal-600/90 flex items-center justify-center">
													<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
														<Check className="w-7 h-7 text-teal-600" />
													</div>
												</div>
											)}
											{!isSelected && (
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
											)}
										</div>
										<div className="flex-1 py-3 pr-3 flex flex-col">
											<div
												className="flex-1 cursor-pointer"
												onClick={() =>
													toggleDestination(
														destination.id,
													)
												}
											>
												<h3
													className={`mb-2 ${isSelected ? "text-teal-900" : "text-neutral-900"}`}
												>
													{destination.name}
												</h3>
												<div className="flex items-center gap-1 text-neutral-600 mb-2">
													<MapPin className="w-3 h-3" />
													<span>
														{destination.location}
													</span>
													<span className="mx-2">
														•
													</span>
													<Clock className="w-3 h-3" />
													<span>
														{destination.duration}
													</span>
												</div>
												<p
													className={`mb-3 line-clamp-2 ${isSelected ? "text-teal-800" : "text-neutral-600"}`}
												>
													{destination.history}
												</p>
											</div>
											<Button
												variant="ghost"
												size="sm"
												className="w-fit text-teal-700 hover:text-teal-900 hover:bg-teal-100 -ml-2"
												onClick={(e) => {
													e.stopPropagation();
													navigate(
														`/destinations/${destination.id}`
													);
												}}
											>
												Ver história completa
												<ExternalLink className="w-3 h-3 ml-1" />
											</Button>
										</div>
									</div>
								</Card>
							);
						})}
					</div>
				</div>

				{/* Route Map - Enhanced */}
				{selectedCount > 0 && (
					<Card className="p-6 mb-24 border-2 border-teal-200">
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center gap-2">
								<Route className="w-5 h-5 text-teal-600" />
								<h2 className="text-neutral-900">
									Rota do passeio
								</h2>
							</div>
							<Button
								variant="outline"
								size="sm"
								onClick={handleOpenGoogleMaps}
								className="border-teal-600 text-teal-700 hover:bg-teal-50"
							>
								<ExternalLink className="w-4 h-4 mr-2" />
								Google Maps
							</Button>
						</div>

						<div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg p-6 mb-4">
							<div className="text-center mb-6">
								<Car className="w-16 h-16 text-teal-600 mx-auto mb-3" />
								<h3 className="text-neutral-900 mb-2">
									Mapa interativo da rota
								</h3>
								<p className="text-neutral-600">
									{selectedCount}{" "}
									{selectedCount === 1
										? "destino selecionado"
										: "destinos conectados"}
								</p>
							</div>

							{/* Visual Route Representation */}
							<div className="bg-white rounded-lg p-6 shadow-inner">
								<div className="space-y-2">
									{selectedDestinations.map(
										(destId, index) => {
											const dest = destinations.find(
												(d) => d.id === destId,
											);
											if (!dest) return null;
											return (
												<div key={destId}>
													<div className="flex items-center gap-4 p-3 bg-teal-50 rounded-lg">
														<div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
															{index + 1}
														</div>
														<div className="flex-1">
															<p className="text-neutral-900">
																{dest.name}
															</p>
															<div className="flex items-center gap-2 text-neutral-600">
																<MapPin className="w-3 h-3" />
																<span>
																	{
																		dest.location
																	}
																</span>
																<span className="mx-1">
																	•
																</span>
																<Clock className="w-3 h-3" />
																<span>
																	{
																		dest.duration
																	}
																</span>
															</div>
														</div>
													</div>
													{index <
														selectedDestinations.length -
														1 && (
															<div className="flex items-center justify-center py-2">
																<div className="w-1 h-6 bg-gradient-to-b from-teal-600 to-teal-300" />
															</div>
														)}
												</div>
											);
										},
									)}
								</div>
							</div>
						</div>

						<div className="bg-white border border-teal-200 rounded-lg p-4">
							<p className="text-neutral-600 text-center">
								Clique em "Google Maps" para abrir a rota
								completa com navegação em tempo real
							</p>
						</div>
					</Card>
				)}
			</div>
		</div>
	);
}
