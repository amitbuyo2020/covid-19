let apiURL = 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats'
let deathCount = document.getElementById('death');
let recoverCount = document.getElementById('recovered');
let infectedCount = document.getElementById('infected');

let d1 = document.querySelector('.updated-1');
let d2 = document.querySelector('.updated-2');
let d3 = document.querySelector('.updated-3');

function liveData() {
    fetch(apiURL)
    .then(response => {
        // console.log(response);
        return response.json()
    })
    .then(res => {
        deathCount.textContent = 'Deaths:' + ' ' + res.data.death_cases;
        d1.textContent = 'Last Updated:' + " " + res.data.last_update;
        d2.textContent = 'Last Updated:' + " " + res.data.last_update;
        d3.textContent = 'Last Updated:' + " " + res.data.last_update;
        recoverCount.textContent = 'Recovered:' + ' ' + res.data.recovery_cases;
        infectedCount.textContent = 'Infected:' + ' ' + res.data.total_cases; 
    }).catch(err => console.log(err))
}

liveData();