
import toast from "react-hot-toast";

import img from "../../assets/images/section.webp";
import Link from "next/link";
import Image from "next/image";


const LoginForm = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

   
  };

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
