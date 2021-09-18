import requests from "../utils/requests";
import router, { useRouter } from "next/router";

function Nav() {
    return (
        <nav className="relative px-1 w-10/12 mx-auto">
            <div className="flex pr-10 sm:pr-20 overflow-x-scroll text-2xl whitespace-nowrap space-x-10 sm:space-x-20 scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)} 
                        className="cursor-pointer transition duration-100 transform hover:text-white hover:underline active:text-red-500"
                    >{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
        </nav>
    )
}

export default Nav
