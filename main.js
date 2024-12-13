const baseUrl = "http://localhost:5233/api/";

const app = Vue.createApp({
  data() {
    return {
      headline: "Automatisk Plantevander!",
      plantid: 68,
      plants: [],
      userid: 141,
      isLoggedIn: false,
      loggedInID: 0,
      uName: "",
      password: "",
    };
  },
  methods: {
    // getPlantById() {
    //     uri = baseUrl+"Plant/"+this.plantid
    //   axios
    //     .get(uri)
    //     .then((response) => {
    //       console.log(response);
    //       this.plants.push(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    getAllPlantsFromUser() {
      uri = baseUrl+"Plant/getall/"+this.loggedInID
      axios
        .get(uri)
        .then((response) => {
          this.plants = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logOut() {
      this.plants = [];
      isLoggedIn = false;
      loggedInID = 0;
    },
    logIn() {
    uri = baseUrl+"User/"+this.uName+"/"+this.password
      axios
      .get(uri)
      .then((response) =>{
        console.log(response);
        this.isLoggedIn = true;
        this.loggedInID = response.data
        console.log(this.loggedInID)
        this.plants = this.getAllPlantsFromUser(this.loggedInID)
        this.uName = "";
        this.password = "";
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  computed: {
    myComputed() {
      return "";
    },
  },
});
app.mount('#app')