class Service {
  constructor(){
    this.numbers = [1,2,3];
    this.token = "token";
  }
  
  doSomething(){
    setTimeout(() => {
      this.numbers.forEach((number) =>{
      //Cannot read property 'forEach' of undefined
          console.log(number);
          console.log(this.token);
      });
    }, 100);
  }
}

const service = {
  numbers :[1,2,3],
  token : 'token',
  doSomething: function(){
    setTimeout(function (){
      this.numbers.forEach(number => console.log(number))
    }.bind(this),1000)
  }
}

const services = new Service();
service.doSomething();

service.doSomething()