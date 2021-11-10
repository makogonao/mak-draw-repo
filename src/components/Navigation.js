import React from "react";
import "../App.css";
import File from "./navigation/File";
import View from "./navigation/View";
import Reference from "./navigation/Reference";
import { useState, useEffect } from "react";
import Effects from "./navigation/Effects";

export default function Navigation() {
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        //console.log(selectedItem);
    });

    return (
        <nav>
            <ul>
                <div
                    onMouseOver={() => setSelectedItem("file")}
                    onMouseLeave={() => setSelectedItem(null)}
                >
                    <li className="transitions">Файл</li>
                    {selectedItem === "file" && <File />}
                </div>

                <div
                    onMouseOver={() => setSelectedItem("effects")}
                    onMouseLeave={() => setSelectedItem(null)}
                >
                    <li className="transitions">Эффекты</li>
                    {selectedItem === "effects" && <Effects />}
                </div>

                <div
                    onMouseOver={() => setSelectedItem("view")}
                    onMouseLeave={() => setSelectedItem(null)}
                >
                    <li className="transitions">Вид</li>
                    {selectedItem === "view" && <View />}
                </div>

                <div
                    onMouseOver={() => setSelectedItem("reference")}
                    onMouseLeave={() => setSelectedItem(null)}
                >
                    <li className="transitions">Справка</li>
                    {selectedItem === "reference" && <Reference />}
                </div>
            </ul>
        </nav>
    );
}
