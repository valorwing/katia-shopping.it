<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">{{ t.contact.title }}</h2>
      <p class="section-subtitle luxury-text">{{ t.contact.subtitle }}</p>

      <div class="contact-grid">
        <div class="contact-card whatsapp">
          <div class="contact-icon">💬</div>
          <h3 class="contact-title">{{ t.contact.whatsapp.title }}</h3>
          <p class="contact-description">{{ t.contact.whatsapp.description }}</p>
          <a :href="whatsappLink" class="contact-button whatsapp-btn">
            {{ t.contact.whatsapp.button }}
          </a>
          <p class="contact-number">+39 366 253 6166</p>
        </div>

        <div class="contact-card instagram">
          <div class="contact-icon">📸</div>
          <h3 class="contact-title">{{ t.contact.instagram.title }}</h3>
          <p class="contact-description">{{ t.contact.instagram.description }}</p>
          <a :href="instagramLink" target="_blank" class="contact-button instagram-btn">
            {{ t.contact.instagram.button }}
          </a>
          <p class="contact-handle">@katia_shopping.it</p>
        </div>
      </div>

      <div class="shipping-info">
        <h3 class="shipping-title">{{ t.contact.shipping.title }}</h3>
        <div class="shipping-regions">
          <span class="region">{{ t.contact.shipping.regions.europe }}</span>
          <span class="region">{{ t.contact.shipping.regions.ukraine }}</span>
          <span class="region">{{ t.contact.shipping.regions.kazakhstan }}</span>
          <span class="region">{{ t.contact.shipping.regions.italy }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const whatsappLink = 'https://wa.me/393662536166'
const instagramLink = 'https://www.instagram.com/katia_shopping.it/'
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background-color: var(--dusty-rose);
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

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 800px;
  margin: 0 auto 60px;
}

.contact-card {
  background: white;
  padding: 40px 30px;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.contact-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--charcoal);
  font-weight: 400;
}

.contact-description {
  font-size: 1rem;
  margin-bottom: 25px;
  color: var(--charcoal);
  opacity: 0.8;
  line-height: 1.5;
}

.contact-button {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  margin-bottom: 15px;
}

.whatsapp-btn {
  background-color: #25d366;
  color: white;
}

.whatsapp-btn:hover {
  background-color: #1db954;
  transform: scale(1.05);
}

.instagram-btn {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
}

.instagram-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.contact-number,
.contact-handle {
  font-size: 0.9rem;
  color: var(--charcoal);
  opacity: 0.6;
  font-style: italic;
}

.shipping-info {
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.shipping-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--charcoal);
  font-weight: 400;
}

.shipping-regions {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.region {
  font-size: 1rem;
  color: var(--charcoal);
  font-weight: 500;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .shipping-regions {
    gap: 20px;
  }
  
  .region {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: 30px 20px;
  }
  
  .shipping-regions {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
