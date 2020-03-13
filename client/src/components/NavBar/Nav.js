import React from "react";

function Nav() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
            <a className = "navbar-brand" href="/">
                Champion's Edge
            </a>
            <a className = "navbar-item" href="/champion">
                Champions
            </a>
            <a className = "navbar-item" href="/summoner">
                Summoner
            </a>
        </nav>
    );
}

export default Nav;
