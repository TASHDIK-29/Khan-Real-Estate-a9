import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext);

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