import React, { useState } from 'react'
import Navebar from './Navebar'
import Footer from './Footer'
import Asyk from '../assets/images/askyourdoubts/image.png'
import { Textarea } from '@headlessui/react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ContNav from './ContNav'
import axios from 'axios'



function Signup() {

    const [formData, setFormData] = useState([
        {
            name: "",
            age: "",

            email: "",
            phone: "",
            caste: "",
            dob: "",
            state: "",
            district: "",
            height: "",
            weight: "",
            education: "",
            working: "",

            password: "",
            description: "",
            gender: ""

        }]);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/auth/signup", formData ,{withCredentials:true});
            alert("Registered successfully");
            navigate('/login')
        } catch (error) {
            console.error("Error registering:", error);
        }
    };



    return (
        <>
            {/* navbar */}
            <ContNav />
            <Navebar />



            {/* main */}
            <div className=''>
                <div className="mx-auto grid grid-cols-1  max-w-4xl   justify-between gap-4  items-center p-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-9 items-center shadow-xl rounded-xl overflow-hidden">

                        {/* Left Section (Text) */}
                        <div className="flex flex-col justify-center text-start space-y-8 md:space-y-12 bg-gradient-to-r from-[#f2d184] to-[#ffeeb2] px-6 py-4  min-h-full text-center">

                            <h1 className='text-[#c48c46] text-balance text-xl tracking-wide md:text-lg lg:text-2xl  sm:text-lg'>Now
                                <span className='block  text-[#66451c] text-balance text-3xl font-semibold tracking-wide md:text-4xl lg:text-4xl lg:py-5  sm:text-3xl' >Find Your Life Partner </span> <span className='text-[#66451c]'>Easy and fast.</span> </h1>


                            <div className=''>
                                <img src={Asyk} alt="" className='hidden md:block lg:block lg:w-full sm:w-40 rounded-full bg-[#fee68b]' />
                            </div>

                            <div className='flex object-cover  animate-pulse  h-20 bottom-bg items-end'>

                            </div>
                        </div>

                        {/* Right Section (Form) */}
                        <form onSubmit={handleSubmit} className=" md:col-span-2 w-full py-6 px-6 sm:px-16">

                            <div className=" text-gray-900 mb-6 font-medium text-3xl ">
                                <h2 className=' font-light text-[15px]'>Start for free</h2>
                                Sign up to Matrimony
                                <h2 className='text-amber-950 text-[15px] font-medium'>Already have a Member? <a className='text-blue-500' href="Login"><Link to={'/login'}> Login Now </Link></a></h2>
                            </div>
                            <div className="space-y-6">


                                {/* Name Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Name:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="name"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>
                                {/* Age Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Age:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="age"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>
                                {/* Email Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email Id:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="email"
                                            type="email"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter email"
                                        />

                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Phone Number:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="phone"
                                            type="number"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter email"
                                        />

                                    </div>
                                </div>

                                {/* caste Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Caste:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="caste"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>


                                {/* DOB Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">DOB:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="dob"
                                            type="date"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>


                                {/* State Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">State:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="state"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>


                                {/* District Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">District:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="district"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>


                                {/* Height Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Height:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="height"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>

                                {/* Weight Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Weight:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="weight"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>


                                {/* Education Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Education:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="education"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>


                                {/* working Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Working:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="working"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>




                                {/* Password */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="password"
                                            type="password"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 "
                                            placeholder="Enter your password"

                                        />

                                    </div>
                                </div>


                                {/* Description Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Description:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="description"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>


                                {/* Gender Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Gender:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="gender"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>





                                {/* Remember me */}
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                        Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.

                                    </label>
                                </div>





                            </div>

                            {/* Submit Button */}
                            <div className="!mt-12">
                                <button

                                    type="submit"
                                    className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                                >
                                    Create Account
                                </button>
                            </div>




                        </form>
                    </div>
                </div>
            </div>


            {/* footer */}
            <Footer />
        </>
    )
}

export default Signup