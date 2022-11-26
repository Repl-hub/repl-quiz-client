import * as fiIcon from 'react-icons/fi';

const navIcons = [
    {
        id:1,
        name: "Home",
         path: "/",
        icon: <fiIcon.FiHome />,
    },
    {
        id:2,
        name: "Profile",
         path: "/profile",
        icon: <fiIcon.FiUser />,
    },
    {
        id:3,
        name: "Leadership",
         path: "/board",
        icon: <fiIcon.FiBarChart2 />,
    },
    {
        id:4,
        name: "Certificate",
         path: "/certificate",
        icon: <fiIcon.FiAward />,
    },
    {
        id:5,
        name: "Contact Us",
         path: "/contact",
        icon: <fiIcon.FiAtSign />,
    },
    
];
export default navIcons;
