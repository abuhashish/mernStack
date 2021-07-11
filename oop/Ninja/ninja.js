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
    drinkSake(health){
        return health+=10;
    }
}
const x = new Ninja("amro");
x.sayName();
class sensi extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.str=10;
        this.wisdom=10;
    }
    speakWisdom(){
        this.health=this.drinkSake(this.health);
        console.log("message of wisdeom");
    }
}
const g=new sensi("amro");
g.speakWisdom();
console.log(g.health)
