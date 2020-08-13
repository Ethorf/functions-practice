function solution(str, ending){
    let strArr = str.split('')
    let endArr = ending.split('')
    let diff
    if (endArr.length > strArr.length){
        //  diff = endArr.length - strArr.length
        //  endArr.splice(0,diff)
        return false
    } else if (endArr.length < strArr.length) {
         diff = strArr.length - endArr.length
         strArr.splice(0,diff) 
    }
    return endArr.join('') == strArr.join('')
  }

  console.log(solution('ails','fails'))