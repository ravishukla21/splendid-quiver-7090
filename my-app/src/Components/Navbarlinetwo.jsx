import React, { useEffect, useState } from 'react';
import "./Navbarlinetwo.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
//
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseIcon from '@mui/icons-material/Close';

const Navbarlinetwo = () => {
    const [authclass, setauthclass] = useState(true)
    const [style, setstyle] = useState("cont123");





    const sidebarclick = () => {
        setstyle("open123")

    }




    const closesidebar = () => {
        // document.getElementsByClassName("sidebar").style.display="none";
        // setstyle("cont123")

        setstyle("cont123")


    }
    // console.log(authclass,"authclass")
    return (
        <div>

            <div className={style}>


                <div className='sidebarshow'>
                    <div>
                        <div className='sidebartop'>
                            <PersonIcon className='i' />
                            <h2>Hello, <span>Sign in</span></h2>


                        </div>
                        <div className='sidebaritem'>
                            <h2>Trending </h2>
                            <p style={{display:"flex",gap:"70px",cursor:"pointer"}}>Best Sellers <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span></p>
                            <p style={{display:"flex",gap:"50px",cursor:"pointer"}}>New Releases   <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span> </p>
                            <p style={{display:"flex",alignItems:"end",cursor:"pointer"}}>Movers and Shakers
                            <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span>
                            
                            </p>
                        </div>


                        <div className='sidebaritem'>
                            <h2>Shop By Category</h2>
                            <p style={{display:"flex",gap:"70px",cursor:"pointer"}}>Mobiles,Computers  <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span></p>
                            <p style={{display:"flex",gap:"30px",cursor:"pointer"}}>Tv,Appliances,Electronics   <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span></p>
                            <p style={{display:"flex",gap:"110px",cursor:"pointer"}}>Men's Fashion  <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span></p>
                            <p style={{display:"flex",gap:"85px",cursor:"pointer"}}>Women's Fashion  <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span></p>
                            <p style={{display:"flex",gap:"50px",cursor:"pointer"}}>Beauty,Health,Grocery <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span></p>
                            <p style={{display:"flex",gap:"0px",cursor:"pointer"}}>Sports,Fitness,Bags,Luggage  <span style={{
                                border: "0px solid red", 
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width:"20px"
                            }}> <ArrowRightIcon /></span></p>

                        </div>
                        <div className='sidebaritem'>
                        <h2>Trending </h2>
                        <p style={{display:"flex",gap:"70px",cursor:"pointer"}}>Best Sellers <span style={{
                            border: "0px solid red", 
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width:"20px"
                        }}> <ArrowRightIcon /></span></p>
                        <p style={{display:"flex",gap:"50px",cursor:"pointer"}}>New Releases   <span style={{
                            border: "0px solid red", 
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width:"20px"
                        }}> <ArrowRightIcon /></span> </p>
                        <p style={{display:"flex",alignItems:"end",cursor:"pointer"}}>Movers and Shakers
                        <span style={{
                            border: "0px solid red", 
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width:"20px"
                        }}> <ArrowRightIcon /></span>
                        
                        </p>
                    </div>


                    </div>
                    <button onClick={closesidebar} style={{ color: "black" }}> <CloseIcon/></button>

                </div>



            </div>



            <div className='nav'>
                <div className="containernav">


                    <ul>
                        <li style={{ display: "flex", gap: "4px", marginTop: "4px" }} className='borderwhite' onClick={sidebarclick}>
                            <span className='opennavslider'>
                                <div style={{ marginTop: "4px" }}>


                                    <DehazeIcon />


                                </div>




                            </span>
                            <span style={{ marginTop: "4px" }}>  All</span>
                        </li>
                        <li className='borderwhite'>
                            <a href="/shoes">   Mens</a>
                        </li>
                        <li className='borderwhite'>
                            <a href="/womenShoes">  Womens</a>
                        </li>
                        <li className='borderwhite'>
                            <a href="."> Mobiles</a>
                        </li>
                        <li className='borderwhite'>
                            <a href="."> Customer Service </a>
                        </li>
                        <li className='borderwhite'>
                            <a href="."> Electronics </a>
                        </li>
                        <li className='borderwhite'>
                            <a href=".">  Today's Deals</a>
                        </li>
                        <li className='borderwhite'>
                            <a href=".">Best Sellers</a>
                        </li>
                        <li className='borderwhite primeimagehover'>
                            <a href="." > {"Prime>"}  </a>

                            <div className='primeimage'>
                                <img style={{ width: "93%", height: "auto", padding: "10px 10px", margin: "auto", justifyContent: "center", border: "0px solid red" }} src="https://cdn.images.express.co.uk/img/dynamic/59/590x/Amazon-Prime-Day-2018-989111.jpg?r=1532508857780"></img>

                            </div>
                        </li>

                    </ul>



                </div>

            </div>



        </div>


    )
}

export default Navbarlinetwo