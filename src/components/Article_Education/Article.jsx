import React, { useContext } from 'react'
import { AppContext } from '../../App'
import '../Common.css'
import './Article_Education.css'

const Article = () => {
    const {data} = useContext(AppContext)
  return (
    <>
{    data.map(value=>{
    return(

    <div className=" div-30 border rounded-1 border-1 border-secondary bg-white d-flex flex-column p-1 pt-0 pb-3 mt-3 " id={value.cssid}>
    <img
      loading="lazy"
      srcSet={value.mainimg}
      className=" img-7 img-fluid aspect-ratio-3x15 object-fit-contain object-position-center w-100 overflow-hidden"
         alt=""
    />
    <div className="div-31">
      <div className="div-32">
        <span >{value.headingimg} </span>
        <span className='fw-500'>{value.heading}</span>
      </div>
      <div className="div-33">
      
        <h1 className="text-dark mt-4 fw-bold fs-4 ">
         {value.title}
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9d3e20b0d8a804f96af0dae2ad3d31d7bce47cc94da6eef6002af6fc5c2ae2c?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
          className="  img-8 c-img"
          alt=""

        />
      </div>
      <div className="div-35">
        {value.discription}
      </div>
      <div className="div-36">
        <div className="div-37">
          <img
            loading="lazy"
            srcSet={value.userimg}
            className="img-9"
            alt=""
          />
          <div className="div-38">{value.username}</div>
        </div>
        <div className="div-39">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/796f69616be18969b044e18aab72a37e4916680cdffae7fdc99465e6a9f5fa67?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
            className="img-10"
            alt=""
          />
          <div className="div-40">{value.views}k views</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/188dd45a0bf21fbea31dd7ee10742d9f2920b1f445fdc20f2e44ebd49e0d3cd4?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
          className="img-11"
          alt=""
        />
      </div>
    </div>
  </div>

)})

}
  </>
  )
}

export default Article
