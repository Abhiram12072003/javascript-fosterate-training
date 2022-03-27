const obj=["Hi","How",1,2]
console.log(obj)
const car={type:"Fiat",model:1000,color:"white"}
console.log(car)
//Creation of objects using constructors
Employee=function(sname,sid,age,dept_id){
    this.sname=sname 
    this.sid=sid
    this.age=age
    this.dept_id=dept_id
}

const emp1=Employee("ABC",23,25,"d1")
console.log(emp1)
const emp2=Employee("DEF",24,54,"d2") 
console.log(emp2)