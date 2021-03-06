import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Episode from './Pages/Episode';
import Location from './Pages/Location';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails/>}/>

        <Route path="/episode" element={<Episode/>}/>
        <Route path="/episode/:id" element={<CardDetails/>}/>

        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}


const Home=()=> {
  let[pageNumber,setPageNumber]=useState(1);
  let [search,setSearch]=useState("");
  let[fetchedData,updateFetchedData]=useState([]);
  let {info,results}=fetchedData;
  let[status,setStatus]=useState("");
  let[gender,setGender]=useState("");
  let[species,setSpecies]=useState("");

  let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
      (async function () {
        let data=await fetch(api).then((res)=>res.json());
        updateFetchedData(data);
      })();
  },[api]);

  return (
    <div className="App">
        <h1 className='text-center mb-4'>Characters</h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
        <div className="container">
          <div className="row">
              <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
            <div className="col-lg-8 col-12">
              <div className="row">
                  <Cards page="/" results={results}/>
              </div>
            </div>
          </div>
        </div>

        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </div>
  );
}

export default App;
