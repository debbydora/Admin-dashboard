import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";

//The forwardRef is used to reference this component as a child when it is called
// in the Transition Component.
const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
  const { logout } = useAuth();
  const navLinks = [
    {
      pathName: "/dashboard",
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      pathName: "/account",
      text: "Account",
      icon: <UserIcon />,
    },
    {
      pathName: "/billing",
      text: "Billing",
      icon: <CreditCardIcon />,
    },
  ];
  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-md">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img className="w-32 h-auto" src="/fire.svg" alt="company logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        {navLinks.map((nav) => (
          <Link href={nav.pathName} key={nav.text}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == nav.pathName
                  ? "bg-purple-100 text-purple-500"
                  : "text-gray-400 hover:bg-purple-100 hover:text-purple-500"
              }`}
            >
              <div className="mr-2 h-5 w-5">{nav.icon}</div>
              <div>
                <p>{nav.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="pl-6 py-3 mx-5 lg:mt-52 cursor-pointer"
        onClick={() => {
          logout();
          router.push("/login");
        }}
      >
        <p>Logout</p>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
