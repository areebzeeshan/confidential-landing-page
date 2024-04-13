import { BsLaptop } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';

const dropdownNavs = [

    {
        title: "Laptops",
        path: "javascript:void(0)",
        icon: <BsLaptop size={30} />,
    },
    {
        title: "Monitors",
        path: "javascript:void(0)",
        icon: <FiMonitor size={30} />,
    },
]

export const navigation = [
    { title: "Home", path: "/", isDrapdown: false },
    { title: "Categories", path: "javascript:void(0)", isDrapdown: true, navs: dropdownNavs },
    { title: "Top Products", path: "javascript:void(0)", isDrapdown: false },
    { title: "About Us", path: "javascript:void(0)", isDrapdown: false }
]