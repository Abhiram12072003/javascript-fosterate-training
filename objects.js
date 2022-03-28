const obj=["Hi","How",1,2]
console.log(obj)
const car={type:"Fiat",model:1000,color:"white"}
console.log(car)
//Creation of objects using functions

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
const p={pid:1,pname:"Abc",rate:1200,afterdiscount:function(){return this.rate-(this.rate*(10/100))}}
console.log(p.afterdiscount())

class Emp{
    constructor(id,name,age,gender,skills,basic){
        this.id=id;
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.skills=skills;
        this.basic=basic;
    }
};

const e1=new Emp('s1','abc',24,'Male','Javascript',10000);
console.log(e1);
const e2=new Emp('s2','def',25,'Male','HTMLL CSS',12000);
console.log(e2);
const e3=new Emp('s3','ghi',27,'Female','NodeJS',14000);
console.log(e3);
const e4=new Emp('s4','jkl',28,'Male','Angular',13000);
console.log(e4);
const e5=new Emp('s5','mno',36,'male','Javascript',10000);
console.log(e5);

class student{
    constructor(rollno,name,mark1,mark2,mark3,mark4,mark5){
        this.rollno=rollno;
        this.name=name;
        this.mark1=mark1;
        this.mark2=mark2;
        this.mark3=mark3;
        this.mark4=mark4;
        this.mark5=mark5;
        }
    gettotal=()=>{return this.mark1+this.mark2+this.mark3+this.mark4+this.mark5}
};

const student1=new student('s2','Abcd',30,30,30,30,30);
console.log(student1);
console.log('Average marks scored by',student1.name,'is',(student1.gettotal())/5)
