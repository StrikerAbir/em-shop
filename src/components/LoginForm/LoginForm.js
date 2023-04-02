
import toast from "react-hot-toast";

import img from "../../assets/images/section.webp";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { currentUserSet } from "@/redux/actionCreators/currentUserSet";
import { setAuthToken } from "@/utils/authToken";
import { useRouter } from "next/router";


const LoginForm = () => {
    const router=useRouter()
    const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const mobile = form.mobile.value;
      const password = form.password.value;
      const user={mobile,password}
    loginUser(user)
  };
    const loginUser = (user) => {
       fetch("http://localhost:1000/loginUser", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(user),
       })
         .then((res) => res.json())
           .then((data) => {
          dispatch(currentUserSet(data));
          setAuthToken(data);
          toast.success("Successfully Login");
          router.push("/");
         });
  }

  return (
    <div className="hero w-full py-20">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="lg:w-1/2 flex justify-center lg:mr-16">
          <Image src={img} alt="" />
        </div>
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
          {/* form */}
          <form onSubmit={handleLogin} className="card-body ">
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <Link href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-green-500 hover:bg-green-400 border-none"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center">
            New Here?
            <Link href="/signUp" className="text-green-500 font-bold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
