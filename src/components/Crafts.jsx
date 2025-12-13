import { ShoppingCart, Heart } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import logo from "figma:asset/logo.png";
const craftsData = [
	// Arte - 10 itens
	{
		id: 1,
		name: "M\xE1scara Tradicional Chokwe",
		price: "45.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Ant\xF3nio Silva",
		description: "M\xE1scara cerimonial esculpida \xE0 m\xE3o",
	},
	{
		id: 2,
		name: "Pintura Abstracta Africana",
		price: "120.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Maria Santos",
		description: "Tela original com cores vibrantes",
	},
	{
		id: 3,
		name: "Quadro Vida Angolana",
		price: "95.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Jos\xE9 Manuel",
		description: "Retrato da vida quotidiana",
	},
	{
		id: 4,
		name: "Arte Tribal em Tela",
		price: "75.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Isabel Costa",
		description: "Padr\xF5es tradicionais modernizados",
	},
	{
		id: 5,
		name: "Pintura P\xF4r do Sol Africano",
		price: "85.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Pedro Lopes",
		description: "Paisagem ao acr\xEDlico",
	},
	{
		id: 6,
		name: "M\xE1scara Ritual Decorativa",
		price: "52.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Ana Rodrigues",
		description: "Pe\xE7a decorativa \xFAnica",
	},
	{
		id: 7,
		name: "Arte em Pano Pintado",
		price: "38.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Carlos Fernandes",
		description: "Tecido pintado \xE0 m\xE3o",
	},
	{
		id: 8,
		name: "Mural Miniatura",
		price: "65.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Beatriz Silva",
		description: "Arte de parede tradicional",
	},
	{
		id: 9,
		name: "Pintura de Animais Selvagens",
		price: "78.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Tom\xE1s Neves",
		description: "Fauna africana em tela",
	},
	{
		id: 10,
		name: "Quadro Cultura Angolana",
		price: "110.000 Kz",
		image: "https://images.unsplash.com/photo-1728827894907-7e6e07c644f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNDU3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Arte",
		artisan: "Lu\xEDsa Martins",
		description: "Celebra\xE7\xE3o da cultura local",
	},
	// Escultura - 10 itens
	{
		id: 11,
		name: "Estatueta em Madeira Africana",
		price: "65.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Jo\xE3o Pedro",
		description: "Escultura em \xE9bano polido",
	},
	{
		id: 12,
		name: "Busto Tribal Esculpido",
		price: "85.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Manuel Garcia",
		description: "Obra em madeira maci\xE7a",
	},
	{
		id: 13,
		name: "Escultura Fam\xEDlia Africana",
		price: "95.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Fernanda Alves",
		description: "Grupo familiar esculpido",
	},
	{
		id: 14,
		name: "Animal Tot\xE9mico em Pedra",
		price: "72.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Ricardo Dias",
		description: "Escultura em pedra sab\xE3o",
	},
	{
		id: 15,
		name: "Pe\xE7a Abstracta Moderna",
		price: "105.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Sofia Ramos",
		description: "Arte contempor\xE2nea em madeira",
	},
	{
		id: 16,
		name: "M\xE1scara Cerimonial Grande",
		price: "58.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Augusto Pereira",
		description: "M\xE1scara ritual tradicional",
	},
	{
		id: 17,
		name: "Conjunto Estatuetas Pequenas",
		price: "42.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Helena Carvalho",
		description: "Set de 3 pe\xE7as decorativas",
	},
	{
		id: 18,
		name: "Escultura Guerreiro Tradicional",
		price: "88.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Daniel Sousa",
		description: "Figura hist\xF3rica esculpida",
	},
	{
		id: 19,
		name: "Totem de Prote\xE7\xE3o",
		price: "125.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "In\xEAs Monteiro",
		description: "Pe\xE7a grande de madeira nobre",
	},
	{
		id: 20,
		name: "Escultura Animal Savana",
		price: "68.000 Kz",
		image: "https://images.unsplash.com/photo-1651780864007-21f33c215c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwc2N1bHB0dXJlJTIwY2FydmVkfGVufDF8fHx8MTc2MzQ1Nzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Escultura",
		artisan: "Vitor Cunha",
		description: "Palanca negra em madeira",
	},
	// Joalharia - 10 itens
	{
		id: 21,
		name: "Colar de Missangas Coloridas",
		price: "8.500 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Ana Costa",
		description: "Colar artesanal tradicional",
	},
	{
		id: 22,
		name: "Pulseira Tribal Prata",
		price: "15.000 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Paula Mendes",
		description: "Prata com padr\xF5es tradicionais",
	},
	{
		id: 23,
		name: "Brincos em Madeira e P\xE9rolas",
		price: "12.000 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Carla Vieira",
		description: "Pe\xE7as \xFAnicas e leves",
	},
	{
		id: 24,
		name: "Anel Pedra Semi-Preciosa",
		price: "22.000 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Marta Oliveira",
		description: "\xC1gata angolana engastada",
	},
	{
		id: 25,
		name: "Conjunto Colar e Pulseira",
		price: "18.000 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "J\xFAlia Marques",
		description: "Set coordenado de missangas",
	},
	{
		id: 26,
		name: "Tornozeleira Tradicional",
		price: "9.500 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Susana Gomes",
		description: "Adorno tradicional de tornozelo",
	},
	{
		id: 27,
		name: "Colar Contas de Vidro",
		price: "14.000 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Teresa Fonseca",
		description: "Pe\xE7a colorida e vibrante",
	},
	{
		id: 28,
		name: "Broche Decorativo Tribal",
		price: "11.000 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Vera Baptista",
		description: "Adorno para roupa tradicional",
	},
	{
		id: 29,
		name: "Pulseiras Empilh\xE1veis Set",
		price: "16.500 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Alice Tavares",
		description: "Conjunto de 5 pulseiras",
	},
	{
		id: 30,
		name: "Pingente S\xEDmbolo Adinkra",
		price: "19.000 Kz",
		image: "https://images.unsplash.com/photo-1760726744405-b955b568ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBiZWFkZWR8ZW58MXx8fHwxNzYzNDU3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "Joalharia",
		artisan: "Cristina Pires",
		description: "S\xEDmbolo de for\xE7a e uni\xE3o",
	},
	// Têxteis - 10 itens
	{
		id: 31,
		name: "Tecido Samakaka Original",
		price: "25.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Paulo Santos",
		description: "Tecido tradicional angolano",
	},
	{
		id: 32,
		name: "Capulana Padr\xE3o Floral",
		price: "18.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Rosa Lima",
		description: "Pano vers\xE1til e colorido",
	},
	{
		id: 33,
		name: "Manta Artesanal Tecida",
		price: "45.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Estela Correia",
		description: "Manta quente feita \xE0 m\xE3o",
	},
	{
		id: 34,
		name: "Almofadas Decorativas Set",
		price: "32.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Filipa Reis",
		description: "Conjunto de 4 almofadas",
	},
	{
		id: 35,
		name: "Tapete Kilim Tradicional",
		price: "65.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Rui Machado",
		description: "Tapete tecido \xE0 m\xE3o",
	},
	{
		id: 36,
		name: "Toalha de Mesa Bordada",
		price: "28.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Gra\xE7a Duarte",
		description: "Pe\xE7a decorativa bordada",
	},
	{
		id: 37,
		name: "Len\xE7o Cabe\xE7a Tradicional",
		price: "12.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "L\xEDdia Cardoso",
		description: "Len\xE7o colorido multifuncional",
	},
	{
		id: 38,
		name: "Cortina Batik Artesanal",
		price: "38.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "M\xF3nica Azevedo",
		description: "Cortina tingida \xE0 m\xE3o",
	},
	{
		id: 39,
		name: "Colcha Patchwork Africano",
		price: "55.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Nat\xE1lia Barros",
		description: "Colcha de retalhos \xFAnicos",
	},
	{
		id: 40,
		name: "Echarpe Tecida Padr\xE3o Tribal",
		price: "22.000 Kz",
		image: "https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGV4dGlsZSUyMGZhYnJpY3xlbnwxfHx8fDE3NjM0NTc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		category: "T\xEAxteis",
		artisan: "Olga Castro",
		description: "Acess\xF3rio elegante e quente",
	},
];
export default function Crafts() {
	const [favorites, setFavorites] = useState([]);
	const [cart, setCart] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("Todos");
	const toggleFavorite = (id) => {
		setFavorites((prev) =>
			prev.includes(id)
				? prev.filter((fav) => fav !== id)
				: [...prev, id],
		);
	};
	const addToCart = (id) => {
		setCart((prev) => [...prev, id]);
	};
	const categories = [
		"Todos",
		"Arte",
		"Escultura",
		"Joalharia",
		"T\xEAxteis",
	];
	const filteredCrafts =
		selectedCategory === "Todos"
			? craftsData
			: craftsData.filter((craft) => craft.category === selectedCategory);
	return (
		<div className="min-h-full bg-neutral-50 pb-24">
			{/* Header */}
			<div className="bg-purple-600 px-6 pt-12 pb-6">
				<div className="flex justify-between items-start">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-white rounded-full p-1.5 flex-shrink-0">
							<img
								src={logo}
								alt="Vakwetu Weya"
								className="w-full h-full object-contain"
								style={{ mixBlendMode: "multiply" }}
							/>
						</div>
						<div>
							<h1 className="text-white">Artesanato</h1>
							<p className="text-purple-100">
								Produtos autênticos angolanos
							</p>
						</div>
					</div>
					<div className="relative">
						<Button
							variant="ghost"
							size="icon"
							className="text-white hover:bg-purple-700"
						>
							<ShoppingCart className="w-6 h-6" />
						</Button>
						{cart.length > 0 && (
							<div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
								<span className="text-white">
									{cart.length}
								</span>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Categories */}
			<div className="px-6 py-4 bg-white border-b border-neutral-200">
				<div className="flex gap-2 overflow-x-auto">
					{categories.map((category) => (
						<Badge
							key={category}
							variant={
								selectedCategory === category
									? "default"
									: "outline"
							}
							className={`whitespace-nowrap cursor-pointer ${selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-50"}`}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</Badge>
					))}
				</div>
			</div>

			{/* Crafts Grid */}
			<div className="px-6 py-4">
				<p className="text-neutral-600 mb-4">
					{filteredCrafts.length}{" "}
					{filteredCrafts.length === 1 ? "produto" : "produtos"}{" "}
					encontrados
				</p>
				<div className="grid grid-cols-2 gap-4">
					{filteredCrafts.map((craft) => (
						<Card
							key={craft.id}
							className="overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div className="relative">
								<div className="aspect-square relative">
									<img
										src={craft.image}
										alt={craft.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<button
									onClick={() => toggleFavorite(craft.id)}
									className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
								>
									<Heart
										className={`w-4 h-4 ${favorites.includes(craft.id) ? "fill-red-500 text-red-500" : "text-neutral-600"}`}
									/>
								</button>
								<div className="absolute top-2 left-2">
									<Badge className="bg-white text-neutral-900 hover:bg-white">
										{craft.category}
									</Badge>
								</div>
							</div>
							<div className="p-3">
								<h3 className="text-neutral-900 mb-1 line-clamp-2">
									{craft.name}
								</h3>
								<p className="text-neutral-600 mb-2">
									{craft.artisan}
								</p>
								<p className="text-purple-700 mb-3">
									{craft.price}
								</p>
								<Button
									onClick={() => addToCart(craft.id)}
									className="w-full bg-purple-600 hover:bg-purple-700"
									disabled={cart.includes(craft.id)}
								>
									{cart.includes(craft.id) ? (
										"Adicionado"
									) : (
										<>
											<ShoppingCart className="w-4 h-4 mr-2" />
											Adicionar
										</>
									)}
								</Button>
							</div>
						</Card>
					))}
				</div>
			</div>

			{/* Info Banner */}
			<div className="px-6 py-4">
				<Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
					<h3 className="text-neutral-900 mb-2">
						Apoie Artesãos Locais
					</h3>
					<p className="text-neutral-700">
						Todos os produtos são feitos à mão por artesãos
						angolanos. A tua compra ajuda a preservar as tradições
						culturais e apoia as comunidades locais.
					</p>
				</Card>
			</div>
		</div>
	);
}
