import { logoutUser } from "@/redux/actionCreators/currentUserSet";
import { toggleTheme } from "@/redux/actionCreators/themeToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


const NavBar = () => {
  const router=useRouter()
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser())
    router.push("/");
  };
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
      </li>
    </>
  );

  const menuItems2 = (
    <>
      <li tabIndex={0} className="z-10 font-semibold">
        {currentUser?.length > 0 && (
          <div className="justify-between">
            DashBoard
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </div>
        )}
        <ul className="p-2 bg-base-100">
          {currentUser[0]?.user_type === "customer" && (
            <>
              <li>
                <Link href="/myCart">My Cart</Link>
              </li>
            </>
          )}

          {currentUser[0]?.user_type === "admin" && (
            <>
              <li>
                <Link href="/adminDashbord">Admin Dashboard</Link>
                <Link href="/customer">Customer List</Link>
              </li>
            </>
          )}
        </ul>
      </li>
      <li className="font-semibold">
        {currentUser.length > 0 ? (
          <>
            <button onClick={handleLogOut} >
              Logout
            </button>
            <div className="border-l-2">
              <div className="avatar">
                <div className="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <FaUser></FaUser>
                </div>
              </div>
              <p>{currentUser[0]?.name}</p>
            </div>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
      <div className="flex justify-center items-center lg:ml-2">
        <input
          onClick={() => dispatch(toggleTheme())}
          type="checkbox"
          className="toggle"
        />
      </div>
    </>
  );
  return (
    <div
      className="border-0 border-b border-warning py-3"
      data-theme={theme ? "dark" : "light"}
    >
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              {menuItems2}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <div className="flex items-center">
              <h2 className="font-bold">EM Shop</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:w-full lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
            {menuItems2}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
