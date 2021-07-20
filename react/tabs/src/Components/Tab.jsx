import React,{useState} from 'react'

const Tab = (props) => {
    const[items,setItems]=useState(props.array)
    const[tab,setTab]=useState(0)
    
    const showfunc=(e,index)=>{
        setTab(index);
        console.log(index)
    } 
    console.log(tab)

    
    return (
      
        <div style={{width:'1000px',margin:'0 auto'}}>
            <h1>{tab}</h1>
        <div className="header" style={{
            display: 'flex',
            justifyContent:'space-evenly',
            
        }}>
            {items.map((item,key) =>
                <h1 style={{
                border: '1px solid',
                padding: '50px',
                width: '80px',
                height: '30px',
                }}><button key={key} onClick={ (e) => showfunc(e, key) }>{item.name}  </button>
                </h1>)}
        
      
        
        
         <div>
       
    </div>

        </div>
        <div >
        {tab===0?
        <p style={{border: '1px solid',height:'200px',width:'1000px'}}>{items[0].content}</p>
        :tab===1?
        <p style={{border: '1px solid',width:'1000px'}}>{items[1].content}</p>
        :
        <p style={{border: '1px solid',width:'1000px'}}>{items[2].content}</p>
    }
        </div>
  
        </div>
    )
}

export default Tab
