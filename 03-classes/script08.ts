class Employee{
    jefe: Employee;
    name: string;
    grade: string;
    salary: number;
    constructor(name:string, grade:string){
        this.name = name;
        this.grade = grade;
    }

    saludar(name:string){
        console.log(`Hola mucho gusto mi ${name} mi nombre es ${this.name}`)
    }
}

let employee1 = new Employee("Dicxie", "Administracion");
employee1.saludar("Jose");

class EmployeeHoras extends Employee{

    saludar(name:string){
        super.saludar(name);
        console.log(`soy trabajador horario`);
    }
}

let employee2 = new EmployeeHoras("Maria", "Contabilidad");
employee2.saludar("Jose");