// const searchName = (value: string | null)=> {
//     if(value){
//         console.log('searching');
//     }
//     else {
//         console.log('there is nothing to search')
//     }
// }

// searchName(null);

// let anything: any;
// anything = 'name';
// anything = true;
// (anything as string)

// const kgTogm =(value: string | number)=>{
//     if(typeof  value === 'string'){

//     }
// }

// enum RequentType {
//     readData,
//     getData,
//     deleteData
    
// }


// let userName: any;

// userName = 'anis',
// userName = 123,
// userName = [10,20]

let users:object[];
users = []
let user1:{userName: string,age?:number};
 user1 = {userName:'anis',age:50 }
users.push(user1)
console.log(users)
//  

users = []
let user2:{userName: string,age?:number};
 user2 = {userName:'islam',age:50 }
users.push(user2)
console.log(users)