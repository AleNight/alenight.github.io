const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()
const app = createApp({
  data: () => ({
    alert: true,
    drawer: false,
    group: null,
    optionsDialog: false,
    snackbar: false,
    snackbarPropierties: {
      text: 'Texto por defecto',
      closeText: 'OK',
      timeout: 2000,
    }
  }),
  methods: {
    async shareUrl() {
      this.optionsDialog = false
      await navigator.share(shareData);
    },
    toggleNavigation() {
      if (this.drawer == false) {
        this.drawer = true
      } else {
        this.drawer = false
      }
    },
    async copySnackbar() {
      try {
        await navigator.clipboard.writeText("play.nightlycraft.idk");
        this.optionsDialog = false
        this.snackbarPropierties.text = "Dirección IP copiada al portapapeles"
        this.snackbar = true
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    },
  },
})

const shareData = {
  title: 'NightlyCraft',
  text: '¡Un servidor de Minecraft donde todo puede pasar!',
  url: 'https://alenight.github.io/nightlycraft'
}

app.use(vuetify).mount('#app')