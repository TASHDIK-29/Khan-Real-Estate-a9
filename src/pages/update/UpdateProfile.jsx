import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { user, logOut } = useContext(AuthContext);


    const [name, setName] = useState(user.displayName);
    const [photo, setPhoto] = useState(user.photoURL);



    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhotoChange = (e) => {
        setPhoto(e.target.value);
    };


    const handelUpdate = (e) => {
        e.preventDefault();


        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                logOut();
                // location.reload();
                
            })
            .catch((error) => {
                console.log(error);
            });

            
            toast.success('Profile Updated');

    }

    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Update Profile | Khan Real Estate</title>
            </Helmet>
            <div className="hero-content w-full md:w-2/3 lg:w-1/2 flex-col">
                <h1 className="text-2xl font-bold mb-6 underline">Update Your Profile</h1>
                <div className="card shrink-0 rounded-none w-full bg-gray-500/25">
                    <form onSubmit={handelUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-black font-bold">Username</span>
                            </label>
                            <input type="text" name="name" value={name} onChange={handleNameChange} className="input input-bordered" required />
                        </div>
                        <div className="form-control " >
                            <label className="label">
                                <span className="label-text text-lg text-black font-bold">Email</span>
                            </label>
                            <div className="hover:tooltip" data-tip="Email can not be changed">
                                <input type="text" value={user.email} className="w-full input cursor-default input-bordered " readOnly />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-black font-bold">Photo</span>
                            </label>
                            <input type="text" value={photo} onChange={handlePhotoChange} name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-green-500 text-black font-bold p-3 rounded-lg">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;