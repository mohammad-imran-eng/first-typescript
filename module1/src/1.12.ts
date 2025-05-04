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

// let users:object[];
// users = []

// type User= {userName: string,age?:number};

// let user1:User
//  user1 = {userName:'anis',age:50 }
// users.push(user1)


// let user2:{userName: string,age?:number};
//  user2 = {userName:'islam',age:50 }
// users.push(user2)
// console.log(users)


// type RequestType = "GET" | "POST";
// let getRequest: RequestType;
// getRequest = "GET";
// getRequest = "POST"

// function requestHandler (requestType: RequestType){
//     console.log(requestType);
// }
// requestHandler("GET")

// class User {
//    userName: string;
//    age: number
   
//    constructor(userName:string,age:number){
//         this.userName = userName;
//         this.age = age
//    }
//    display(): void{
//     console.log(this.userName);
//     console.log(this.age);
//    }
// }

// const user1 = new User("anisul",50);
// user1.display()
// const user2 = new User("Mahtab",30);
// user2.display()

// class User {
//    userName: string;
//    age: number
   
//    constructor(userName:string,age:number){
//         this.userName = userName;
//         this.age = age
//    }
//    display(): void{
//     console.log(this.userName);
//     console.log(this.age);
//    }
// }

// class Student extends User {
//     studentId:number;
//     constructor(userName:string,age:number,studetId:number){
//         super(userName,age);
//         this.studentId = studetId;
//     }
// }
// let students = new Student("Anisul",32);

// const user1 = new User("anisul",50);
// user1.display()
// const user2 = new User("Mahtab",30);
// user2.display()

// type assertion

// let anything: any;
// anything = "next level web developer";
// (anything as number)

// const kgTogm = (value:string | number) : string| number| undefined=> {
//     if(typeof value === "string"){
//         const convertedValue = parseFloat(value)*1000;
//         return `the converted value is : ${convertedValue}`
//     }
//     else if(typeof value === "number"){
//         return value*1000
//     }
// }

// const result1 = kgTogm(1000) as number
// const result2 = kgTogm("1000") as string


// type customError = {
//     message: string
// }

// try{

// }catch(error){
//     console.log((error as customError).message)
// }

// type User1 = {
//     name: string;
//     age: number;
// }

// interface User2 {
//      name: string;
//      age: number;
// }

// const user1: User1= {
//     name:"imtsn",
//     age:50
// }


// type rollNumber = number 


// type User1 = {
//     name: string;
//     age: number;
// }

// interface User2 {
//     name:string;
//     age:number;
// }

// const user2 = {
//     name:"Imran",
//     age:50
// }

// const user1 = {
//     name:"Imran",
//     age:50
// }

// type UserwithRole = User1 & {role: string}

// const user3: UserwithRole = {
//     name:"Imran",
//     age:50,
//     role: "Engineer"
// }

// type Roll1 = number[];
// const rollNumber1:Roll1 = [1,22,3,3,4]

// interface Roll2 {
//     [index: number]:number
// }

// type Add = (num1:number,num2:number)=> number;

// const add: Add(num1,num2)=>num1+num2;
{









// const rollNumber : number[] = [1,2,3,4];
// const mentors: Array<string>=['mr x','mr x','mr y']
// const bolArray: boolean[]= [true,false,true]








// const name:string = "imran"
// const age:number = 50.76
// const isAdmin = true;

// const nameArr:number[] = [1,2,3,4]

// const userID:number = 101



















}