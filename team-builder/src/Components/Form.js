import React, { useState } from 'react';

function Form(props) {
    return (
        <form onSubmit={props.onFormSubmit}>
            <label> 
                <span>First Name</span><br/>
                <input onChange ={props.onInputChange} value={props.formValues.firstName} name={'firstName'} type='text'/>
            </label>
            <br/>
            <label>
                <span>Last Name</span><br/>
                <input onChange={props.onInputChange} value={props.formValues.lastName} name='lastName' type='text'/>
            </label>
            <br/>
            <label>
                <span>Email</span><br/>
                <input onChange={props.onInputChange} value={props.formValues.email} name='email' type='text'/>
            </label>
            <br/>
            <label>
                <span>Role</span><br/>
                <input onChange={props.onInputChange} value={props.formValues.role} name={'role'} type='text'/>
            </label>
            <br/>
            <br/>
            <input type='submit'/>
        </form>
    )
}

export default Form;