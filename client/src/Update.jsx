import React,{useState} from 'react'

function Update({handelUpdate, changeView}) {
  console.log("changeView",changeView)
   
    
 const [name,setName]=useState("")
     const [imageUrl,setImage]=useState("")
     const [quantite,setquantities]=useState(0)
     const [price,setPrice]=useState(0)

    //  console.log(name);
   return (
     <div >
         <h1> name</h1>
      <input onChange={(e)=>{setName(e.target.value)}}></input>
      <h1> imageUrl</h1>
      <input onChange={(e)=>{setImage(e.target.value)}}></input>
      <h1> quantity</h1>
      <input onChange={(e)=>{setquantities(e.target.value)}}></input>
      <h1> Price</h1>
      <input onChange={(e)=>{setPrice(e.target.value)}}></input>
      <div>
      <button onClick={()=>{handelUpdate({name:name,imageUrl:imageUrl,quantity:quantite,price:price}), changeView("home")}}>update</button>
 </div>
 
 
     </div>
     
   )
   
}

export default Update