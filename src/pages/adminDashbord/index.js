import Dashboard from "@/components/Dashboard/Dashboard";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const AdminDashBoard = () => {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser.length) {
    return (
      <>
        <Dashboard></Dashboard>
      </>
    );
  } else {
    router.push("/login");
  }
};

export default AdminDashBoard;
