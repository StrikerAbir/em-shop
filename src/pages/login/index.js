import LoginForm from "@/components/LoginForm/LoginForm";
import { useSelector } from "react-redux";


const Login = () => {
    const { theme } = useSelector((state) => state.theme);
    return (
      <>
        <div data-theme={theme ? "dark" : "light"} className="min-h-screen">
          <LoginForm></LoginForm>
        </div>
      </>
    );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};