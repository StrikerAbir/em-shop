import Image from "next/image";
import img from "../../assets/images/section.webp";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { currentUserSet } from "@/redux/actionCreators/currentUserSet";
import { useRouter } from "next/router";
import { setAuthToken } from "@/utils/authToken";

const SignUpForm = () => {
  const router = useRouter();
    const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
      const password = form.password.value;
      const user_type='customer'

      const user = {
          name,mobile,email,password,user_type
      }
      saveUser(user)
  };
    const saveUser = (user) => {
        fetch("http://localhost:1000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
              if (data.user) {
                  dispatch(currentUserSet(data.user))
                  setAuthToken(data.user)
                  toast.success('Successfully registered');
                  router.push("/");
              } else {
                  toast.error(data.message)
            }
          });
            
}
  return (
    <div className="hero w-full py-10">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="lg:w-1/2 flex justify-center lg:mr-16">
          <Image className=" lg:w-full md:w-1/2 w-3/4" src={img} alt="" />
        </div>
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          {/* form */}
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>

              <input
                type="text"
                placeholder="mobile number"
                className="input input-bordered"
                name="mobile"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-green-500 hover:bg-green-400 border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <p className="text-center">
            Already have an account?
            <Link className="text-green-500 font-bold ml-2" href="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
