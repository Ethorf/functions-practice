const names1 = ["bob","flesho"]
const names0 = []
const names2 = ["bob0"]
const names3 = ["Bip","Flesho","Crenter"]
const names4 = ["Bipah","Fleshor","Crenter","Flinto"]



// function list(names){
//     return names.reduce(function(prev, current, index, array){
//       if (array.length === 0){
//         return "No one likes this"
//       }
//       else if (index === 0){
//         return current;
//       }
//       else if (index === array.length - 1){
//         return prev + ' & ' + current.name;
//       } 
//       else {
//         return prev + ', ' + current.name;
//       }
//     }, '');
//    }

function namesList(names){
    if (names.length === 0){
        return "No one likes this"
    }
    else if (names.length === 1){
        return `${names[0]} likes this`
    }

    else if (names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    }

    else if (names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }

    else if (names.length >= 4){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

   console.log(namesList(names4))