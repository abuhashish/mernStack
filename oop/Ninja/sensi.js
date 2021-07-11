class sensi extends Ninja{
    constructor(name){
        this.name=name;
        this.health=200;
        this.speed=10;
        this.str=10;
        this.wisdom=10;
    }
    speakWisdom(){
        drinkSake();
        console.log("message of wisdeom");
    }
}
const x=new sensi("amro");
x.speakWisdom();
console.log(x.health)
