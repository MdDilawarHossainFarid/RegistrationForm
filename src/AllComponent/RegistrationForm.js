import React,{useState} from 'react'



const Multipleinputs =()=>{

const[userRegistration,setUserRegistration]=useState({username:"",
email: "",
phone:"",
password : ""
})
const[records,setRecords]=useState([])

const handelInput =(e)=>{

const name = e.target.name
const value = e.target.value
setUserRegistration({...userRegistration,[name]:value })
console.log(name,value)
}

const handelSubmit=(e)=>{
   e.preventDefault()
   const newRecord = {...userRegistration,id:new Date().getTime().toString()}
   setRecords([...records,newRecord])
   setUserRegistration ({username:"",email:"",phone:"",password:""})
}


    
   
   
   return(
    <>
    <form action="" onSubmit={handelSubmit}  className="container">
 <div>
           <leble htmlFor="username"  >Fullname </leble>
           <input type="text" name="username" id="Username" value={userRegistration.username} onChange={handelInput}></input>
        </div><br/>
        <div>
           <leble htmlFor="Email">Email </leble>
           <input type="text" name="email" id="Email" value={userRegistration.email} onChange={handelInput}></input>
        </div><br/>
        <div>
           <leble htmlFor="Phone">Phone </leble>
           <input type="text" name="phone" id="Phone" value={userRegistration.phone} onChange={handelInput}></input>
        </div><br/>
        <div>
           <leble htmlFor="Password">Password </leble>
           <input type="Password" name="password" id="Password"  value={userRegistration.password}onChange={handelInput}></input>
        </div><br/>
        <button type="Submit" >Submit</button>
   
    </form>
   
    <>{
       records.map(myData=>{
          return(<>
          <div className="showDataStyle">
             <p>{myData.username}</p>
             <p>{myData.email}</p>
             <p>{myData.phone}</p>
             <p>{myData.password}</p>
          </div></>)
       })
    }
    </>
  
  
   </>
    )
}
export default Multipleinputs
