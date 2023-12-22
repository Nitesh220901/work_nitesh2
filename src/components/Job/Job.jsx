import React, { useContext } from 'react'
import './Job.css'
import '../Common.css'
import { AppContext } from '../../App'
const Job = () => {
  const {dataJob} = useContext(AppContext)
  return (
    <div className="border rounded-1 border-1 border-secondary bg-white d-flex flex-column p-1 pt-0 pb-3 pl-2  mt-3" id='job'>
      <div className="div-76">
        <div className="div-77">
          <div className="div-54 div-78 ml-3">
          <span >{dataJob.headingimg}</span>
          <span className='fw-500'>{dataJob.heading}</span>
        </div>
          <h1 className="text-dark mt-4 fw-bold fs-4">{dataJob.title}</h1>
          <div className="div-80">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f49b45ae00b566637caa705599e98d57c8b48a972eb8187eca86deb4108b34?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
              className="img-24"
              alt=""
            />
            <div className="div-81">
              Innovaccer Analytics Private Ltd.
            </div>
          </div>
        </div>
        <div className="div-82">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16bf8001bf5035aecc0304a3eb04e7e1c91ccdb8b1fbccd05c8303a0f421ad1?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
            className="img-25"
            alt=""

          />
          <div className="div-83">Noida, India</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ae23a941f92f795180358e2986140b950109df6e9c2edca8d243759b33e4b9?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
          className="img-26"
          alt=""

        />
      </div>
      <button type="button" class="btn btn-success rounded-3 mt-3 py-2 px-3 bg-white text-success border-secondary  ">
      Apply on Timesjobs
      </button>
      <div className="div-85">
        <div className="div-86">
          <img
            loading="lazy"
            srcSet={dataJob.userimg}
            className="img-27"
            alt=""

          />
          <p className="text-dark  fw-bold fs-5 align-self-center flex-grow-1 nowrap mx-auto ">{dataJob.username}</p>
        </div>
        <div className="div-88">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/796f69616be18969b044e18aab72a37e4916680cdffae7fdc99465e6a9f5fa67?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
            className="img-28"
            alt=""
          />
          <div className="div-89">{dataJob.views}k views</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24c2eb105e8252b7edaddefe178da66d2cc23b4928574958770aa0be5277fa8f?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
          className="img-29"
          alt=""
        />
      </div>
    </div>
  )
}

export default Job
