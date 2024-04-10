import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const UpdateProfile = () => {

    const {user} = useContext(AuthContext);

    const handelUpdate = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        console.log(name, photo);


        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
          .then(() => {
            alert('Updated')
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-1/2 flex-col">
                <h1 className="text-2xl font-bold mb-6 underline">Update Your Profile</h1>
                <div className="card shrink-0 rounded-none w-full bg-gray-500/25">
                    <form onSubmit={handelUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-black font-bold">Username</span>
                            </label>
                            <input type="text" name="name" placeholder={user.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-black font-bold">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="update your photo" className="input input-bordered" />
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