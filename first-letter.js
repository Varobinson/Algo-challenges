//Make a function that capitalizes first letter of every word in a 
//sentence

var str = "How can mirrors be real if our eyes aren't real";

function jadenCase (str){
const words = str.split(' ')
    for (let j = 0; j < words.length;j++){
        words[j] = words[j][0].toUpperCase() + words[j].slice(1)
        }
        return words.join(' ')
    }
console.log(jadenCase(str))
