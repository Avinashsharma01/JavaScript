

async function hello(){
    let data= await fetch(`https://api.nationalize.io?name=nathaniel`)
    let finaldata= await data.json()
    console.log(finaldata)
}

hello()