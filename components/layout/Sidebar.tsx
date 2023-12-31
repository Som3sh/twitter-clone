import { BsHouseFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetbutton from "./SidebarTweetbutton";

const Sidebar = () => {
  const items = [
    {
      label: "Home ",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications ",
      href: "/",
      icon: BsBellFill,
    },
    {
      label: "Profile ",
      href: "/users/123",
      icon: FaUser,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SidebarTweetbutton />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
