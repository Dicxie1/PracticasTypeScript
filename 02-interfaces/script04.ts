enum SexoP {
    Masculino= "Masculino", 
    Femenino = "Femenino"
}
interface Pearson {
    name:string;
    age: number;
    sex: SexoP;
}

function printInfora(pearson: Pearson): void{
    console.log(
        `Datos Personales:\nNombre:${pearson.name}\nEdad:${pearson.age}`
    )
}
printInfora({name:"Dicxie", age: 20, sex: Sexo.Masculino });