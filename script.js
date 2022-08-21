let total = 6
function check(){
    let result = 47
}
console.log(result) //  undefined the variable result does not exisit outside the scope of check()
let  name = 'daniel'
function checkName(){
    let Name = 'emmanuel'
    console.log(Name) // output : emmanuel
    // you can only acess Name in this scope outside this scope is it undefined
}
console.log(name) // output : daniel
