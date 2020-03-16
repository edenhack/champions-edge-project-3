import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <a className = "navbar-brand" href="/">
                <h3>Champion's Edge</h3>
            </a>
            <a className = "navbar-item" href="/champion">
                Champions
            </a>
            <a className = "navbar-item" href="/summoner">
                Summoner
            </a>
            <a className = "navbar-item" href="/leaderboards">
                Leaderboards
            </a>
            <a className = "navbar-item-twitch" href="/promatches">
                Pro Matches
            </a>
            <a className = "navbar-item-twitch" href="/livestreams">
                Livestreams
            </a>
        </nav>
    );
}

export default Nav;
