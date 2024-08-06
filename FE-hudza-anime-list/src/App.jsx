import { useEffect } from "react"
import Cards from "./components/Cards"
import { DelDataApi, GetDataApi, PostDataApi, PutDataApi } from "../api/api"
import { useState } from "react"
import Loading from "./components/Loading";
import PostModal from "./components/PostModal";
import EditModal from "./components/EditModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import HomeDinamic from "./components/HomeDinamic";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DetailAnime from "./components/DetailAnime";
import ProtectedRoute from "./auth/protectedRoute";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [selectedData, setSelectedData] = useState({ title: "", todo: "" });
  // const [isAdd, setAdd] = useState(false);


  // async function getData() {
  //   const dataFromApi = await GetDataApi();
  //   setData(dataFromApi.data);
  // }


  // async function handleClickPostData() {
  //   document.getElementById('my_modal_4').showModal();
  //   setAdd(true);
  // }

  // async function handleEditData(data) {

  //   setLoading(true);
  //   const putData = await PutDataApi(data);
  //   await getData();

  //   setSelectedData({ title: "", todo: "" });
  //   setLoading(false);
  // }

  // async function handlePostData(data) {
  //   setLoading(true);
  //   const postData = await PostDataApi(data);
  //   await getData();
  //   console.log(postData);
  //   setLoading(false);
  //   setAdd(false);

  //   return
  // }


  // async function delData(id) {

  //   setLoading(true);

  //   const delData = await DelDataApi(id);
  //   if (delData.msg == "Berhasil delete todo") {

  //   }

  //   getData();
  //   setLoading(false);
  // }

  // useEffect(
  //   () => {
  //     getData()
  //   }, []

  // );

  // useEffect(
  //   () => {
  //     console.log("ada perubahan data")

  //     document.getElementById("editTitle").value = selectedData.title
  //     document.getElementById("editTodo").value = selectedData.todo



  //   }, [selectedData]

  // );

  // useEffect(
  //   () => {
  //     console.log(isAdd)
  //     if (isAdd) {
  //       document.getElementById("postTitle").value = ""
  //       document.getElementById("postTodo").value = ""

  //     }
  //   }, [isAdd]
  // )

  return (
    <div>


      <Router>
        <Routes>
          <Route path="" element={
            <Home />
          } />

          <Route path="/recomendation" element={
            <HomeDinamic />
          } />

          <Route path="/login" element={
            <Login />
          } />


          <Route path="/about" element={
            <About />
          } />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={
               <Dashboard/>
            } />
          </Route>


          {/* <Route element={<ProtectedRoute />}>
            <Route path="/anime/:id" element={
              <DetailAnime />
            } />
          </Route> */}
        </Routes>
        <Nav />
      </Router>
      <Footer />

    </div>

    // <div>
    //   <h1>Todo list</h1>
    //   <div className="flex justify-center">
    //     <button className="btn btn-primary mb-3" onClick={() => { handleClickPostData() }} >ADD TODO</button>
    //   </div>
    //   <div className="flex flex-wrap gap-4 w-100 relative" id="main">
    //     {loading ? <Loading /> : <>
    //       {data.map((e, index) => (
    //         <Cards key={index} data={e} delData={delData} handleEditData={handleEditData} setSelectedData={setSelectedData} />
    //       ))}
    //     </>
    //     }
    //   </div>
    //   <PostModal handlePostData={handlePostData} setAdd={setAdd} />

    //   <EditModal handleEditData={handleEditData} selectedData={selectedData} setSelectedData={setSelectedData} />
    // </div>

  )
}

export default App
