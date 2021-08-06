import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function SitemapLinks({isActive, setActive, children, title}){
    return(
    <div className="px-4 w-full md:w-2/12 mb-4 md:mb-0">
        <h5 className="text-lg font-semibold mb-2 relative font-big">
            {title}
            <button
                onClick={() => setActive(isActive)}
                className={[
                    "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-300 top-1/2",
                    isActive ? "rotate-0" : "rotate-180"
                ].join(" ")}
            >
                <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9.75 7.5L18.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </h5>
        <ul className={[
            "md:h-auto md:visible md:opacity-100 overflow-hidden transition duration-300",
            isActive ? "h-0 invisible bg-opacity-0" : "opacity-100"
        ].join(" ")}>
            {children}
        </ul>
    </div>
    )
    
} 



export default function AsideMenu() {
    const [actice, setActive] = useState(null);
    return (
        <section className="bg-gray-200">
            <div className="border-b border-gray-100 py-12 mt-16 px-4">
                <aside className="container mx-auto">
                    <div className="flex flex-wrap -mx-4 justify-center">
                        <SitemapLinks
                            setActive={setActive}
                            isActive={actice === 1 ? null : 1}
                            title="Overview"
                        >
                            <li>
                                <Link to="/nothing" className="hover:underline py-1 block">Shipping</Link>
                                <Link to="/nothing" className="hover:underline py-1 block">Refund</Link>
                                <Link to="/nothing" className="hover:underline py-1 block">Promotion</Link>
                            </li>
                        </SitemapLinks>

                        <SitemapLinks
                            setActive={setActive}
                            isActive={actice === 2 ? null : 2}
                            title="Company"
                        >
                            <Link to="/about" className="hover:underline py-1 block">About</Link>
                            <Link to="/contact" className="hover:underline py-1 block">Contact us</Link>
                            <Link to="/about" className="hover:underline py-1 block">Career</Link>
                        </SitemapLinks>

                        <SitemapLinks
                            setActive={setActive}
                            isActive={actice === 3 ? null : 3}
                            title="About"
                        >
                            <Link to="/about" className="hover:underline py-1 block">Career</Link>
                            <Link to="/nothing" className="hover:underline py-1 block">Office</Link>
                            <Link to="/nothing" className="hover:underline py-1 block">Blog</Link>
                        </SitemapLinks>

                        <SitemapLinks
                            setActive={setActive}
                            isActive={actice === 4 ? null : 4}
                            title="Help"
                        >
                            <Link to="/nothing" className="hover:underline py-1 block">Help Center</Link>
                            <Link to="/nothing" className="hover:underline py-1 block">Terms and Conditions</Link>
                            <Link to="/nothing" className="hover:underline py-1 block">Privacy Policy</Link>
                        </SitemapLinks>
                    </div>
                </aside>
            </div>
        </section>
    )
}
