const container = document.getElementById('container')
const termInput = document.getElementById('term')

const createContent = (data) => {
    return `<div id="box">
                <div>
                    <span><b>Country:</b> ${data.name}</span>
                    <span><b>Capital:</b> ${data.capital}</span>
                    <span><b>Population:</b> ${data.population}</span>
                </div>
                <div>
                    <img src = '${data.flag}' />
                </div>
            </div>`
}

const createCountriesUI = (data) => { 
    let content = ''
    for(const country of data){
    content += createContent(country)
container.innerHTML = content
}
}
createCountriesUI(countries)
termInput.addEventListener('input', (e) => {
    filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(e.target.value.toLowerCase()))    
    container.innerHTML = ''
    createCountriesUI(filteredCountries)
})

//Short way
// `
// <div>
// <div>
//     <span>${country.name}</span>
//     <span>${country.capital}</span>
//     <span>${country.population}</span>
// </div>
// <div>
//     <img src = '${country.flag}' />
// </div>
// </div>
// `



// Long way
    // let div = document.createElement('div')
    // let divContain = document.createElement('div')
    // let name = document.createElement('span')
    // let population = document.createElement('span')
    // let capital = document.createElement('span')

    // name.textContent = country.name
    // capital.textContent = country.capital
    // population.textContent = country.population

    // divContain.appendChild(name)
    // divContain.appendChild(capital)
    // divContain.appendChild(population)



    // let divFlag = document.createElement('div')
    // let flag = document.createElement('img')
    // flag.src = country.flag
    // divFlag.appendChild(flag)
    // div.appendChild(divContain)
    // div.appendChild(divFlag)
    


    // container.appendChild(div)