import React from 'react'
import '../Common.css'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className=" div-2 box-shadow-sm bg-white align-self-stretch d-flex w-100 justify-content-between gap-3 p-3 ps-5 pe-5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/18dfc9c3aa3114a0e0385d7dcf110f2c521429a580ce8cb639399ac20bca5ec1?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
      className="img"
      alt=""
    />
    <div className="div-3">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ff6d9700f3a724b9f912b0cf80e51d26afeb7f68ca09c78c3370b7d6e942ed?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
        className="img-2"
      alt=""

      />
      <input type="text" className="div-4" placeholder='Search for your favorite groups in ATG '/>

    </div>
    <div className="div-5">
      <div className="div-6">
        <a href='../../Pages/Signup.jsx' style={{color:" rgba(46,46,46,1)"}}>Create account. </a>
    
    
        <span style={{fontweight: "700", color:"rgba(47,108,229,1)"}}>
          It’s free!
        </span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/599adac2e5c01a1005c41b85e90850d581d9ccabed4aa883da3d5907c0123223?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
        className="img-3"
        alt=""
      />
    </div>
  </div>
  )
}

export default Navbar
