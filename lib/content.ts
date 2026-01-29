
export const ebookContent = {
    title: "Nutrir es más que comer",
    subtitle: "Una guía para entender qué hace realmente un nutricionista y cómo la nutrición puede transformar tu bienestar desde adentro",
    author: "Arianna García",
    brand: "NutritionSays",
    instagram: "@nutritionsays",
    sections: [
        {
            id: "intro",
            title: "Portada",
            subtitle: "La nutrición no empieza en el plato, empieza en ti",
            content: [], // Handled specifically in layout
            icon: "Sparkles",
            image: "/images/arianna-pointing.jpg",
            imageAlt: "Arianna García Wellness",
            imagePosition: "right"
        },
        {
            id: "nutricion-real",
            title: "Qué es realmente la nutrición",
            subtitle: "Adiós a la visión fragmentada",
            content: [
                "Durante años nos han vendido la nutrición como una lista de restricciones.",
                "Pero la realidad es muy distinta. En este capítulo aprenderás:",
                "• Por qué las dietas restrictivas fallan el 95% de las veces.",
                "• Cómo tu entorno y emociones moldean tu forma de comer.",
                "• A diferenciar entre nutrirte y simplemente 'llenarte'.",
                "El nutricionista modeno no es un juez, es tu aliado estratégico."
            ],
            icon: "Scale",
            image: "/images/arianna-can.jpg",
            imageAlt: "Arianna con fruta fresca",
            imagePosition: "right"
        },
        {
            id: "dieta",
            title: "La dieta es todo",
            subtitle: "Tu día a día, no un castigo temporal",
            content: [
                "Dieta no significa 'comer menos'. Dieta es todo lo que consumes en 24 horas.",
                "Tu dieta debe adaptarse a ti, no tú a ella. Vamos a redefinir el concepto:",
                "• Olvida los alimentos 'prohibidos' vs 'permitidos'.",
                "• La clave no es la perfección, es la consistencia.",
                "• Disfrutar de la comida local y de temporada es salud.",
                "La mejor dieta es aquella que puedes sostener el resto de tu vida sin sentir que estás sufriendo."
            ],
            icon: "Utensils",
            image: "/images/arianna-bag.jpg",
            imageAlt: "Arianna en el mercado",
            imagePosition: "left"
        },
        {
            id: "consulta",
            title: "La Consulta Nutricional",
            subtitle: "Escucha activa y empatía",
            content: [
                "Cuando entras a consulta, no busco darte un papel con un menú genérico.",
                "Busco entender quién eres. Tu historia clínica es importante, pero tu historia de vida lo es más.",
                "Analizamos juntos:",
                "• Tus horarios y nivel de estrés.",
                "• Tu relación emocional con la comida.",
                "• Tus gustos y cultura gastronómica.",
                "No vienes a ser juzgado, vienes a ser escuchado y comprendido."
            ],
            icon: "Stethoscope",
            image: "/images/arianna-consult.jpg",
            imageAlt: "Arianna en consulta con laptop",
            imagePosition: "right"
        },
        {
            id: "saciedad",
            title: "Los 3 Pilares",
            subtitle: "Saciedad, Equilibrio y Personalización",
            content: [
                // Content handled typically by the 3-card layout
                "Saciedad: Aprender a escuchar cuando tu cuerpo dice 'basta'.",
                "Equilibrio: Disfrutar de un postre sin culpa es parte de la salud.",
                "Personalización: No existe una fórmula única, solo existe TU fórmula."
            ],
            icon: "Activity",
            image: "/images/arianna-bio.png", // Using bio image for meditation/peace vibes
            imageAlt: "Bienestar y equilibrio",
            imagePosition: "center"
        },
        {
            id: "movimiento",
            title: "Movimiento y NEAT",
            subtitle: "Tu cuerpo pide acción",
            content: [
                "El ejercicio no es el precio que pagas por comer. Es la celebración de lo que tu cuerpo puede hacer.",
                "No necesitas 2 horas de gimnasio si no te gusta. Necesitas:",
                "• Mayor actividad física cotidiana (NEAT).",
                "• Encontrar una actividad que realmente disfrutes.",
                "• Moverte para sentirte fuerte, no para 'quemar' nada.",
                "Caminar, bailar, jugar con tu mascota... todo suma."
            ],
            icon: "Move",
            image: "/images/arianna-pointing.jpg", // Reusing active looking pose if possible, or generic
            imageAlt: "Arianna en movimiento",
            imagePosition: "full"
        },
        {
            id: "aprender",
            title: "Aprender a comer",
            subtitle: "Conocimiento es poder",
            content: [
                "Leer etiquetas no tiene que ser abrumador.",
                "Aprenderás a identificar:",
                "• Ingredientes reales vs. marketing engañoso.",
                "• La importancia de la proteína en cada comida.",
                "• Cómo armar un plato inteligente en cualquier restaurante.",
                "La autonomía nutricional es la meta final."
            ],
            icon: "Heart",
            image: "/images/label-closeup.jpg",
            imageAlt: "Leyendo etiquetas",
            imagePosition: "left"
        },
        {
            id: "footer-cta", // Section 8
            title: "Tu Camino Empieza Hoy",
            subtitle: "Consulta Online Gratuita",
            content: [
                "Gracias por leer.",
                "Si esto resonó contigo, estoy lista para acompañarte."
            ],
            icon: "Sparkles",
            image: null,
            imageAlt: "",
            imagePosition: "center"
        }
    ],
    footer: {
        thanks: "✨ Gracias por leer. Que este ebook sea el inicio de un camino más amable y consciente.",
        tagline: "@nutritionsays — La nutrición no empieza en el plato, empieza en ti."
    }
};
