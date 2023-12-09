import { baseUrl,itens } from "../variables.js";

async function latesEvents(userName){
    const url = await fetch(`${baseUrl}/${userName}/received_events?per_page=${itens}`)
     return await url.json()
}

export { latesEvents }



 


