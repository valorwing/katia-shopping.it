<template>
  <div class="language-switcher">
    <div class="language-dropdown">
      <button @click="toggleDropdown" class="language-button">
        <span class="current-lang">{{ t.languages[getCurrentLanguage()] }}</span>
        <span class="dropdown-arrow" :class="{ open: isOpen }">▼</span>
      </button>
      
      <div v-if="isOpen" class="language-options">
        <button
          v-for="lang in languages"
          :key="lang"
          @click="changeLanguage(lang)"
          :class="['language-option', { active: getCurrentLanguage() === lang }]"
        >
          {{ t.languages[lang] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n, type Language } from '../composables/useI18n'

const { t, setLanguage, getCurrentLanguage, languages } = useI18n()
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (lang: Language) => {
  setLanguage(lang)
  isOpen.value = false
}
</script>

<style scoped>
.language-switcher {
  position: relative;
}

.language-dropdown {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--dusty-rose);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: var(--charcoal);
}

.language-button:hover {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.current-lang {
  font-weight: 500;
}

.dropdown-arrow {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.language-options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid var(--dusty-rose);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 4px;
  overflow: hidden;
}

.language-option {
  display: block;
  width: 100%;
  padding: 10px 12px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--charcoal);
  transition: background-color 0.2s ease;
}

.language-option:hover {
  background-color: var(--soft-pink);
}

.language-option.active {
  background-color: var(--lavender);
  font-weight: 500;
}

@media (max-width: 480px) {
  .language-button {
    padding: 6px 10px;
    font-size: 0.8rem;
  }
  
  .language-option {
    padding: 8px 10px;
    font-size: 0.8rem;
  }
}
</style>
