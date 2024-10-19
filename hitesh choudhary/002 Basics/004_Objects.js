// const user = new Object()
const user = {}

user.username = "mightysimran"
user.location = "The Himalayas"

// console.log(user);

const anon = {
    email: "",
    desc: {
        name: {
            firstname: "anon",
            lastname: ""
        }
    }
}
// console.log(anon.desc.name.firstname);
// console.log(anon.desc?.name.firstname);

const o1 = {1: "a", 2: "b"}
const o2 = {3: "c", 4: "d"}
const o3 = {5: "e", 6: "f"}

// const o = {o1, o2} // -> {{1: "a", 2: "b"}, {3: "c", 4: "d"}}

// Note: const o = Object.assign(target, source(s)
e={}
// const o = Object.assign(e, o1, o2, o3) // -> {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

// const o = { ...o1, ...o2, ...o3 }

// console.log(o);

// console.log(Object.keys(user)); // -> ['username', 'location']
// console.log(Object.values(user)); // -> ['mightysimran', 'The Himalayas']
// console.log(Object.entries(user)); 

// console.log(user.hasOwnProperty('location')); // -> true