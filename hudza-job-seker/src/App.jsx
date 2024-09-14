import { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { chageWidth } from "./redux/counter/responsiveSlice";
import Loading from "./components/UI/Loading";
import PageJobs from "./components/Page/PageJobs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputJob from "./components/Page/InputJob";

function App() {
  const bodyRef = useRef(null);
  // const [width, setWidth] = useState(0);
  // const width = useSelector((state)=>state.counter.CounterSlice.count)
  const resolution = useSelector((state) => state.counter.responsiveSlice.resolution);
  const dispatch = useDispatch();




  useEffect(() => {
    window.addEventListener('load', (e) => {
      //   console.log(e.target, 'ini load', bodyRef.current.offsetWidth)
      // setWidth(bodyRef.current.offsetWidth);
      // console.log(resolution)
      dispatch(chageWidth(bodyRef.current.offsetWidth))
    })
    window.addEventListener('resize', (e) => {
      // console.log(bodyRef.current.offsetWidth)
      // setWidth(bodyRef.current.offsetWidth);
      dispatch(chageWidth(bodyRef.current.offsetWidth))
    })
  }, [])


  return (
    <div ref={bodyRef}>
      {resolution.width == 0 ? <Loading /> :

        <div>
          <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<PageJobs />} />
              <Route path="/input" element={<InputJob/>} />
              <Route path="/edit/:id" element={<InputJob isEdit={true}/>} />
            </Routes>
          </Router>
          

        </div>


      }
    </div>
  )
}

export default App
