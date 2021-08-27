interface User{
    email:string;
    id: number;
    name(params:number):void;
}

const user: User ={
    email : "dicxiemadrigal@gmail.com",
    id:  20,
    name(para:number):void{
        console.log("Hola Mundo")
    }
}
