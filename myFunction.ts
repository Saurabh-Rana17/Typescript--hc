export {}
// function addTwo(num:number):number{
    
//     return num+2
// }

// function toUpper(val:string){
//     return val.toUpperCase()||2
// }

// toUpper('3')

// const a = [2,3,5,63,5,5,2,'hdu']
// a.map(e=>e)
// console.log(addTwo(7))
// export {}

// function createUser({name:number,no:string}):{a:number,b:boolean}{
//     return {a:1,b:true}
// }

// createUser({name:32,no:3})

type User = {
    name:string
    email:string
    isActive:boolean
    readonly id :string
    test?:number
}

function createUser(user:User){
    let u:User = { email:'ds',isActive:true,name:'ds',id:'dsudus'}
    return u
}
let user = 'ds'
createUser({name :'',email:'ds',isActive:true,id:'dsgh'})
const newUser:User = {
    email:'',
    id:'',
    isActive:false,
    name:''
}
newUser.email ='dhs'
console.log(newUser.test)
