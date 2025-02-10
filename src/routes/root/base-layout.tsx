import { Outlet, ScrollRestoration, useLoaderData } from "react-router-dom";
import FooterBase from "@/components/Footer";
import { CookiesProvider } from "react-cookie";
import { loader } from "./root-loader";
import { NavBar } from "@/components/Navbar";

const BaseLayout = () => {
  const { isAuthenticated, user } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <ScrollRestoration />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-red-100 via-gray-100 to-stone-100">
        <NavBar isAuthenticated={isAuthenticated} user={user} />
        <main className="flex-[1]">
          <Outlet />
        </main>
        <FooterBase />
      </div>
    </CookiesProvider>
  );
};

export default BaseLayout;
