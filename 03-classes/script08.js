var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    Employee.prototype.saludar = function (name) {
        console.log("Hola mucho gusto mi " + name + " mi nombre es " + this.name);
    };
    return Employee;
}());
var employee1 = new Employee("Dicxie", "Administracion");
employee1.saludar("Jose");
var EmployeeHoras = /** @class */ (function (_super) {
    __extends(EmployeeHoras, _super);
    function EmployeeHoras() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmployeeHoras.prototype.saludar = function (name) {
        _super.prototype.saludar.call(this, name);
        console.log("soy trabajador horario");
    };
    return EmployeeHoras;
}(Employee));
var employee2 = new EmployeeHoras("Maria", "Contabilidad");
employee2.saludar("Jose");
