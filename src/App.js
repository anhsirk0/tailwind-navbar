import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  ChatIcon,
  CameraIcon,
  CogIcon,
} from "@heroicons/react/outline";

function App() {
  const iconClasses = "h-24 w-24 rounded-full p-6";
  const [links, setLinks] = useState([
    {
      title: "Home",
      Icon: () => <HomeIcon className={iconClasses} />,
      isActive: true,
    },
    {
      title: "Profile",
      Icon: () => <UserIcon className={iconClasses} />,
      isActive: false,
    },
    {
      title: "Message",
      Icon: () => <ChatIcon className={iconClasses} />,
      isActive: false,
    },
    {
      title: "Photos",
      Icon: () => <CameraIcon className={iconClasses} />,
      isActive: false,
    },
    {
      title: "Settings",
      Icon: () => <CogIcon className={iconClasses} />,
      isActive: false,
    },
  ]);

  return (
    <div className="bg-gray-800 text-gray-700 min-h-screen min-w-screen flex items-center justify-center">
      <div className="bg-gray-50 px-12 py-2 rounded-xl h-28">
        <ul className="flex flex-row items-center gap-12 relative">
          {links.map((link, index) => (
            <li key={index}>
              <a
                onClick={(e) => {
                  setLinks(
                    links.map((l) => {
                      if (l.title === link.title) {
                        return {
                          ...l,
                          isActive: true,
                        };
                      }
                      return {
                        ...l,
                        isActive: false,
                      };
                    })
                  );
                }}
                className={`flex flex-col gap-4 items-center ${
                  link.isActive && "-translate-y-16"
                } transition ease-in-out duration-600 group focus:outline-none`}
                href="#!"
              >
                <div
                  className={`${
                    link.isActive &&
                    "bg-emerald-400 ring-10 ring-gray-800 rounded-full"
                  }`}
                >
                  {<link.Icon />}
                </div>
                <span
                  className={`text-center text-lg opacity-0 ${
                    link.isActive && "opacity-100"
                  }`}
                >
                  {link.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
