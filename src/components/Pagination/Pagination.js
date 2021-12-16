import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({pageNumber,setPageNumber,info}) => {

    let[width,setWidth]=useState(window.innerWidth);

    let updateDimension=()=>{
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',updateDimension)
        return ()=>window.removeEventListener('resize',updateDimension);
    },[])

    return (
        <>
        <style jsx>

            {
            `
            @media (max-width:768px){
                .next,.prev{
                    display:none;
                }
            }
            .pagination{
                font-size:14px;
            }
            `
            }

        </style>
        <ReactPaginate className='pagination justify-content-center gap-4 my-4' 
        forcePage={pageNumber===1?0:pageNumber-1}
        nextLabel="Next"
        nextClassName='btn btn-primary next'
        previousLabel="Prev"
        previousClassName='btn btn-primary prev'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
        activeClassName='active'
        pageCount={info?.pages}
        marginPagesDisplayed={width<576?1:2}
        pageRangeDisplayed={width<576?1:2}
        />        
        </>
        //it can cause issue if you dont use ? => it means if the info exists then add the pages otherwise not
    )
}

export default Pagination
