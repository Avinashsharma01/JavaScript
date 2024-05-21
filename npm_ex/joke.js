
setInterval(function(){
    var getRandomJoke = require('one-liner-joke')
    console.log(getRandomJoke.getRandomJoke())
},2000)
console.log("Hello")

var figlet = require("figlet");

figlet("Jai Bajrang  Bali", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

