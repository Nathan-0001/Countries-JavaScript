const container = document.getElementById('container')

for(const country of countries){
    let div = document.createElement('div')
    let divContain = document.createElement('div')
    let name = document.createElement('span')
    let population = document.createElement('span')
    let capital = document.createElement('span')

    name.textContent = country.name
    capital.textContent = country.capital
    population.textContent = country.population

    divContain.appendChild(name)
    divContain.appendChild(capital)
    divContain.appendChild(population)



    let divFlag = document.createElement('div')
    let flag = document.createElement('img')
    flag.src = country.flag
    divFlag.appendChild(flag)
    div.appendChild(divContain)
    div.appendChild(divFlag)
    


    container.appendChild(div)
}