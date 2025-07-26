//? curring function


function carrying(a){
    return function(b){
        return function (c){
            return a +b +c
        }
    }
}


const result = carrying(5)(10)(15)

console.log(result)