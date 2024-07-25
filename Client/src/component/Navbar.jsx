import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BsSearchHeartFill } from "react-icons/bs";



const Navbar = () => {
    return (
        <nav className=''>
            <div className="uper-nav w-full h-20  flex justify-around ">


                <div className="left">
                    <a href=""><img src="https://darshantyres.com/wp-content/uploads/2019/04/200x80-B.png" alt="logo" /></a>
                </div>
                <div className="right flex gap-5">
                    <div className="gmail flex gap-2 items-center">
                        <div className='text-5xl' ><MdMarkEmailUnread /></div>
                        <div className=''>

                            <h5 className='text-[#5eead4]'>EMAIL</h5>
                            <h6 className='font-bold'> darshantyressocial@gmail.com</h6>
                        </div>
                    </div>
                    <div className="Callus flex gap-2 items-center">
                        <div className='text-5xl'><MdOutlineContactPhone /></div>
                        <div className=''>

                            <h5 className='text-[#5eead4]'>CALL US</h5>
                            <h6 className='font-bold'>9881412345</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu w-full bg-[#00aeef] flex flex-row justify-around">
                <ul className='flex gap-2 cursor-pointer font-bold text-white text-[17px]'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link>About us</Link></li>
                    <li><Link>Service</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Brands</Link></li>
                    <li><Link>Gallery</Link></li>
                </ul>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <BsSearchHeartFill className='text-white hover:text-yellow-200 text-3xl border-l-2 border-stone-50 ps-2 ' onClick={() => document.getElementById('item_search').showModal()} />
                <dialog id="item_search" className="modal ">
                    <div className="modal-box bg-[#00aeef]">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className='text-white text-2xl p-4 '>Looking For something ?</h3>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent text-white">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                </dialog>
            </div>
        </nav>

    )
}

export default Navbar