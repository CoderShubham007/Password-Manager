import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const eyeButton = useRef();
    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    });
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const savePassword = (e) => {
        e.preventDefault();
        
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));

        setForm({
            site: "",
            username: "",
            password: ""
        });
    }
    
    return (
        <>
            {/* Form */}
            <div className="container px-8 py-2">
                <form className='max-w-[600px] mx-auto' onSubmit={savePassword}>
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Password Manager OP</h1>
                    </div>
                    <label className="input input-bordered flex items-center mb-5">
                        Site URL &nbsp;
                        <input type="text" value={form.site} name='site' onChange={handleChange} className="grow" required />
                    </label>
                    <label className="input input-bordered flex items-center mb-5">
                        Username &nbsp;
                        <input type="text" value={form.username} name='username' onChange={handleChange} className="grow" required />
                    </label>
                    <label className="input input-bordered flex items-center mb-5">
                        Password &nbsp;
                        <input type={showPassword ? "text" : "password"} value={form.password} name='password' onChange={handleChange} className="grow" required />
                        <button type='button' ref={eyeButton} onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            )}
                        </button>
                    </label>
                    <div>
                        <button type='submit' className="btn btn-active btn-neutral w-full">Success</button>
                    </div>
                </form>
            </div>
            {/* Table */}
            <div className='container mb-5 min-h-72'>
                <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4 text-center">Your Passwords</h2>
                {passwordArray.length === 0 && <div><h3 className='text-center'>No Passwords Avialable Yet!</h3></div>}
                {passwordArray.length !== 0 && <div className="overflow-x-auto max-w-[1000px] mx-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Site</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordArray.map( (item, index) => {
                                return (<tr key={index} className="bg-base-200">
                                <td>
                                    <a href={item.site} target='_blank'>{item.site}</a>
                                </td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button className='me-3 text-purple-600'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </button>
                                    <button className='text-red-600'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>)
                            })}
                        </tbody>
                    </table>
                </div>}
            </div>
        </>
    )
}

export default Manager
