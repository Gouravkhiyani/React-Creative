import React from 'react'
import Gender from './Cateory/Gender'
import Species from './Cateory/Species'
import Status from './Cateory/Status'

const Filters = ({setStatus,setGender,setSpecies,setPageNumber}) => {
    let clear=()=>{
        setStatus("");
        setGender("");
        setSpecies("");
        setPageNumber(1);
        window.location.reload(false);
    }

    return (
        <div className='col-lg-3 col-12 mb-5'>
            <div className="text-center fs-4 mb-2">Filter</div>

            <div onClick={clear} className="text-center text-primary text-decoration-underline mb-4" style={{ cursor: "pointer" }}>Clear Filters</div>

            <div className="accordion" id="accordionExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender setGender={setGender} setPageNumber={setPageNumber}/>
            </div>
        </div>
    )
}

export default Filters
