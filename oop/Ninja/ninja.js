class Ninja{
    constructor(name,health=0,speed=3,str=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.str=str;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("health is "+this.health+"\n speed is "+this.speed+"\n str is"+this.str);
    }
    drinkSake(){
        this.health+=10;
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
        super.drinkSake();
        console.log("message of wisdeom");
    }
}
const g=new sensi("amro");
g.speakWisdom();
