import { useLocalStorage } from "@vueuse/core"

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      locale: useLocalStorage('locale', 'en'),
    }
  },
  getters: {
    getLocale: (state) => state.locale,
  },
  actions: {
    setLocale(value: string) {
      this.locale = value
    }
  }
})
