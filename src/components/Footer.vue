<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-title">katia-shopping.it</h3>
          <p class="footer-description luxury-text">
            {{ t.footer.description }}
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-section">
            <h4>{{ t.footer.contactTitle }}</h4>
            <a :href="whatsappLink" class="footer-link">{{ t.footer.whatsapp }}</a>
            <a :href="instagramLink" target="_blank" class="footer-link">{{ t.footer.instagram }}</a>
          </div>

          <div class="footer-section">
            <h4>{{ t.footer.shippingTitle }}</h4>
            <span class="footer-text">{{ t.footer.regions.europe }}</span>
            <span class="footer-text">{{ t.footer.regions.ukraine }}</span>
            <span class="footer-text">{{ t.footer.regions.kazakhstan }}</span>
            <span class="footer-text">{{ t.footer.regions.italy }}</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">{{ t.footer.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const whatsappLink = 'https://wa.me/393662536166'
const instagramLink = 'https://www.instagram.com/katia_shopping.it/'
</script>

<style scoped>
.footer {
  background-color: var(--charcoal);
  color: white;
  padding: 50px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-brand {
  max-width: 300px;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 300;
  letter-spacing: 0.02em;
}

.footer-description {
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 400;
  color: var(--gold);
}

.footer-link {
  display: block;
  margin-bottom: 8px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  font-size: 0.9rem;
}

.footer-link:hover {
  opacity: 1;
  color: var(--gold);
}

.footer-text {
  display: block;
  margin-bottom: 8px;
  opacity: 0.8;
  font-size: 0.9rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
