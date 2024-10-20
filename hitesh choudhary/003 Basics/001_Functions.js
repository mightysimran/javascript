// function fn() {
//     console.log("Hello, world.")
// }

// fn // -> reference
// fn() // -> execution

// function add(number1, number2) { 
//     console.log(number1 + number2)
// }
// add(5, 5) 

function add(number1, number2){
    return number1 + number2
    console.log("Hello, world.") // -> This line doesn't execute 
}
// const res = add(5,5)
// console.log("Result: ", res);
// console.log(add(5,5))

function fn(name = "anon"){
    if(!name){
        console.log("Enter a valid username.");
        return
    }
    return `${name} just logged in.`
}

// console.log(fn("mightysimran"))