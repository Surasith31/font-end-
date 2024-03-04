import { Outlet } from "react-router-dom";

function RootPage() {
  return (
    <>
    <div>
      <Outlet></Outlet>
    </div>
      
    </>
  );
}
export default RootPage;
