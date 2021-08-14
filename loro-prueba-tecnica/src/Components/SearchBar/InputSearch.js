import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputSearch = ({formik}) => {

    return (
        <div className="search border border-2 rounded-pill">
            <div className="row row-cols-2">
            <div className="col-1">
                <FontAwesomeIcon icon={['fas', 'search']} size="2x" fixedWidth />
            </div>
            <div className="col-11 ">
                <input type="text" className="form-control" name="user" onBlur={formik.handleBlur} onChange={formik.handleChange} value={ formik.values.user }/>
            </div>
            </div>
        </div>
    )
}

export default InputSearch
