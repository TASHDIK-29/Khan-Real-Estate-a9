import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-2/5">
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <h1 className="mx-auto mt-4 text-3xl font-bold text-gray-500">Please Login</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-600 text-white font-bold">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-base mx-auto mb-3 text-center">Have no account ? please <Link className="text-lg font-bold text-purple-600">Register</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;