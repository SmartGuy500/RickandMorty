//Wubba lubba dub dub

async function fetchData(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log(data)
    data.results.forEach(function(character){
        console.log(character.name)
    }) 

    data.results.forEach(function(character){
        console.log(character)

        const container = document.createElement('div')
        container.classList.add('container')
        container.innerHTML= `
         <h1> ${character.name}</h1>
         <h2> ${character.id}</h2>
         <h2>Species: ${character.species}</h2>
         <a id=CharacterDetails href="${character.url}" target="_blank">Details</a>
         <div class="image"><img src="${character.image}"/></div>
        `

        document.body.appendChild(container)
    })

}
fetchData()
