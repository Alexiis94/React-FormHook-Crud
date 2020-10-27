import React from 'react'
import { useForm } from 'react-hook-form'

export const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data,e)=>{
        console.log(data);
        e.target.reset();
        props.addUser(data);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: { value: true, message: 'Campo Requerido'}
                })
            }/>
            {/* pintamos el error */}
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" ref={
                register({
                    required: { value: true, message: 'Campo Requerido'}
                })
            }/>
            {/* pintamos el error */}
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
    )
}
