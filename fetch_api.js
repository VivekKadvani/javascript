// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response) => () =>{return response.json()}).then((response)=>{console.log(response)})


fetch("https://api.publicapis.org/entries")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })