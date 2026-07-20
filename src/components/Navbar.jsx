import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window.js";
import { Wifi, Battery, ToggleRight, CircleUserRound, Search } from "lucide-react";

const Navbar = ({ isMobile }) => {
    const { openWindow } = useWindowStore()



    return (
        <>
            {isMobile ?
                < nav className="">
                    <div className="grid grid-cols-[2fr_3fr_2fr] justify-between">
                        <div className="flex justify-start">
                            <time className="text-black dark:text-white">{dayjs().format('hh:mm A')}</time>
                        </div>
                        <div className=" w-full max-sm:flex h-8 items-center gap-2 bg-black backdrop-blur-md rounded-full"> </div>
                        <div className="flex items-center justify-end gap-3 text-black dark:text-white">
                            <img src="/icons/wifi.svg" alt="wifi" className="icon-hover dark:invert" />
                            <img src="/icons/battery.svg" alt="battery" className="icon-hover dark:invert" />
                        </div>
                    </div>
                </nav>
                :
                <nav>
                    <div>
                        <img src="/images/logo.svg" alt="logo" className="dark:invert" />
                        <p className='font-bold text-black dark:text-white'>Lokesh's Portfolio</p>

                        <ul>
                            {navLinks.map(({ id, name, type }) => (
                                <li key={id} onClick={() => openWindow(type)}>
                                    <p>{name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <ul>
                            {navIcons.map(({ id, img }) => (
                                <li key={id}>
                                    <img src={img} alt={`icon-${id}`} className="icon-hover dark:invert" />
                                </li>
                            ))}

                        </ul>

                        <time>{dayjs().format('ddd MMM DD h:mm A')}</time>

                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar
