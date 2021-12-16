import React from 'react'
import style from './filterBTN.module.scss'

const FilterBTN = ({ name, index, item, task, setPageNumber }) => {
    return (
        <div>

            <div className="form-check">
                <input onClick={
                    ()=>{
                        setPageNumber(1);
                        task(item);
                    }
                }
                    className={`${style.input} form-check-input ${style.formx}`} type="radio" name={name} id={`${name}-${index}`} />
                <label class="btn btn-outline-primary" for={`${name}-${index}`}>{item}</label>
            </div>
        </div>
    )
}

export default FilterBTN
