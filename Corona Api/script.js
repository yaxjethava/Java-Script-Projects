//for India details
let inden_case = document.getElementById("total-ind-case")
let inden_deth = document.getElementById("total-ind-deth")
let inden_recovered = document.getElementById("total-ind-recover")

// for state details
let state_name = document.getElementById("state-name")
let state_case = document.getElementById("total-state-case")
let state_deth = document.getElementById("total-state-deth")
let state_recovered = document.getElementById("total-state-recover")


//for india details
async function coronaData() {
    let fetchApi = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    let result = await fetchApi.json()

    inden_case.textContent = result.data.summary.confirmedCasesIndian
    inden_deth = result.data.summary.deaths
    inden_recovered = result.data.summary.discharged
    // inden_=result.data
}
async function coronaDtl(stateName) {
    let fetchApi = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    let result = await fetchApi.json()

    let dataArray = result.data.regional;
    
    let filterData = dataArray.filter(value => value.loc == stateName);

    state_name.textContent = filterData[0].loc
    state_case.textContent = filterData[0].confirmedCasesIndian
    state_deth.textContent = filterData[0].deaths
    state_recovered.textContent = filterData[0].deaths
    // inden_=result.data
}

coronaData();
// coronaDtl('Bihar')