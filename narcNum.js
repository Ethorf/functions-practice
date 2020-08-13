function narcissistic(value) {
   let narcNum = value.toString().split('').map(i => Number(i))
   let narcNumLogSum = narcNum.map(i => i ** narcNum.length)
   .reduce((acc, curr) => acc + curr)
   return narcNumLogSum === value
   
  }

  console.log(narcissistic(1634))
  