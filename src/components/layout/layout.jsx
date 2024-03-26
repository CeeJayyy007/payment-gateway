import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col   h-screen md:container md:mx-auto md:px-4 ">
      <div className="flex flex-row h-screen">
        <div className="bg-gray-100 rounded-lg w-screen  flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
