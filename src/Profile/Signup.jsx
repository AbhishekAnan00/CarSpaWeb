import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [input , setInput] = useState({
		fullname: "",
		username: "",
		password: "",
		confirmpassword: ""
	})
  const handleOnSubmit = (e) => {
		e.preventDefault()
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    			<div className='w-screen h-screen p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    				<h1 className='text-3xl font-semibold text-center text-gray-300'>
    					<span className='text-red-700'>Car🚗Spa</span>
    				</h1>
    
    				<form onSubmit={handleOnSubmit}>
    					<div>
    						<label className='label p-2'>
    							<span className='text-base label-text'>Full Name</span>
    						</label>
    						<input type='text' placeholder='Full Name' className='w-full input input-bordered  h-10' value={input.fullname} onChange={(e)=> setInput({
									...input,
									fullname: e.target.value
								})}/>
    					</div>
    
    					<div>
    						<label className='label p-2 '>
    							<span className='text-base label-text'>Username</span>
    						</label>
    						<input type='text' placeholder='User Name' className='w-full input input-bordered h-10' value={input.username} onChange={(e)=> setInput({
									...input,
									username: e.target.value
								})}/>
    					</div>
    
    					<div>
    						<label className='label'>
    							<span className='text-base label-text'>Password</span>
    						</label>
    						<input
    							type='password'
    							placeholder='Enter Password'
    							className='w-full input input-bordered h-10'
									value={input.password} 
									onChange={(e)=> setInput({
										...input,
										password: e.target.value
									})}
    						/>
    					</div>
    
    					<div>
    						<label className='label'>
    							<span className='text-base label-text'>Confirm Password</span>
    						</label>
    						<input
    							type='password'
    							placeholder='Confirm Password'
    							className='w-full input input-bordered h-10'
									value={input.confirmpassword} onChange={(e)=> setInput({
										...input,
										confirmpassword: e.target.value
									})}
    						/>
    					</div>
    
    					<Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' >
    						Already have an account?
    					</Link>
    
    					{/* <div>
							<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
    					</div> */}
    				</form>
    			</div>
    		</div>
  )
}

export default Signup