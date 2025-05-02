{

// function userInfo(id:number|string){
//     console.log(id)
// }

// userInfo(101);
// userInfo("101");

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
}

const student1: Student = {
    name: 'mezba',
    age: 50,
    gender:'male',
    contactNo: '017555555'
}

const student2: Student = {
    name: 'mir',
    age: 40,
    gender:'male',
    contactNo: '017555555'
}



type UserName = string;
type isAdmin = boolean;
const username: UserName = "Parsian";
const isAdmin: isAdmin = true;



type Add = (num1:number,num2:number)=> number

const add = (num1,num2)=> num1+num2





    
}