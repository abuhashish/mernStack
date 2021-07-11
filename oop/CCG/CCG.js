class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack( target ) {
        if( target instanceof Unit ) {
            target.res-=10;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    
    }
    buff( target ) {
        if( target instanceof Unit ) {
            if(this.stat=="resilience"){
                target.res+=this.magnitude;
            }
            else{
                target.power+=this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const x=new Unit("Red_Belt_Ninja",3,3,4);
const y=new Unit("Black_Belt_Ninja",4,5,4);
const a1=new Effect("Hard_algorithem",2,"increase target's resilience by 3","resilience",3);
const a2=new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const a3=new Effect("Pair Programming",3,"increase target's power by 2","power",2);

a1.buff(x)
a2.buff(x);
a3.buff(x);
x.attack(y);