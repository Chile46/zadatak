function Car(name, address, phone, course){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;

    this.getInfo = function(){
        return "Name: " + this.name + "\n" +
            "Address: " + this.address + "\n" +
            "Phone: " + this.phone + "\n" +
            "Course: " + this.course
    }
}

let student1 = new Car("John Benson", "High Park 36", "(507) 833-3567", "Geography");
let student2 = new Car("John Doe", "Street 36", "(507) 777-0000", "English");
let student3 = new Car("Jake Weary", "Street 1", "(507) 888-1111", "Physics");

let student1Info = student1.getInfo();
let student2Info = student2.getInfo();
let student3Info = student3.getInfo();

console.log(student1Info);
console.log(student2Info);
console.log(student3Info);