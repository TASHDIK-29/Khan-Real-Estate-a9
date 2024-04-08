import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import placeholderImg from "../../assets/user.png"
const Nav = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link>Update Profile</Link></li>


    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">KHAN Real Estate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className="w-14 rounded-full hover:tooltip tooltip-open hover:tooltip-bottom hover:z-10" data-tip={user.displayName ? user.displayName : 'User name not found'}>
                                <img className="w-full rounded-full" src={user.photoURL ? user.photoURL : placeholderImg} alt="" />
                            </div>
                            <Link onClick={logOut} to='/login' className="btn">Logout</Link>
                        </div>
                        : <Link to='/login' className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default Nav;