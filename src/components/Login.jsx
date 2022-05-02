export const Login = () => {
  const  handlelogin =async()=>{
   var res = await fetch("http://localhost:8080/orders")
   var data = await res.json()
  
  }

 
  const [showuser,setShowuser] = useState()
   const handlechange =(e)=>{
const{name,password} = e.target.value;
   }
  
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handlechange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handlechange

        }
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handlelogin}>Login</button>
    </div>
  );
};
