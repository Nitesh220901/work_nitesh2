import React, { useContext, useState } from 'react'
import './Event.css'
import '../Common.css'
import { AppContext } from '../../App'



const Event = () => {
  const [click, setClick] = useState(false)

  const { dataEvent } = useContext(AppContext)
  return (
    <div className="border rounded-1 border-1 border-secondary bg-white d-flex flex-column p-1 pt-0 pb-3 mt-3" id='event'>
      <img
        loading="lazy"
        srcSet={dataEvent.mainimg}
        className="img-fluid aspect-ratio-3x15 object-fit-contain object-position-center w-100 overflow-hidden"

        alt=""
      />
      <div className="div-53">
        <div className="div-54">
          <span >{dataEvent.headingimg}</span>
          <span className='fw-500'> {dataEvent.heading}</span>
        </div>
        <div className="div-55">
    
          <h1 className="text-dark d-flex mt-3 align-items-center justify-content-between gap-3  fw-bold fs-4 ">
            {dataEvent.title}
          </h1>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5cfe10b4e66fa1feeac533002568a207b2c9ee3d0f1a257223b96f3f99628d2?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
            onClick={() => setClick(!click)}
            className="c-img"
            alt=""
          />
        </div>
        <div className="div-57 mt-1">
          <div className="div-58">
            <div className="column-2">
              <div className="div-59">
                <div className="div-60">
                  <div className="div-61">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69de05e9d0bb0c54c8e790b2cbf9aefc4949446bb6a886ff5547b86a00449f4a?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
                      className="img-19"
                      alt=""
                    />
                    <div className="div-62">
                      Fri, 12 Oct, 2018
                    </div>
                  </div>
                  <div className="div-63">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5599b69710d5244f860fcc5d95b63609e61ccac50710a7a26c878aedd08b4eac?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
                      className="img-20"
                      alt=""
                    />
                    <div className="div-64">Ahmedabad, India</div>
                  </div>
                </div>
                <button type="button" class="btn btn-danger text-center nowrap rounded-3 border border-secondary bg-white  text-danger align-self-stretch mt-4 d-flex justify-content-center align-items-center py-2 px-4">
                  Visit Website
                </button>
              </div>
            </div>
            {click ?
              <div className="column-3">
                <div className="div-66">
                  <div className="div-67">Edit</div>
                  <div className="div-67">Report</div>
                  <div className="div-67">Option 3</div>
                </div>
              </div>:""
}
          </div>
        </div>
        <div className="div-70">
          <div className="div-71">
            <img
              loading="lazy"
              srcSet={dataEvent.userimg}
              className="img-21"
              alt=""
            />
            <p className="text-dark  fw-bold fs-5 align-self-center flex-grow-1 nowrap mx-auto ">{dataEvent.username}</p>

          </div>
          <div className="div-73">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/796f69616be18969b044e18aab72a37e4916680cdffae7fdc99465e6a9f5fa67?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
              className="img-22"
              alt=""
            />
            <div className="div-74">{dataEvent.views}k views</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/374bb231fb33d8d29203db5810999cbd914022683a644692e23ae4eeff18fc8b?apiKey=b1e6e2a7aa104119b01a99b562696ef3&"
            className="img-23"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Event
