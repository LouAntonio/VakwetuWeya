import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/9ea65f0ca487a91974bdaf913ebea037eb7e4db4.png";
const slides = [
  {
    title: "Bem-vindo \xE0 Vakwetu Weya",
    description: "Descobre a beleza e diversidade de Angola atrav\xE9s de experi\xEAncias aut\xEAnticas e memor\xE1veis",
    image: "https://images.unsplash.com/photo-1613908853317-8606178b3e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdvbGElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYzMzg3Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    showLogo: true
  },
  {
    title: "Explora Angola com turismo inteligente",
    description: "Pacotes personalizados, guias especializados e as melhores rotas para conhecer o pa\xEDs",
    image: "https://images.unsplash.com/photo-1593944917357-b265a76eab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbmR1bGElMjBmYWxscyUyMGFuZ29sYXxlbnwxfHx8fDE3NjMzODc2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    showLogo: false
  },
  {
    title: "Reserva hot\xE9is, restaurantes e tours num s\xF3 lugar",
    description: "Tudo o que precisas para a tua aventura angolana, na palma da tua m\xE3o",
    image: "https://images.unsplash.com/photo-1711802536820-186e24f0665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzYzMzg3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    showLogo: false
  }
];
export default function Onboarding({ onFinish }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish();
    }
  };
  const handleSkip = () => {
    onFinish();
  };
  return <div className="h-full flex flex-col bg-white">
      {
    /* Image Section */
  }
      <div className="flex-1 relative">
        <img
    src={slides[currentSlide].image}
    alt={slides[currentSlide].title}
    className="w-full h-full object-cover"
  />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        
        {
    /* Logo on first slide */
  }
        {slides[currentSlide].showLogo && <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-white rounded-full p-6 shadow-2xl">
              <img
    src={logo}
    alt="Vakwetu Weya"
    className="w-full h-full object-contain"
    style={{ mixBlendMode: "multiply" }}
  />
            </div>
          </div>}
      </div>

      {
    /* Content Section */
  }
      <div className="bg-white px-6 py-8 rounded-t-3xl -mt-8 relative z-10">
        <div className="flex justify-center gap-2 mb-6">
          {slides.map((_, index) => <div
    key={index}
    className={`h-1.5 rounded-full transition-all ${index === currentSlide ? "w-8 bg-emerald-600" : "w-1.5 bg-neutral-300"}`}
  />)}
        </div>

        <h1 className="text-neutral-900 mb-3 text-center">{slides[currentSlide].title}</h1>
        <p className="text-neutral-600 text-center mb-8">{slides[currentSlide].description}</p>

        <div className="flex gap-3">
          {currentSlide < slides.length - 1 && <Button variant="outline" onClick={handleSkip} className="flex-1">
              Pular
            </Button>}
          <Button onClick={handleNext} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
            {currentSlide < slides.length - 1 ? <>
                Próximo <ChevronRight className="ml-2 h-4 w-4" />
              </> : "Come\xE7ar"}
          </Button>
        </div>
      </div>
    </div>;
}
