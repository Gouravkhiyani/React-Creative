import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss'

const Cards = ({results,page}) => {

    let display,colorclass
    if(results){
        display=results.map(x=>{
            let {id,name,image,location,status}=x
            if(status==="Dead")
                colorclass="bg-danger"
            else if(status==="Alive")
                colorclass="bg-success"
            else
                colorclass="bg-secondary"
            return(
                <Link style={{textDecoration:"none"}} to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark">
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div className={`${styles.content}`}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.badge} position-absolute badge ${colorclass}`}>
                        {status}
                    </div>
                </Link>
            )
        })
    }
    else
    {
        display="No characters found"
    }


    return (
        <>
            {display}
        </>
    )
}

export default Cards
