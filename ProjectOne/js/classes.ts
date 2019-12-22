interface UserInterface{
  name:string;
  email:string;
  age:number;
  register();
  payInvoice();
}

class User{
  name:string;
  email:string;
  age:number;
  constructor(name:string, email:string, age:number){
    this.name=name;
    this.email=email;
    this.age=age;

    console.log('User Created: '+this.name);
  }

  register(){
    console.log(this.name+' is registered');
  }

  payInvoice(){
    console.log(this.name+' Payed Invoice');
  }
}

class Member extends User{
  id:number;

  constructor(id:number,name:string,email: string, age:number){
    super(name,email,age);
      this.id=id;
  }

  payInvoice(){
    super.payInvoice()
  }
}

let user=new User('Debarun','deba@gmail.com',23);

let mitra: User= new Member(101,'Mitra','mitra@gmail.com',33);
mitra.payInvoice();
