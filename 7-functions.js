function howLong(str, num){

    let sLength = str.length
    
    if(sLength>num){return true} else{return false}

}

function caller(str, num){
console.log(howLong(str, num))
}

caller("five", 5)
caller("fiverr", 5)