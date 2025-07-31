<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="language-switcher-container">
      <LanguageSwitcher />
    </div>
    <div class="hero-content">
      <div class="brand-image">
        <img :src="ownerImage" alt="Katia - Founder" class="owner-photo" />
      </div>
      <div class="hero-text">
        <h1 class="brand-title">katia-shopping.it</h1>
        <p class="tagline luxury-text">{{ t.hero.tagline }}</p>
        <p class="shipping-info">{{ t.hero.shippingInfo }}</p>
        <div class="hero-cta">
          <a :href="whatsappLink" class="cta-button primary">{{ t.hero.shopNow }}</a>
          <a :href="instagramLink" target="_blank" class="cta-button secondary">{{ t.hero.followUs }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const ownerImage = 'https://cdn.builder.io/api/v1/image/assets%2F0035610295eb4febb3692cec0c7733cf%2Faa8b4205d1d24b388b2a01f18a750842?format=webp&width=800'
const whatsappLink = 'https://wa.me/393662536166'
const instagramLink = 'https://www.instagram.com/katia_shopping.it/'
</script>

<style scoped>
.hero {
  min-height: 80vh;
  background: linear-gradient(135deg, var(--soft-pink) 0%, var(--lavender) 50%, var(--sage-green) 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1000px;
  padding: 40px 20px;
}

.brand-image {
  flex: 1;
  text-align: center;
}

.owner-photo {
  width: 320px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 3px solid var(--champagne);
}

.hero-text {
  flex: 1;
  text-align: left;
}

.brand-title {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: var(--charcoal);
  letter-spacing: 0.02em;
}

.tagline {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--charcoal);
  opacity: 0.8;
}

.shipping-info {
  font-size: 1rem;
  margin-bottom: 30px;
  color: var(--accent-coral);
  font-weight: 500;
}

.hero-cta {
  display: flex;
  gap: 20px;
}

.cta-button {
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cta-button.primary {
  background-color: var(--charcoal);
  color: white;
}

.cta-button.primary:hover {
  background-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--charcoal);
  border: 2px solid var(--charcoal);
}

.cta-button.secondary:hover {
  background-color: var(--charcoal);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .brand-title {
    font-size: 2.5rem;
  }

  .owner-photo {
    width: 280px;
    height: 350px;
  }

  .hero-cta {
    justify-content: center;
    flex-wrap: wrap;
  }
}

.language-switcher-container {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

@media (max-width: 480px) {
  .brand-title {
    font-size: 2rem;
  }

  .owner-photo {
    width: 240px;
    height: 300px;
  }

  .cta-button {
    padding: 12px 24px;
    font-size: 0.9rem;
  }

  .language-switcher-container {
    top: 15px;
    right: 15px;
  }
}
</style>
