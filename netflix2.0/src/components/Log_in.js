import React, { useState } from 'react'
import Head from './Head'
import axios from "axios";
import { API_END_POINT } from '../utils/constant';

const Log_in = () => {
    const[isLogin,setIsLogin]=useState(true);
    const[fullName,setFullName]=useState();
    const[email,setEmail]=useState();
    const[password,setpassword]=useState();

    const loginHandler=() => {
        setIsLogin(!isLogin)
    }

    const getInputData= async (e)=>
    {
        e.preventDefault();
        if(isLogin){

            const user={email,password};
            try {
         
             const res =await axios.post(`http://localhost:8080/api/v1/user/login`, {
                "email":email,
                "password": password
             });
             
            } catch (error) {
             console.log(error);
            }
        }else{
            try {
             const res =await axios.post(`http://localhost:8080/api/v1/user/register` , {
                "fullName": fullName, 
                "email":email,
                "password": password
             });
             alert('User Created successfully!');
            } catch (error) {
             alert("user already exist")
            }
        }
       
        }
  return (
    <div>
        <Head></Head>
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh]' src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/25/2022/11/netflix_il_piano_di_abbonamento-1200x675.jpg" alt="banner"></img>
        </div>
        <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-90 rounded-md'>
            <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin? "Log In":"Sign Up"}</h1>
            <div className='flex flex-col'>

                {!isLogin && <input value={fullName} onChange={(e)=> setFullName(e.target.value)} type='text' placeholder='Username' className='outline-none rounded-sm p-3 my-2 bg-gray-800 text-white'></input>}
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className='outline-none rounded-sm p-3 my-2 bg-gray-800 text-white'></input>
                <input type='password' value={password} onChange={(e)=> setpassword(e.target.value)}  placeholder='Password' className='outline-none rounded-sm p-3 my-2 bg-gray-800 text-white'></input>
                <button className='bg-red-600 mt-4 p-3 text-white rounded-sm font-medium '>{isLogin? "Log In": "Sign Up"}</button>
                <p className=' text-white mb-5 mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='text-white ml-1 font-lg font-bold cursor-pointer'>{isLogin ? "Sign Up now.": "Log In"}</span></p>
            </div>
        </form>
    </div>
  )
}

export default Log_in