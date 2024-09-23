import { Outlet, Link, NavLink } from "react-router-dom";
import SocialSection from "../components/SocialSection";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="bg-red-600 w-full flex items-center text-white font-semibold text-lg">
          <Link className="mr-8 p-5" to="/">
            <img
              src="https://www.megacine.it/wp-content/uploads/2023/04/logo_white.png"
              className="h-14 px-10 mr-4 cursor-pointer"
              alt="logo"
            />
          </Link>
          <div className="flex space-x-10 mr-10">
            <NavLink
              className={({ isActive }) =>
                isActive ? " underline" : "transition ease-out hover:text-black"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " underline" : "transition ease-out hover:text-black"
              }
              to="/details"
            >
              Prezzi e promo
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " underline" : "transition ease-out hover:text-black"
              }
              to="/work-with-us"
            >
              Lavora con noi
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " underline" : "transition ease-out hover:text-black"
              }
              to="/subscriptions"
            >
              Cinecard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " underline" : "transition ease-out hover:text-black"
              }
              to="/contacts"
            >
              Contatti
            </NavLink>
          </div>

          <SocialSection />
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
