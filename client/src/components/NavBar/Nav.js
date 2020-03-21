import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <a className = "navbar-brand" href="/">
                <img src="https://www.bing.com/th?id=OIP.HIUJcNa-EMiTBiChvxHJKQHaGu&pid=Api&rs=1" alt= "Champion's Edge Homepage"/>
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
