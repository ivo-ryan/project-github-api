import { baseUrl } from "../variables.js";

const loader = document.querySelector("#loader")

const loaderToggler = () => {
    loader.classList.toggle("hide")
}

async function getUser(userName) {
    loaderToggler()
    const response = await fetch(`${baseUrl}/${userName}`)
    loaderToggler()
    return await response.json()
   
};

export {getUser}