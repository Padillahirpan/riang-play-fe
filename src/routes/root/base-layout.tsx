import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/Navbar";

const BaseLayout = () => {
  //   const { user } = useLoaderData() as Awaited<ReturnType<typeof RootLoader>>;
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
    </div>
    //   <CookiesProvider defaultSetOptions={{ path: "/" }}>
    //     <div className='flex flex-col min-h-screen '>
    //       <Navbar user={user} />
    //       <main className='flex-[1]'>
    //         <Outlet />
    //       </main>
    //       <Footer />
    //       <ScrollRestoration />
    //     </div>
    //   </CookiesProvider>
  );
};

export default BaseLayout;
