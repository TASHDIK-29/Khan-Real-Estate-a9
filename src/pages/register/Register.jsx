import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { name, email, password, photo } = data;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const [toggle, setToggle] = useState(false);

    const handleToggle = state => {
        setToggle(state);
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-2/5">
                    <div className="card shrink-0 w-full  bg-base-100 border border-purple-400">
                        <h1 className="mx-auto mt-4 text-3xl font-bold text-gray-500">Please Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <hr />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-500 font-bold">This field is required</span>}
                            </div>
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
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="PhotoURL" className="input input-bordered"
                                    {...register("photo", { required: false })}
                                />
                                {errors.photo && <span className="text-red-500 font-bold">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={toggle ? "text" : "password"} placeholder="password" className="input input-bordered w-full"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className="text-red-500 font-bold">This field is required</span>}
                                    <span onClick={() => handleToggle(!toggle)} className="absolute top-4 right-2 cursor-pointer">{toggle ? <FaEyeSlash /> : <FaEye />}</span>
                                </div>
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