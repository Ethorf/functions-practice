function list(names){
    //your code here
    if (names.length > 1){
        let namesArr = []
        names.forEach(item => namesArr.push(item.name))
        let namesArr2 = [namesArr[0]]
        for (let i = 1; i <= namesArr.length - 2; i++){
            namesArr2.push(` ${namesArr[i]}`)
        }
        return `${namesArr2.toString()} & ${namesArr[namesArr.length - 1]}`
    }

    else if (names.length === 1) {
        return names[0].name
    } else {
        return ""
    }



  }

console.log(list([{name: "jeff"},{name:"barth"},{name:"thetch"},{name:"thetchlinta"}]))


if ( x=== plus()){
    return y + plus()
}