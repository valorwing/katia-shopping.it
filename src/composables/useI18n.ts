import { ref, computed } from 'vue'

export type Language = 'en' | 'uk' | 'it'

interface Translations {
  hero: {
    tagline: string
    shippingInfo: string
    shopNow: string
    followUs: string
  }
  prices: {
    title: string
    subtitle: string
    categories: {
      tshirts: string
      jeans: string
      dresses: string
      shirtsBlouses: string
      blazers: string
      skirts: string
      tracksuits: string
      bags: string
    }
  }
  brands: {
    title: string
    subtitle: string
    origins: {
      italy: string
      paris: string
      france: string
      newYork: string
      copenhagen: string
      losAngeles: string
    }
  }
  contact: {
    title: string
    subtitle: string
    whatsapp: {
      title: string
      description: string
      button: string
    }
    instagram: {
      title: string
      description: string
      button: string
    }
    shipping: {
      title: string
      regions: {
        europe: string
        ukraine: string
        kazakhstan: string
        italy: string
      }
    }
  }
  footer: {
    description: string
    contactTitle: string
    whatsapp: string
    instagram: string
    shippingTitle: string
    regions: {
      europe: string
      ukraine: string
      kazakhstan: string
      italy: string
    }
    copyright: string
  }
  languages: {
    en: string
    uk: string
    it: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      tagline: 'Authentic Italian Designer Fashion at Wholesale Prices',
      shippingInfo: 'Worldwide Shipping • Europe • Ukraine • Kazakhstan • Italy',
      shopNow: 'Shop Now',
      followUs: 'Follow Us'
    },
    prices: {
      title: 'Our Price Ranges',
      subtitle: 'Premium brands at wholesale prices',
      categories: {
        tshirts: 'T-Shirts',
        jeans: 'Jeans',
        dresses: 'Dresses',
        shirtsBlouses: 'Shirts & Blouses',
        blazers: 'Blazers',
        skirts: 'Skirts',
        tracksuits: 'Tracksuits',
        bags: 'Bags'
      }
    },
    brands: {
      title: 'Featured Brands',
      subtitle: 'Curated selection from the world\'s finest fashion houses',
      origins: {
        italy: 'Made in Italy',
        paris: 'Paris',
        france: 'France',
        newYork: 'New York',
        copenhagen: 'Copenhagen',
        losAngeles: 'Los Angeles'
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to elevate your wardrobe?',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Chat with us directly for personalized styling advice',
        button: 'Message Us'
      },
      instagram: {
        title: 'Instagram',
        description: 'Follow for daily style inspiration and new arrivals',
        button: 'Follow Us'
      },
      shipping: {
        title: 'Worldwide Shipping Available',
        regions: {
          europe: '🇪🇺 Europe',
          ukraine: '🇺🇦 Ukraine',
          kazakhstan: '🇰🇿 Kazakhstan',
          italy: '🇮🇹 Italy'
        }
      }
    },
    footer: {
      description: 'Authentic Italian designer fashion at wholesale prices',
      contactTitle: 'Contact',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      shippingTitle: 'Shipping',
      regions: {
        europe: 'Europe',
        ukraine: 'Ukraine',
        kazakhstan: 'Kazakhstan',
        italy: 'Italy'
      },
      copyright: '© 2025 katia-shopping.it • All rights reserved'
    },
    languages: {
      en: 'English',
      uk: 'Українська',
      it: 'Italiano'
    }
  },
  uk: {
    hero: {
      tagline: 'Автентична італійська дизайнерська мода за оптовими цінами',
      shippingInfo: 'Доставка по всьому світу • Європа • Україна • Казахстан • Італія',
      shopNow: 'Купити зараз',
      followUs: 'Підписатися'
    },
    prices: {
      title: 'Наші ціни',
      subtitle: 'Преміум бренди за оптовими цінами',
      categories: {
        tshirts: 'Футболки',
        jeans: 'Джинси',
        dresses: 'Сукні',
        shirtsBlouses: 'Сорочки та блузки',
        blazers: 'Піджаки',
        skirts: 'Спідниці',
        tracksuits: 'Спортивні костюми',
        bags: 'Сумки'
      }
    },
    brands: {
      title: 'Рекомендовані бренди',
      subtitle: 'Вибрана колекція від найкращих модних будинків світу',
      origins: {
        italy: 'Зроблено в Італії',
        paris: 'Париж',
        france: 'Франція',
        newYork: 'Нью-Йорк',
        copenhagen: 'Копенгаген',
        losAngeles: 'Лос-Анджелес'
      }
    },
    contact: {
      title: 'Зв\'яжіться з нами',
      subtitle: 'Готові оновити свій гардероб?',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Спілкуйтеся з нами безпосередньо для персональних стильових порад',
        button: 'Написати нам'
      },
      instagram: {
        title: 'Instagram',
        description: 'Підписуйтеся на щоденне натхнення стилю та новинки',
        button: 'Підписатися'
      },
      shipping: {
        title: 'Доставка по всьому світу',
        regions: {
          europe: '🇪🇺 Європа',
          ukraine: '🇺🇦 Україна',
          kazakhstan: '🇰🇿 Казахстан',
          italy: '🇮🇹 Італія'
        }
      }
    },
    footer: {
      description: 'Автентична італійська дизайнерська мода за оптовими цінами',
      contactTitle: 'Контакти',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      shippingTitle: 'Доставка',
      regions: {
        europe: 'Європа',
        ukraine: 'Україна',
        kazakhstan: 'Казахстан',
        italy: 'Італія'
      },
      copyright: '© 2025 katia-shopping.it • Всі права захищені'
    },
    languages: {
      en: 'English',
      uk: 'Українська',
      it: 'Italiano'
    }
  },
  it: {
    hero: {
      tagline: 'Moda italiana autentica a prezzi all\'ingrosso',
      shippingInfo: 'Spedizione mondiale • Europa • Ucraina • Kazakistan • Italia',
      shopNow: 'Acquista ora',
      followUs: 'Seguici'
    },
    prices: {
      title: 'Le nostre fasce di prezzo',
      subtitle: 'Brand premium a prezzi all\'ingrosso',
      categories: {
        tshirts: 'T-Shirt',
        jeans: 'Jeans',
        dresses: 'Vestiti',
        shirtsBlouses: 'Camicie e Bluse',
        blazers: 'Blazer',
        skirts: 'Gonne',
        tracksuits: 'Tute sportive',
        bags: 'Borse'
      }
    },
    brands: {
      title: 'Brand in evidenza',
      subtitle: 'Selezione curata dalle migliori case di moda del mondo',
      origins: {
        italy: 'Made in Italy',
        paris: 'Parigi',
        france: 'Francia',
        newYork: 'New York',
        copenhagen: 'Copenaghen',
        losAngeles: 'Los Angeles'
      }
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Pronto a elevare il tuo guardaroba?',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Chatta direttamente con noi per consigli di stile personalizzati',
        button: 'Scrivici'
      },
      instagram: {
        title: 'Instagram',
        description: 'Segui per ispirazione quotidiana di stile e nuovi arrivi',
        button: 'Seguici'
      },
      shipping: {
        title: 'Spedizione mondiale disponibile',
        regions: {
          europe: '🇪🇺 Europa',
          ukraine: '🇺🇦 Ucraina',
          kazakhstan: '🇰🇿 Kazakistan',
          italy: '🇮🇹 Italia'
        }
      }
    },
    footer: {
      description: 'Moda italiana autentica a prezzi all\'ingrosso',
      contactTitle: 'Contatto',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      shippingTitle: 'Spedizione',
      regions: {
        europe: 'Europa',
        ukraine: 'Ucraina',
        kazakhstan: 'Kazakistan',
        italy: 'Italia'
      },
      copyright: '© 2025 katia-shopping.it • Tutti i diritti riservati'
    },
    languages: {
      en: 'English',
      uk: 'Українська',
      it: 'Italiano'
    }
  }
}

const currentLanguage = ref<Language>('en')

export function useI18n() {
  const t = computed(() => translations[currentLanguage.value])
  
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
  }
  
  const getCurrentLanguage = () => currentLanguage.value
  
  return {
    t,
    setLanguage,
    getCurrentLanguage,
    languages: ['en', 'uk', 'it'] as Language[]
  }
}
