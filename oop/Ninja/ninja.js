class Ninja{
    constructor(name){
        this.name=name;
        this.health=0;
        this.speed=3;
        this.str=3;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("health is "+this.health+"/n speed is "+this.speed+"/n str is"+this.str);
    }
    drinkSake(){
        this.health=health+10;
    }
}
const x = new Ninja("amro");
x.sayName();