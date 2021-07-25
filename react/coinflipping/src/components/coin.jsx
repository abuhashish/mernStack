import React from 'react'

const Coin = () => {
    function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount=0;
            let attempts =0;
            while(headsCount < 5) {
                attempts++;
                let result = tossCoin();
                if (result === 'heads'){
                    headsCount++;
                }
            
                else
                    headsCount = 0;
            }
                if(headsCount===5) 
                    resolve("we did make it through with the 5 heads");
                else if(headsCount != 5 && attempts>100)
                    reject("we did make it through with 5 heads")
            
              
                    
        });
}
    fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
    console.log( "When does this run now?" );
    return (
        <div>
            hey
        </div>
    )
}

export default Coin
