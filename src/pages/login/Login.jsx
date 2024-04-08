import { Link, useLocation, useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate ()
    const page = location?.state || '/'; 

    const {loginUser, googleLogin, githubLogin} = useContext(AuthContext);

    const handelSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
            navigate(page);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const {email, password} = data;
        console.log(email, password);

        loginUser(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(page);
            alert('logged in successful');
        })
        .catch(error =>{
            console.log(error);
        })
        

    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-2/5">
                    <div className="card shrink-0 w-full  bg-base-100 border border-purple-400">
                        <h1 className="mx-auto mt-4 text-3xl font-bold text-gray-500">Please Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <hr />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500 font-bold">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-red-500 font-bold">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-600 text-white font-bold">Login</button>
                            </div>
                        </form>
                        <div className="flex justify-between mb-3">
                            <button onClick={() => handelSocialLogin(googleLogin)} className="flex items-center gap-2 border border-blue-500 rounded-md text-blue-500 font-semibold mx-auto py-1 px-3"><FaGoogle />Login with Google</button>
                            <button onClick={() => handelSocialLogin(githubLogin)} className="flex items-center gap-2 border border-gray-600 rounded-md text-gray-700 font-semibold mx-auto py-1 px-3"><FaGithub />Login with Github</button>
                        </div>
                        <div>
                            <p className="text-base mx-auto mb-3 text-center">Have no account ? please <Link to='/register' className="text-lg font-bold text-purple-600">Register</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;