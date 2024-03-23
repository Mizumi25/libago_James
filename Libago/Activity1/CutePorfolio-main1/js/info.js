const func1 = (a, b, c)  => {
    let leftDiv = document.createElement("div")
    leftDiv.innerHTML = `

              <h1 class="h1 hero-title">${a}</h1>
              <p class="hero-text">${b}</p>
              <br/>
              <br/>
              <br/>


   `
    
    leftDiv.className = "wrapper h2"


    return leftDiv;
}



export { func1 }