function zero(x) { if (x){
    return x + 0
} else return 0}

    function two(x) { if (x){
        return  2 + x
        } else return 2}

function three() { return 3}
function four() { return 4}
function five() { return 5}
function six() {return 6}
function seven() {return 7}
function eight() {return 8}
function nine() {return 9}

// function plus(x,y) {return x + y}
// function minus(x,y) {return x - y}
// function times(x,y) { return Math.floor(x * y)}
// function dividedBy(x,y) {return Math.floor(x / y)}

function plus(x) {
    let arr = ['+',x]
    return arr}
function minus(x) {return x}
function times(x) {}
function dividedBy(x) {}

function one(x,y='1') {

    // switch (x){
    //     case plus():
    //         return y + plus();
    //     break;
    //     case minus():
    //         return y - minus();
    //     break;
    //     case times():
    //         return Math.floor(y * times());
    //     break;
    //     case dividedBy():
    //         return Math.floor(y / dividedBy());
    //     break;
    //     default:
    //         return y
    // }

    if ( x[0] === "+"){
        return y + plus() 
        // return "goose bitch"
    } else {
        return y
    }
 
}

console.log(one(plus(one())))

// console.log(plus(1))

//next steps. Maybe try using an eval statement or someshit