<template>
  <section class="price-section">
    <div class="container">
      <h2 class="section-title">{{ t.prices.title }}</h2>
      <p class="section-subtitle luxury-text">{{ t.prices.subtitle }}</p>

      <div class="price-grid">
        <div
          v-for="item in priceItems"
          :key="item.categoryKey"
          class="price-card"
        >
          <div class="price-icon">{{ item.icon }}</div>
          <h3 class="category-name">{{ item.category }}</h3>
          <div class="price-range">{{ item.priceRange }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

const priceItems = computed(() => [
  {
    categoryKey: "tshirts" as const,
    category: t.value.prices.categories.tshirts,
    priceRange: "6-20€",
    icon: "👕",
  },
  {
    categoryKey: "jeans" as const,
    category: t.value.prices.categories.jeans,
    priceRange: "13-25€",
    icon: "👖",
  },
  {
    categoryKey: "dresses" as const,
    category: t.value.prices.categories.dresses,
    priceRange: "15-30€",
    icon: "👗",
  },
  {
    categoryKey: "shirtsBlouses" as const,
    category: t.value.prices.categories.shirtsBlouses,
    priceRange: "10-25€",
    icon: "👔",
  },
  {
    categoryKey: "blazers" as const,
    category: t.value.prices.categories.blazers,
    priceRange: "18-35€",
    icon: "🧥",
  },
  {
    categoryKey: "skirts" as const,
    category: t.value.prices.categories.skirts,
    priceRange: "11-25€",
    icon: "👜",
  },
  {
    categoryKey: "tracksuits" as const,
    category: t.value.prices.categories.tracksuits,
    priceRange: "25-35€",
    icon: "🏃‍♀️",
  },
  {
    categoryKey: "bags" as const,
    category: t.value.prices.categories.bags,
    priceRange: "20-45€",
    icon: "👛",
  },
]);
</script>

<style scoped>
.price-section {
  padding: 80px 0;
  background-color: var(--champagne);
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

.price-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.price-card {
  background: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid var(--dusty-rose);
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.price-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.category-name {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--charcoal);
  font-weight: 400;
}

.price-range {
  font-size: 1.5rem;
  color: var(--accent-coral);
  font-weight: 600;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .price-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .price-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .price-card {
    padding: 30px 15px;
  }
}

@media (max-width: 480px) {
  .price-grid {
    grid-template-columns: 1fr;
  }
}
</style>
