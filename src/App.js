import { article_education_data } from './Data/Article_Education_data.js';
import {event_data} from './Data/Event_job_data.js'
import {job_data} from './Data/Event_job_data.js'
import { createContext, useState } from 'react';
import './App.css';
import Front from './components/Front.jsx';
import Signup from './Pages/Signup.jsx';
import { Outlet } from 'react-router-dom';
export const AppContext = createContext();
function App() {
  
  const [data,setData] = useState(article_education_data)
  const [dataEvent , setDataEvent] = useState(event_data)
  const [dataJob , setDataJob] = useState(job_data)

  return (
    <div className="App">

      <AppContext.Provider value={{data,setData, dataEvent,dataJob}}>
           <Front/>
           {/* <Signup/>
           <Outlet/> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
