import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import placeholderImg from "../../assets/user.png"



const Nav = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'border bg-slate-50 py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'border bg-slate-50 py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to='/bookmark'>Bookmarks</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'border bg-slate-50 py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to='/update'>Update Profile</NavLink></li>

    </>


    const handelLogout = () => {
        logOut();
    }


    return (
        <div className=" navbar bg-base-100 flex flex-col md:flex-row">
            <div className=" navbar-start w-full md:w-3/5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="text-xl md:text-3xl font-semibold"><span className="text-green-700 font-bold text-3xl md:text-4xl underline">KHAN</span> Real Estate</Link>
            </div>
            <div className=" navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className=" navbar-end w-full md:w-2/3 flex justify-center md:justify-end space-y-2">
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className=" border border-green-500 p-1 w-14 rounded-full hover:tooltip tooltip-open hover:tooltip-bottom hover:z-10" data-tip={user.displayName ? user.displayName : 'User name not found'}>
                                <img className="w-full rounded-full" src={user.photoURL ? user.photoURL : placeholderImg} alt="" />
                            </div>
                            <Link onClick={handelLogout} to='/login' className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Logout</span>
                            </Link>
                        </div>
                        : <Link to='/login' className="relative px-5 py-3 overflow-hidden font-medium text-white bg-green-500 border border-gray-100 rounded-lg shadow-inner group">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Login</span>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Nav;