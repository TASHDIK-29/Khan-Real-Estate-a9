import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-2/5">
                    <div className="card shrink-0 w-full  bg-base-100 border border-purple-400">
                        <h1 className="mx-auto mt-4 text-3xl font-bold text-gray-500">Please Register</h1>
                        <form className="card-body">
                            <hr />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-600 text-white font-bold">Register</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-base mx-auto mb-3 text-center">Already have an account ? please <Link to='/login' className="text-lg font-bold text-purple-600">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;