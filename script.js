// Get
// axios.get(`https://reqres.in/api/users?page=2`)
// .then((res) => {console.log(res)})
// .catch((err) => console.log(err))

// Post

axios.post(`https://api.football-data.org/v4/competitions/2000/standings`, {
    name: "jhon",
    job: "Developer",
    'XSRF-TOKEN' : "e123f6969f2a4066a777c6b13fdebafd"
})
.then((res) => {console.log(res)})
.catch((err) => console.log(err))