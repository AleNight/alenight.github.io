const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()
const app = createApp({
  data: () => ({
    alert: true,
    drawer: false,
    group: null,
    dialog: false,
  }),
  methods: {
      async shareUrl() {
          this.dialog = false
          await navigator.share(shareData);
      },
      toggleNavigation() {
        if (this.drawer == false) {
          this.drawer = true
        } else {
          this.drawer = false
        }
    }
  },
})

const shareData = {
  title: 'NightlyCraft',
  text: '¡Un servidor de Minecraft donde todo puede pasar!',
  url: 'https://alenight.github.io/nightlycraft'
}

app.use(vuetify).mount('#app')