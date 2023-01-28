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
          await navigator.share(shareData);
      }
  },
})

const shareData = {
  title: 'NightlyCraft',
  text: '¡Un servidor de Minecraft donde todo puede pasar!',
  url: 'https://www.nightlycraft.gq'
}

app.use(vuetify).mount('#app')