import Header from "./header";
import Login from "./login";
import React from "react";
import Card from "./card";

export default function Layout() {
    return (
        <div>
            <Header/>
            <div className="flex">
                <div> Sidebar</div>
                <div>
                    <Login/>
                </div>
                <div>
                    <Card/>
                </div>
            </div>
        </div>
    )
}