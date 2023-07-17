import React, { useEffect, useRef } from "react";
import "./Header.css";

function Header() {
    const headerRef = useRef(null);
    let render = true;
    useEffect(() => {
        if(render) {
            const scrollWatcher = document.createElement('div');

            scrollWatcher.setAttribute('data-scroll-watcher', '');

            headerRef.current.before(scrollWatcher);

            const navObserver = new IntersectionObserver(entries => {
                headerRef.current.classList.toggle('header__show', !entries[0].isIntersecting)
            }, {rootMargin: "50px 0px 0px 0px"});

            navObserver.observe(scrollWatcher);
        }
        render = true;
    }, [])
    return (
        <div className="header" ref={headerRef}>
            <div>
                <h2>TRIARD</h2>
                {/* <a>Envisioning your Imagination</a> */}

            </div>
        </div>
    );
}

export default Header;
