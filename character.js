const container = document.querySelector('.character')

const person =localStorage.getItem('character')
const character = JSON.parse(person)
console.log(character)

container.innerHTML = ` 
 <div><img src="${character.image}"/></div>
 <h2>${character.name}</h2>
 <h3>${character.location.name}</h3>
 ${character.episode.map((episodeIndividual)=>{
    return `<p>${episodeIndividual}</p>`
 })}    
`