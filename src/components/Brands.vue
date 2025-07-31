<template>
  <section class="brands-section">
    <div class="container">
      <h2 class="section-title">{{ t.brands.title }}</h2>
      <p class="section-subtitle luxury-text">{{ t.brands.subtitle }}</p>

      <div class="brands-grid">
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="brand-card"
        >
          <div class="brand-logo">{{ brand.initial }}</div>
          <h3 class="brand-name">{{ brand.name }}</h3>
          <p class="brand-origin">{{ brand.origin }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

interface Brand {
  name: string
  initial: string
  origin: string
  originKey: keyof typeof t.value.brands.origins
}

const brandsData: Brand[] = [
  { name: 'Brunello Cucinelli', initial: 'BC', origin: '', originKey: 'italy' },
  { name: 'Saint Laurent', initial: 'SL', origin: '', originKey: 'paris' },
  { name: 'Amina Muaddi', initial: 'AM', origin: '', originKey: 'italy' },
  { name: 'Dior', initial: 'D', origin: '', originKey: 'paris' },
  { name: 'Loro Piana', initial: 'LP', origin: '', originKey: 'italy' },
  { name: 'Bottega Veneta', initial: 'BV', origin: '', originKey: 'italy' },
  { name: 'Jacquemus', initial: 'J', origin: '', originKey: 'france' },
  { name: 'The Row', initial: 'TR', origin: '', originKey: 'newYork' },
  { name: 'Ganni', initial: 'G', origin: '', originKey: 'copenhagen' },
  { name: 'Staud', initial: 'S', origin: '', originKey: 'losAngeles' }
]

const brands = computed(() =>
  brandsData.map(brand => ({
    ...brand,
    origin: t.value.brands.origins[brand.originKey]
  }))
)
</script>

<style scoped>
.brands-section {
  padding: 80px 0;
  background: linear-gradient(45deg, var(--lavender) 0%, var(--soft-pink) 100%);
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

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto;
}

.brand-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px 15px;
  text-align: center;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.brand-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.brand-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--charcoal);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 auto 20px;
  letter-spacing: 0.05em;
}

.brand-name {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--charcoal);
  font-weight: 400;
  letter-spacing: 0.02em;
}

.brand-origin {
  font-size: 0.9rem;
  color: var(--accent-coral);
  font-style: italic;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .brands-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .brands-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }
  
  .brand-card {
    padding: 25px 10px;
  }
}

@media (max-width: 480px) {
  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
