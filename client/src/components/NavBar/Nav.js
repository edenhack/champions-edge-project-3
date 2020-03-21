import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-light">
            <a className = "navbar-brand" href="/">
                <img src="../../images/riot logo.png" alt= "Champion's Edge Homepage"/>
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
