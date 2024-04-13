import { AiFillPoundCircle, AiOutlineDashboard, AiOutlineLogout, AiOutlineMenu, AiOutlineOrderedList } from "react-icons/ai";

export const SidebarNav = [
    {
        name : "Dashboard",
        icon: <AiOutlineDashboard />
    },
    {
        name : "Products",
        icon: <AiOutlineOrderedList />
    },
    {
        name : "Create Products",
        icon: <AiFillPoundCircle />
    },
    {
        name : "Orders",
        icon: <AiOutlineMenu />
    },
    {
        name : "Logout",
        icon: <AiOutlineLogout />
    },
];