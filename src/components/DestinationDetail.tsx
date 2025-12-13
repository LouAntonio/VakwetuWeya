import { ArrowLeft, MapPin, Clock, Eye, Calendar, Camera, Compass } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface DestinationDetailProps {
  destinationId: number;
  onBack: () => void;
}

const destinationData: Record<number, any> = {
  1: {
    name: 'Fenda da Tundavala',
    location: 'Lubango',
    description: 'Vista panorâmica espetacular de 2.600m de altitude',
    fullHistory: 'A Fenda da Tundavala é um dos pontos turísticos mais emblemáticos de Angola. Situada a cerca de 18 km de Lubango, esta formação geológica natural oferece uma vista panorâmica de tirar o fôlego sobre o planalto da Huíla. A fenda foi formada por processos erosivos ao longo de milhões de anos, criando um precipício vertical de mais de 1.000 metros. O local é especialmente popular ao nascer e pôr do sol, quando as cores do céu se misturam com as montanhas criando um espetáculo natural único.',
    image: 'https://images.unsplash.com/photo-1666052396658-d708d801dbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjB0dW5kYXZhbGElMjBnYXB8ZW58MXx8fHwxNzYzNDUzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2 horas',
    bestTime: 'Nascer ou pôr do sol',
    difficulty: 'Fácil',
    highlights: [
      'Vista panorâmica 360° sobre o planalto',
      'Fotografia profissional do vale',
      'Pôr do sol único sobre as montanhas',
      'Miradouro com proteção de segurança',
      'Espaço para piquenique',
    ],
    tips: [
      'Levar roupa quente, pois a temperatura pode ser baixa no topo',
      'Melhor visitado durante a manhã ou final da tarde',
      'Excelente para fotografia - trazer câmara profissional',
      'Evitar dias muito nublados para melhor visibilidade',
    ],
    activities: ['Fotografia', 'Observação de paisagem', 'Piquenique'],
  },
  2: {
    name: 'Serra da Leba',
    location: 'Huíla',
    description: 'Estrada sinuosa icónica com curvas impressionantes',
    fullHistory: 'A Serra da Leba é uma das estradas mais espetaculares de África e um verdadeiro ícone de Angola. Construída entre 1970 e 1975 por engenheiros portugueses, esta estrada de montanha conecta o planalto da Huíla à província do Namibe através de uma série de curvas acentuadas em forma de ziguezague. A engenharia impressionante permite vencer um desnível de mais de 1.000 metros em poucos quilómetros. A vista desde o miradouro no topo é simplesmente espetacular, mostrando todas as curvas da estrada serpenteando pela montanha.',
    image: 'https://images.unsplash.com/photo-1760141322156-67ab48c351dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJvYWQlMjBzY2VuaWN8ZW58MXx8fHwxNzYzNDUzODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '1.5 horas',
    bestTime: 'Manhã cedo',
    difficulty: 'Fácil',
    highlights: [
      'Miradouro panorâmico no topo',
      'Fotografia aérea da estrada sinuosa',
      'Arquitectura e engenharia impressionante',
      'Vista sobre o deserto do Namibe',
      'Monumento histórico de Angola',
    ],
    tips: [
      'Ir ao miradouro no topo para a melhor vista',
      'Cuidado ao tirar fotos próximo à estrada',
      'Perfeito para fotografia com drone',
      'Visitar pela manhã para luz ideal',
    ],
    activities: ['Fotografia', 'Apreciação arquitetónica', 'Observação'],
  },
  3: {
    name: 'Cristo Rei',
    location: 'Lubango',
    description: 'Estátua monumental com vista privilegiada da cidade',
    fullHistory: 'O Cristo Rei de Lubango é uma das estátuas mais emblemáticas de Angola. Inaugurada em 1950, com 30 metros de altura, a estátua ergue-se majestosamente sobre a cidade de Lubango, oferecendo uma vista panorâmica incomparável. Inspirada no Cristo Redentor do Rio de Janeiro, a estátua tornou-se um símbolo religioso e cultural da região. Do topo, os visitantes podem apreciar toda a extensão da cidade e das montanhas circundantes, especialmente impressionante ao pôr do sol.',
    image: 'https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '1 hora',
    bestTime: 'Final da tarde',
    difficulty: 'Fácil',
    highlights: [
      'Vista panorâmica de 360° da cidade',
      'Monumento religioso e histórico',
      'Espaço contemplativo e sereno',
      'Jardins bem cuidados ao redor',
      'Fotografia da estátua e cidade',
    ],
    tips: [
      'Respeitar o local como espaço religioso',
      'Melhor vista ao final da tarde',
      'Trazer água e protetor solar',
      'Ideal para reflexão e contemplação',
    ],
    activities: ['Contemplação', 'Fotografia', 'Turismo religioso'],
  },
  4: {
    name: 'Cascata da Huíla',
    location: 'Huíla',
    description: 'Queda de água natural em cenário deslumbrante',
    fullHistory: 'A Cascata da Huíla é uma das maravilhas naturais da província, oferecendo um refúgio de frescura e beleza. As águas cristalinas caem de uma altura considerável, criando uma névoa refrescante e um arco-íris natural nos dias ensolarados. O local é rodeado por vegetação exuberante e rochas antigas, criando um cenário perfeito para relaxamento e contacto com a natureza. Durante a época das chuvas, o volume de água aumenta significativamente, tornando o espetáculo ainda mais impressionante.',
    image: 'https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2 horas',
    bestTime: 'Durante ou após época das chuvas',
    difficulty: 'Moderada',
    highlights: [
      'Banho refrescante nas piscinas naturais',
      'Piquenique junto à natureza',
      'Fotografia de natureza e paisagem',
      'Observação de flora local',
      'Arco-íris natural em dias ensolarados',
    ],
    tips: [
      'Trazer roupa de banho e toalha',
      'Calçado adequado para terreno irregular',
      'Levar comida para piquenique',
      'Melhor visitado após chuvas',
    ],
    activities: ['Banho', 'Piquenique', 'Fotografia', 'Caminhada'],
  },
};

// Fallback para destinos sem dados completos
const getDestinationData = (id: number) => {
  return destinationData[id] || { 
    ...destinationData[1], 
    name: `Destino ${id}`,
    fullHistory: 'Informação detalhada em breve.' 
  };
};

export default function DestinationDetail({ destinationId, onBack }: DestinationDetailProps) {
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
            <span className="text-white">{destination.location}</span>
          </div>
          <h1 className="text-white mb-2">{destination.name}</h1>
          <p className="text-neutral-200">{destination.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="p-4 text-center bg-teal-50 border-teal-200">
            <Clock className="w-6 h-6 text-teal-700 mx-auto mb-2" />
            <div className="text-neutral-600">Duração</div>
            <div className="text-neutral-900">{destination.duration}</div>
          </Card>
          <Card className="p-4 text-center bg-emerald-50 border-emerald-200">
            <Calendar className="w-6 h-6 text-emerald-700 mx-auto mb-2" />
            <div className="text-neutral-600">Melhor época</div>
            <div className="text-neutral-900">{destination.bestTime}</div>
          </Card>
          <Card className="p-4 text-center bg-blue-50 border-blue-200">
            <Compass className="w-6 h-6 text-blue-700 mx-auto mb-2" />
            <div className="text-neutral-600">Dificuldade</div>
            <div className="text-neutral-900">{destination.difficulty}</div>
          </Card>
        </div>

        {/* History Section */}
        <Card className="p-6 mb-6">
          <h2 className="text-neutral-900 mb-4">História e Significado</h2>
          <p className="text-neutral-700 leading-relaxed">{destination.fullHistory}</p>
        </Card>

        {/* Highlights */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-teal-600" />
            <h2 className="text-neutral-900">Destaques</h2>
          </div>
          <ul className="space-y-3">
            {destination.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-teal-600" />
                </div>
                <span className="text-neutral-700 flex-1">{highlight}</span>
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
            {destination.activities.map((activity: string, index: number) => (
              <Badge key={index} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                {activity}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Tips */}
        <Card className="p-6 mb-24 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <h2 className="text-neutral-900 mb-4">Dicas para visitantes</h2>
          <ul className="space-y-3">
            {destination.tips.map((tip: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">💡</span>
                </div>
                <span className="text-neutral-700 flex-1">{tip}</span>
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
