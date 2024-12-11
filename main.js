const baseUrl = "http://localhost:5233/api/";

const app = Vue.createApp({
  data() {
    return {
      headline: "Automatisk Plantevander!",
      plantid: 68,
      plants: [],
    };
  },
  methods: {
    getPlantById() {
        uri = baseUrl+"Plant/"+this.plantid
      axios
        .get(uri)
        .then((response) => {
          console.log(response);
          this.plants.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    myComputed() {
      return "";
    },
  },
});
app.mount('#app')