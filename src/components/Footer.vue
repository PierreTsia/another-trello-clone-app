<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSettings } from '/@/store/settings.store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Footer',
  setup() {
    const { t, availableLocales, locale } = useI18n();
    const settings = useSettings();
    const { toggleDark } = settings;
    const { isDark } = storeToRefs(settings);

    const toggleLocales = () => {
      const locales = availableLocales;
      locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
    };

    return {
      t,
      toggleDark,
      toggleLocales,
      isDark,
    };
  },
});
</script>

<template>
  <footer class="text-center py-2">
    <ul class="flex justify-between w-1/3 mx-auto mb-8">
      <li class="cursor-pointer text-2xl">
        <a
          href="#"
          @click="toggleLocales"
          class="
            footer-link
            text-cyan-700
            hover:text-cyan-500
            dark:text-cyan-500 dark:hover:text-cyan-300
          "
          :title="t('toggle_language')"
        >
          <i class="iconify" :data-icon="'ant-design:translation-outlined'" />
        </a>
      </li>
      <li class="cursor-pointer text-2xl">
        <a
          href="#"
          @click="toggleDark()"
          class="
            text-cyan-700
            hover:text-cyan-500
            dark:text-cyan-500 dark:hover:text-cyan-300
          "
          :title="t('toggle_theme')"
        >
          <i class="iconify" :data-icon="'mdi:theme-light-dark'" />
        </a>
      </li>
      <li class="cursor-pointer text-2xl">
        <a
          href="https://github.com/alvarosaburido"
          rel="noreferrer"
          target="_blank"
          class="
            text-cyan-700
            hover:text-cyan-500
            dark:text-cyan-500 dark:hover:text-cyan-300
          "
          title="Github repo"
        >
          <i class="iconify" :data-icon="'mdi:github'" />
        </a>
      </li>
    </ul>

    <span class="text-xs dark:text-white"
      >{{ t('made_by') }}
      <a
        class="footer-link text-cyan-400 hover:text-cyan-500"
        href="https://github.com/PierreTsia"
        rel="noreferrer"
        target="_blank"
        >Pierre Tsiakkaros</a
      ></span
    >
  </footer>
</template>

<style>
a,
.footer-link {
  @apply transition-all ease-out duration-100;
}

.footer-link {
  opacity: 0.8;
}
</style>
