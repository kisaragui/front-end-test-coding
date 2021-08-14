import React from 'react';
import { useFormik,ErrorMessage } from 'formik';
import InputSearch from './InputSearch';


const Searchform= ({setUser}) => {

    const validate = values => {
        const errors = {};
        if (values.user.length < 4) {
          errors.user = 'Debe ingresar mas de 4 caracteres';
        }else if (values.user ==="noloro"){
            errors.user ="Sea incresado un valor no valido"
        }
        return errors;
      };

    const formik = useFormik({
        initialValues: {
                user: ""
        },
        validate,
        onSubmit: (values) =>{
            setUser(values.user)
            formik.resetForm() 
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
        <div className="container-fluid">
            <div className="row ">
            <div className="text-center">  <h3>Por favor ingrese un usuario: </h3></div>
                <div className="col-10">
                    <InputSearch name="search" formik={formik}/>
                    {formik.errors.user && formik.touched.user ? <div>{formik.errors.user}</div> : null}
                </div>
                <div className="col-2 align-self-start searchButton">
                    <button className="btn btn-primary" type="submit">Buscar</button>
                </div>
            </div>
          </div>
        </form>
    )
}

export default Searchform