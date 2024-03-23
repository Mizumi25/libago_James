const func2 = ( data ) => {
    let rightDiv = document.createElement("div")
    rightDiv.innerHTML = `
              <img src="${data}" width="322" height="322" alt="" class="hero-banner">
    `

    rightDiv.className = "ClassR"


    return rightDiv;
}

export { func2 };