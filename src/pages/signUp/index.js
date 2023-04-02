import SignUpForm from "@/components/SignUpForm/SignUpForm";
import { useSelector } from "react-redux";

const SignUp = () => {
    const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div data-theme={theme ? "dark" : "light"} className="min-h-screen">
        <SignUpForm></SignUpForm>
      </div>
    </>
  );
};

export default SignUp;
SignUp.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
