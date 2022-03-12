let overOrUnder = 69;

//if(overOrUnder > 50){console.log("Over 50")}else{console.log("under 50")}
if(overOrUnder<0 || overOrUnder>100){ 
    console.log("outside Third")
}else if(overOrUnder<33){console.log("Bottom Third")
}else if(overOrUnder>=33 && overOrUnder<=66){console.log("Middle Third")
} else{console.log("Top Third")}