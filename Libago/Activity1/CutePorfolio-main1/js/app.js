import { func1  } from "./info.js";
import { func2 } from "./img.js";



const cont = document.querySelector(".container")
const backkk = document.createElement("h2")
backkk.innerHTML = `<a href="../../index.html">Back</a>`;
backkk.className = "backk";

const data = {
    title: "James Rafty",
    btn: "contact",
    img: "./images/oo.jpg",
    para3: "Activity1",
}


const { title, para3, btn, img } = data

cont.append(func1(title, para3, btn))
cont.append(func2(img))






