const Avinash={
    Name:"Avinash",
    Age:20,
    Course:"B tech",
    Branch:"IT",
    thisIsIfun: function(){
        return console.log(this.Name)
    }
}

console.log(Avinash)
console.log(Avinash.thisIsIfun())
