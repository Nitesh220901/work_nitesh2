
import * as React from "react";
import Article from "./Article_Education/Article";
import Event from "./Event/Event";
import Job from "./Job/Job";
import Location from "./Location/Location";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import './Common.css'
import Links from "./Links/Links";

function Front() {
  return (
    <>
      <div className="div" >
        {<Navbar/>}
       
        {<Main/>}
        
        <div className="div-12" id="front">
         {<Links/>}
          <div className="div-25" />
          <div className="div-26" />
          <div className="div-27">
            <div className="div-28">
              <div className="column">
                <div className="div-29">
                    {<Article/>}
                    {<Event/>}
                    {<Job/>}
                </div>
              </div>
              <div className="column-4">
                {<Location/>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
    
        
      `}</style>
    </>
  );
}


export default Front
