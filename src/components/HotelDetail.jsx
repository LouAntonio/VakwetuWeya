import { ArrowLeft, MapPin, Star, Eye, Wifi, Coffee, Car, Dumbbell, Waves, UtensilsCrossed, Users, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
const hotelData = {
  1: {
    name: "Hotel Tr\xF3pico",
    location: "Luanda, Marginal",
    rating: 4.5,
    reviews: 324,
    price: "85.000 Kz",
    description: "Hotel de luxo situado na Marginal de Luanda, com vistas espetaculares para o mar e acesso direto \xE0 praia. Quartos modernos e elegantes com todas as comodidades.",
    images: [
      "https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGFmcmljYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYzMzg3NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1729717949948-56b52db111dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzYzMzY4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1640108930193-76941e385e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYzMzA5OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    amenities: [
      { icon: Wifi, label: "Wifi Gr\xE1tis" },
      { icon: Coffee, label: "Pequeno-almo\xE7o inclu\xEDdo" },
      { icon: Car, label: "Estacionamento gr\xE1tis" },
      { icon: Waves, label: "Piscina" },
      { icon: Dumbbell, label: "Gin\xE1sio" },
      { icon: UtensilsCrossed, label: "Restaurante" }
    ],
    phone: "+244 222 123 456",
    email: "reservas@hoteltropico.ao",
    capacity: "2 adultos"
  },
  2: {
    name: "Pousada do Mar",
    location: "Benguela, Ba\xEDa Farta",
    rating: 4.2,
    reviews: 189,
    price: "65.000 Kz",
    description: "Pousada acolhedora junto ao mar em Benguela. Perfeita para quem procura tranquilidade e contacto com a natureza. Vista direta para o oceano Atl\xE2ntico.",
    images: [
      "https://images.unsplash.com/photo-1729717949780-46e511489c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMGhvdGVsfGVufDF8fHx8MTc2MzM1NDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYzMzg3NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1640108930193-76941e385e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYzMzA5OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    amenities: [
      { icon: Wifi, label: "Wifi Gr\xE1tis" },
      { icon: Waves, label: "Vista para o mar" },
      { icon: Waves, label: "Piscina" },
      { icon: UtensilsCrossed, label: "Restaurante" },
      { icon: Coffee, label: "Bar na praia" }
    ],
    phone: "+244 272 234 567",
    email: "info@pousadadomar.ao",
    capacity: "2-4 adultos"
  },
  3: {
    name: "Lodge Safari Vista",
    location: "Huambo, Parque Natural",
    rating: 4.8,
    reviews: 156,
    price: "95.000 Kz",
    description: "Lodge exclusivo no cora\xE7\xE3o da natureza angolana. Experi\xEAncia \xFAnica com safari tours e observa\xE7\xE3o de fauna selvagem. Quartos r\xFAsticos de luxo.",
    images: [
      "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMzQ4OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1640108930193-76941e385e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYzMzA5OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    amenities: [
      { icon: Wifi, label: "Wifi" },
      { icon: UtensilsCrossed, label: "Safari tours inclu\xEDdos" },
      { icon: Coffee, label: "Bar" },
      { icon: Car, label: "Transfer inclu\xEDdo" }
    ],
    phone: "+244 241 345 678",
    email: "reservas@safarivista.ao",
    capacity: "2 adultos"
  }
};
const getHotelData = (id) => {
  return hotelData[id] || { ...hotelData[1], name: `Hotel ${id}` };
};
export default function HotelDetail({ hotelId, onBack }) {
  const hotel = getHotelData(hotelId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return <div className="min-h-full bg-neutral-50">
      {
    /* Image Gallery */
  }
      <div className="relative">
        <div className="h-80 relative overflow-hidden">
          <img
    src={hotel.images[currentImageIndex]}
    alt={hotel.name}
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          
          {
    /* Back Button */
  }
          <button
    onClick={onBack}
    className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
  >
            <ArrowLeft className="w-5 h-5 text-neutral-900" />
          </button>

          {
    /* 360° Button */
  }
          <button className="absolute top-4 right-4 px-4 py-2 bg-white rounded-full flex items-center gap-2 shadow-lg">
            <Eye className="w-4 h-4 text-blue-700" />
            <span className="text-blue-700">Ver em 360°</span>
          </button>

          {
    /* Rating Badge */
  }
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            <span className="text-neutral-900">{hotel.rating}</span>
            <span className="text-neutral-600">({hotel.reviews} avaliações)</span>
          </div>
        </div>

        {
    /* Image Thumbnails */
  }
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex gap-2 overflow-x-auto">
            {hotel.images.map((image, index) => <button
    key={index}
    onClick={() => setCurrentImageIndex(index)}
    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${currentImageIndex === index ? "border-white scale-105" : "border-transparent opacity-70"}`}
  >
                <img src={image} alt={`${hotel.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>)}
          </div>
        </div>
      </div>

      {
    /* Content */
  }
      <div className="px-6 py-6">
        {
    /* Header Info */
  }
        <Card className="p-6 shadow-lg mb-6">
          <h1 className="text-neutral-900 mb-2">{hotel.name}</h1>
          <div className="flex items-center gap-1 text-neutral-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{hotel.location}</span>
          </div>

          <p className="text-neutral-700 mb-4">{hotel.description}</p>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
            <div>
              <span className="text-neutral-600">Por noite</span>
              <div className="text-blue-700 mt-1">{hotel.price}</div>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <Users className="w-4 h-4" />
              <span>{hotel.capacity}</span>
            </div>
          </div>
        </Card>

        {
    /* Amenities */
  }
        <Card className="p-6 mb-6">
          <h2 className="text-neutral-900 mb-4">Comodidades</h2>
          <div className="grid grid-cols-2 gap-4">
            {hotel.amenities.map((amenity, index) => <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-neutral-700">{amenity.label}</span>
              </div>)}
          </div>
        </Card>

        {
    /* Contact */
  }
        <Card className="p-6 mb-6">
          <h2 className="text-neutral-900 mb-4">Contacto</h2>
          <div className="space-y-3">
            <a href={`tel:${hotel.phone}`} className="flex items-center gap-3 text-neutral-700 hover:text-blue-700">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-700" />
              </div>
              <span>{hotel.phone}</span>
            </a>
            <a href={`mailto:${hotel.email}`} className="flex items-center gap-3 text-neutral-700 hover:text-blue-700">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-700" />
              </div>
              <span>{hotel.email}</span>
            </a>
          </div>
        </Card>

        {
    /* Location */
  }
        <Card className="p-6 mb-24">
          <h2 className="text-neutral-900 mb-4">Localização</h2>
          <div className="bg-neutral-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-2" />
              <p className="text-neutral-600">Mapa interativo da localização</p>
            </div>
          </div>
        </Card>
      </div>

      {
    /* Fixed Bottom CTA */
  }
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-lg">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            <Eye className="w-4 h-4 mr-2" />
            Tour 360°
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            Reservar agora
          </Button>
        </div>
      </div>
    </div>;
}
