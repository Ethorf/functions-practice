function humanReadable(seconds) {
//   let mins =  Math.floor(seconds <= 3599 ? seconds / 60 : Math.floor((seconds / 60 ) - Math.floor(seconds/3600 )* 60))
  let mins = Math.floor((seconds / 60) % 60)
  let hours=  Math.floor(seconds/3600)
  if (seconds < 360000){
    return `${hours < 10 ? 0 : ""}${hours}:${mins < 10 ? 0 : ""}${mins}:${seconds % 60 < 10 ? 0 : ""}${seconds % 60}`
  } else {
      return "Please enter a value lower than 360000"
  }
}

console.log(humanReadable(11500))


// console.log((8262 / 60 ))

// console.log(Math.floor(8262/3600 )* 60)

// console.log(Math.floor((8262 / 60 ) - Math.floor(8262/3600 )* 60))



//5940 seconds in 99 minutes
//3540 seconds in 59 minutes


    // let mins=  Math.floor(seconds/60 < 60 ? seconds % 60 : 0)
//   let mins =  Math.floor((seconds / 60) - 60)