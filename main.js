const baseUrl = "http://localhost:5233/api/";

const app = Vue.createApp({
  data() {
    return {
      headline: "Automatisk Plantevander!",
      plantid: 68,
      plants: [],
      userid: 141,
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
    getAllPlantsFromUser() {
      uri = baseUrl+"Plant/getall/"+this.userid
      axios
        .get(uri)
        .then((response) => {
          console.log(response);
          response.data.forEach(plant => {
            this.plants.push(plant);
          })
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearPlants() {
      this.plants = []
    }
  },
  computed: {
    myComputed() {
      return "";
    },
  },
});
app.mount('#app')