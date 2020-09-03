let str1 = 'zomgoomog';

const naiveStringSearch = (string, target) => {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === target[0]) {
			for (let j = 0; j < target.length; j++) {
                let shortArr = []
                if
			}
		}
	}
	return count;
};

function naiveStringSearch2(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            //ooo okay so i + j has to do with keeping the inner loop proportional
            //my approach was more to only check if there was a match in the first place, but that doesnt need to be the case 
            
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}


// you can use break in a for loop
// console.log(naiveStringSearch(str1, 'omg'));

