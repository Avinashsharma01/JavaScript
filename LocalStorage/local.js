let form = document.querySelector("form")
console.log(form)
form.addEventListener('submit', (e) => {
    let name = e.target.name.value
    let email = e.target.email.value
    let number = e.target.number.value
    console.log(name, email, number)

    let getData = JSON.parse(localStorage.getItem('DATA')) ?? []
    getData.push(
        {
            'name':name,
            'email':email,
            'number':number
        }
    )
    console.log(getData)
    localStorage.setItem('DATA',JSON.stringify(getData))
    e.target.reset()
    Display()
    e.preventDefault()
})


let secondmain=document.querySelector(".secondmain")

let Display=()=>{
    let getData = JSON.parse(localStorage.getItem('DATA')) ?? []
    let totalData=''
    getData.forEach((item,i) => {
        // console.log(item)
        totalData+=`
        <div class="container">
        <span>&times;</span>
        <div class="name">
            <label for="name">Name</label>
            <h5>${item.name}</h5>
        </div>
        <div class="email">
            <label for="email">Email</label>
            <h5>${item.email}</h5>
        </div>

        <div class="monile">
            <label for="Number"></label>
            <h5>${item.number}</h5>
        </div>

    </div>`
    });

    console.log(totalData)
    secondmain.innerHTML=totalData
}






// let user = [
//     {
//         'Name': 'Avinash',
//         'Password': '1234556'
//     },
//     {
//         'Name': 'Soumya',
//         'Password': '456123'
//     }
// ]

// localStorage.setItem("Data", JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('Data')))