<template>
  <section class="price-section">
    <div class="container">
      <h2 class="section-title">{{ t.prices.title }}</h2>
      <p class="section-subtitle luxury-text">{{ t.prices.subtitle }}</p>
      
      <div class="carousel-container">
        <div class="carousel-wrapper" ref="carouselWrapper">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
            <div 
              v-for="(item, index) in priceItems" 
              :key="item.categoryKey"
              class="carousel-slide"
            >
              <div class="price-card">
                <div class="price-image-container">
                  <img 
                    :src="item.image" 
                    :alt="item.category"
                    class="price-image"
                  />
                  <div class="price-overlay">
                    <div class="price-range">{{ item.priceRange }}</div>
                  </div>
                </div>
                <div class="price-content">
                  <h3 class="category-name">{{ item.category }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          @click="prevSlide" 
          class="carousel-button carousel-button-prev"
          :disabled="currentSlide === 0"
        >
          &#8249;
        </button>
        <button 
          @click="nextSlide" 
          class="carousel-button carousel-button-next"
          :disabled="currentSlide >= maxSlides"
        >
          &#8250;
        </button>
        
        <div class="carousel-dots">
          <button
            v-for="(dot, index) in totalDots"
            :key="index"
            @click="goToSlide(index)"
            :class="['carousel-dot', { active: index === currentSlide }]"
          >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

interface PriceItem {
  categoryKey: keyof typeof t.value.prices.categories
  category: string
  priceRange: string
  image: string
}

const priceItems = computed(() => [
  { 
    categoryKey: 'tshirts' as const, 
    category: t.value.prices.categories.tshirts, 
    priceRange: '6-20€', 
    image: 'https://images.pexels.com/photos/4063019/pexels-photo-4063019.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    categoryKey: 'jeans' as const, 
    category: t.value.prices.categories.jeans, 
    priceRange: '13-25€', 
    image: 'https://images.pexels.com/photos/5507226/pexels-photo-5507226.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    categoryKey: 'dresses' as const, 
    category: t.value.prices.categories.dresses, 
    priceRange: '15-30€', 
    image: 'https://images.pexels.com/photos/33218371/pexels-photo-33218371.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    categoryKey: 'shirtsBlouses' as const, 
    category: t.value.prices.categories.shirtsBlouses, 
    priceRange: '10-25€', 
    image: 'https://images.pexels.com/photos/20356189/pexels-photo-20356189.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    categoryKey: 'blazers' as const, 
    category: t.value.prices.categories.blazers, 
    priceRange: '18-35€', 
    image: 'https://images.pexels.com/photos/20264910/pexels-photo-20264910.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    categoryKey: 'skirts' as const, 
    category: t.value.prices.categories.skirts, 
    priceRange: '11-25€', 
    image: 'https://images.pexels.com/photos/27949868/pexels-photo-27949868.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    categoryKey: 'tracksuits' as const, 
    category: t.value.prices.categories.tracksuits, 
    priceRange: '25-35€', 
    image: 'https://images.pexels.com/photos/6983018/pexels-photo-6983018.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    categoryKey: 'bags' as const, 
    category: t.value.prices.categories.bags, 
    priceRange: '20-45€', 
    image: 'https://images.pexels.com/photos/27298414/pexels-photo-27298414.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
])

const currentSlide = ref(0)
const carouselWrapper = ref<HTMLElement>()
const slidesPerView = ref(3)
const slideWidth = computed(() => 100 / slidesPerView.value)
const maxSlides = computed(() => Math.max(0, priceItems.value.length - slidesPerView.value))
const totalDots = computed(() => maxSlides.value + 1)

const updateSlidesPerView = () => {
  if (window.innerWidth <= 480) {
    slidesPerView.value = 1
  } else if (window.innerWidth <= 768) {
    slidesPerView.value = 2
  } else {
    slidesPerView.value = 3
  }
}

const nextSlide = () => {
  if (currentSlide.value < maxSlides.value) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Auto-play functionality
let autoPlayInterval: NodeJS.Timeout | null = null

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    if (currentSlide.value >= maxSlides.value) {
      currentSlide.value = 0
    } else {
      nextSlide()
    }
  }, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
  startAutoPlay()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView)
  stopAutoPlay()
})
</script>

<style scoped>
.price-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--champagne) 0%, var(--soft-pink) 100%);
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10px;
  color: var(--charcoal);
  font-weight: 300;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 60px;
  color: var(--charcoal);
  opacity: 0.7;
}

.carousel-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.carousel-wrapper {
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.carousel-slide {
  flex: 0 0 33.333%;
  padding: 0 15px;
}

.price-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  height: 100%;
}

.price-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.price-image-container {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.price-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.price-card:hover .price-image {
  transform: scale(1.1);
}

.price-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.price-card:hover .price-overlay {
  opacity: 1;
}

.price-range {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.02em;
}

.price-content {
  padding: 25px 20px;
  text-align: center;
}

.category-name {
  font-size: 1.4rem;
  color: var(--charcoal);
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.02em;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 1.5rem;
  color: var(--charcoal);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.carousel-button:hover:not(:disabled) {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.carousel-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.carousel-button-prev {
  left: 10px;
}

.carousel-button-next {
  right: 10px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot:hover,
.carousel-dot.active {
  background: var(--accent-coral);
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .price-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .carousel-container {
    padding: 0 40px;
  }
  
  .carousel-slide {
    flex: 0 0 50%;
  }
  
  .price-image-container {
    height: 250px;
  }
  
  .carousel-button {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    padding: 0 30px;
  }
  
  .carousel-slide {
    flex: 0 0 100%;
    padding: 0 10px;
  }
  
  .price-image-container {
    height: 350px;
  }
  
  .category-name {
    font-size: 1.2rem;
  }
  
  .price-range {
    font-size: 1.5rem;
  }
}
</style>
