// import React, { useEffect, useState } from 'react'
// import styles from "../Styling/Admin.module.css"
// import { Link } from 'react-router-dom';
// import AdminNav from '../Components/AdminNav';
// import { auth } from '../firebase'




// const AdminUserData = () => {

// const[name, setname] = useState("")

//   useEffect(()=>{
//     auth.onAuthStateChanged((user)=>{setname(user.displayName);})
// },[])


//   return (
//     <div className={styles.adminDiv}>
//          <AdminNav />
//          <h1>User Online</h1>
//          <div>{name}</div>
//     </div>
//   )
// }

//export default AdminUserData