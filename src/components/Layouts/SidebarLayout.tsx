import Sidebar from "../SideBar";
import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-[#FAFAFA] w-full">
        <Outlet />
      </main>
    </div>
  );
}
