const leapYear=(num)=>{
    if (num % 400 === 0){
        return true
    } else if (num % 100 === 0){
        return false
    } else if (num % 4 === 0){
        return true
    } else {
        return false
    }
}

const consecDays = (CDayNum,LDCCombo,year) => {
    
    if (leapYear(year) === true && LDCCombo === 229 && CDayNum === 1 ){
        //    ++user.consecutiveDays
        console.log("leap year Consec")

    } else if (leapYear(year) === true && LDCCombo === 229 && CDayNum === 1 ){
              //    ++user.consecutiveDays
              console.log("feb Consec")
    }
    else if (CDayNum === 1 && (LDCCombo === 131 ||
        LDCCombo === 331 || LDCCombo === 531 
        || LDCCombo === 731
        || LDCCombo === 831
        || LDCCombo === 1031
        || LDCCombo === 1231
        || LDCCombo === 430
        || LDCCombo === 630
        || LDCCombo === 930
        || LDCCombo === 1130)){
            console.log('its and end of month consec')
        //    ++user.consecutiveDays
        } else if (CDayNum == (LDCCombo + 1)){
           console.log("standard consecuful")
        //    ++user.consecutiveDays
       }  else {
        console.log("those Aint Consecutive at ALL")
       }
}

// console.log(leapYear(2014))
// console.log(2019 % 4)
console.log(consecDays(10,8,2020))