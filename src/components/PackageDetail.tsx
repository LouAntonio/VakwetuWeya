import { ArrowLeft, MapPin, Clock, Users, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface PackageDetailProps {
  packageId: number;
  onBack: () => void;
}

const packageData: Record<number, any> = {
  1: {
    name: 'Cataratas de Kalandula',
    location: 'Malanje',
    price: '650.000 Kz',
    duration: '3 dias / 2 noites',
    image: 'https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Visita as espetaculares Cataratas de Kalandula, uma das maiores quedas de água de África, e explora as maravilhas naturais da província de Malanje.',
    groupSize: '2-12 pessoas',
    includes: [
      'Transporte ida e volta',
      'Guia turístico especializado',
      'Alojamento (2 noites)',
      'Refeições incluídas',
      'Seguro de viagem',
    ],
    itinerary: [
      {
        day: 'Dia 1',
        title: 'Cataratas de Kalandula',
        description: 'Chegada e primeira vista das cataratas',
      },
      {
        day: 'Dia 2',
        title: 'Pedras Negras de Pungo Andongo',
        description: 'Visita às formações rochosas únicas',
      },
      {
        day: 'Dia 3',
        title: 'Mercado Local',
        description: 'Experiência cultural no mercado tradicional',
      },
    ],
  },
  2: {
    name: 'Deserto do Namibe',
    location: 'Namibe',
    price: '1.200.000 Kz',
    duration: '5 dias / 4 noites',
    image: 'https://images.unsplash.com/photo-1643925690746-9eb744dae41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Aventura pelo Deserto do Namibe, explorando dunas, fauna selvagem e paisagens deslumbrantes.',
    groupSize: '4-8 pessoas',
    includes: [
      'Transporte 4x4',
      'Guia especializado em deserto',
      'Alojamento (4 noites)',
      'Todas as refeições',
      'Equipamento de segurança',
      'Água mineral',
    ],
    itinerary: [
      {
        day: 'Dia 1',
        title: 'Chegada ao Namibe',
        description: 'Aclimatação e preparação',
      },
      {
        day: 'Dia 2',
        title: 'Dunas de Areia',
        description: 'Exploração das maiores dunas',
      },
      {
        day: 'Dia 3',
        title: 'Welwitschia Mirabilis',
        description: 'Visita às plantas milenares',
      },
      {
        day: 'Dia 4',
        title: 'Serra da Leba',
        description: 'Paisagens montanhosas incríveis',
      },
      {
        day: 'Dia 5',
        title: 'Costa do Namibe',
        description: 'Praia e regresso',
      },
    ],
  },
  3: {
    name: 'Praias de Luanda',
    location: 'Luanda',
    price: '150.000 Kz',
    duration: '1 dia',
    image: 'https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tour pelas praias mais bonitas de Luanda, com paragens para nadar e apreciar a gastronomia local.',
    groupSize: '2-20 pessoas',
    includes: [
      'Transporte',
      'Guia turístico',
      'Almoço na praia',
    ],
    itinerary: [
      {
        day: 'Manhã',
        title: 'Ilha de Luanda',
        description: 'Passeio pela ilha',
      },
      {
        day: 'Tarde',
        title: 'Praia do Cabo Ledo',
        description: 'Natação e relaxamento',
      },
      {
        day: 'Noite',
        title: 'Jantar na praia',
        description: 'Pôr do sol e refeição',
      },
    ],
  },
};

export default function PackageDetail({ packageId, onBack }: PackageDetailProps) {
  const pkg = packageData[packageId] || packageData[1];

  return (
    <div className="min-h-full bg-neutral-50">
      {/* Header Image */}
      <div className="relative h-80">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-900" />
        </button>

        {/* 360° Button */}
        <button className="absolute top-4 right-4 px-4 py-2 bg-white rounded-full flex items-center gap-2 shadow-lg">
          <Eye className="w-4 h-4 text-emerald-700" />
          <span className="text-emerald-700">Ver em 360°</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-6 -mt-6 relative">
        <Card className="p-6 shadow-lg mb-6">
          <h1 className="text-neutral-900 mb-2">{pkg.name}</h1>
          <div className="flex items-center gap-1 text-neutral-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{pkg.location}</span>
          </div>
          
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-neutral-600" />
              <span className="text-neutral-700">{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-neutral-600" />
              <span className="text-neutral-700">{pkg.groupSize}</span>
            </div>
          </div>

          <p className="text-neutral-700 mb-4">{pkg.description}</p>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
            <div>
              <span className="text-neutral-600">Preço por pessoa</span>
              <div className="text-emerald-700 mt-1">{pkg.price}</div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Disponível</Badge>
          </div>
        </Card>

        {/* Itinerary */}
        <Card className="p-6 mb-6">
          <h2 className="text-neutral-900 mb-4">Itinerário</h2>
          <div className="space-y-4">
            {pkg.itinerary.map((item: any, index: number) => (
              <div key={index} className="flex gap-4">
                <div className="w-1 bg-emerald-600 rounded-full flex-shrink-0" />
                <div className="pb-4">
                  <div className="text-emerald-700 mb-1">{item.day}</div>
                  <h3 className="text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Includes */}
        <Card className="p-6 mb-6">
          <h2 className="text-neutral-900 mb-4">O que está incluído</h2>
          <ul className="space-y-2">
            {pkg.includes.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Map Section */}
        <Card className="p-6 mb-24">
          <h2 className="text-neutral-900 mb-4">Trajecto do Tour</h2>
          <div className="bg-neutral-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-2" />
              <p className="text-neutral-600">Mapa interativo do trajecto</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-lg">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            Ver tour em RA
          </Button>
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
            Comprar pacote
          </Button>
        </div>
      </div>
    </div>
  );
}
