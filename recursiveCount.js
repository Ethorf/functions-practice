function recursiveCount(n){
    if (n <= 0) {
        return "Int must be positive"}
    else if ( n > 9){
        return "Counting Completed"
    } else return recursiveCount(n+1)
    
}

console.log(recursiveCount(3))