import { Glasses, Eye, Play, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import logo from 'figma:asset/9ea65f0ca487a91974bdaf913ebea037eb7e4db4.png';

const destinations = [
  {
    id: 1,
    name: 'Cataratas de Kalandula',
    location: 'Malanje',
    image: 'https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hasAR: true,
    has360: true,
  },
  {
    id: 2,
    name: 'Deserto do Namibe',
    location: 'Namibe',
    image: 'https://images.unsplash.com/photo-1643925690746-9eb744dae41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hasAR: true,
    has360: true,
  },
  {
    id: 3,
    name: 'Praias de Luanda',
    location: 'Luanda',
    image: 'https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hasAR: false,
    has360: true,
  },
  {
    id: 4,
    name: 'Parque Nacional da Kissama',
    location: 'Bengo',
    image: 'https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hasAR: true,
    has360: true,
  },
];

export default function AR360() {
  return (
    <div className="min-h-full bg-neutral-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-600 to-purple-600 px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-white rounded-full p-1.5 flex-shrink-0">
            <img
              src={logo}
              alt="Vakwetu Weya"
              className="w-full h-full object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <h1 className="text-white">Realidade Aumentada</h1>
        </div>
        <p className="text-pink-100">Explora destinos sem sair de casa</p>
      </div>

      {/* VR Experience Card */}
      <div className="px-6 -mt-4">
        <Card className="p-6 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Glasses className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-neutral-900 mb-2">Modo Óculos RA</h2>
              <p className="text-neutral-700 mb-4">Conecta os teus óculos de realidade aumentada para uma experiência imersiva completa.</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Conectar dispositivo RA
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Features */}
      <div className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 text-center">
            <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <h3 className="text-neutral-900 mb-1">Vista 360°</h3>
            <p className="text-neutral-600">Rotação completa</p>
          </Card>
          <Card className="p-4 text-center">
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-neutral-900 mb-1">HD Quality</h3>
            <p className="text-neutral-600">Alta definição</p>
          </Card>
        </div>
      </div>

      {/* Destinations */}
      <div className="px-6 mt-6">
        <h2 className="text-neutral-900 mb-4">Destinos Disponíveis</h2>
        <div className="space-y-4">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="flex gap-4">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex-1 py-3 pr-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-neutral-900 mb-2">{destination.name}</h3>
                    <p className="text-neutral-600 mb-2">{destination.location}</p>
                    <div className="flex gap-2">
                      {destination.has360 && (
                        <Badge variant="outline" className="border-emerald-600 text-emerald-700">
                          360°
                        </Badge>
                      )}
                      {destination.hasAR && (
                        <Badge variant="outline" className="border-purple-600 text-purple-700">
                          RA
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-neutral-50 border-t border-neutral-200">
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Globe className="w-4 h-4 mr-2" />
                    Explorar 360°
                  </Button>
                  {destination.hasAR && (
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <Glasses className="w-4 h-4 mr-2" />
                      Modo RA
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="px-6 mt-6 mb-6">
        <Card className="p-6">
          <h2 className="text-neutral-900 mb-4">Como Funciona</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-neutral-900 mb-1">Escolhe um destino</h3>
                <p className="text-neutral-600">Seleciona o local que desejas explorar</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-neutral-900 mb-1">Escolhe o modo</h3>
                <p className="text-neutral-600">Vista 360° no telemóvel ou óculos RA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-neutral-900 mb-1">Explora livremente</h3>
                <p className="text-neutral-600">Move-te e descobre cada detalhe</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}