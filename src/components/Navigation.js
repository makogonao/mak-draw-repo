import React from "react";
import "../App.css";
import File from "./navigation/File";
import { useState, useEffect } from "react";

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
                    onMouseOver={() => setSelectedItem("view")}
                    onMouseLeave={() => setSelectedItem(null)}
                >
                    <li className="transitions">Вид</li>
                    {selectedItem === "view" && <File />}
                </div>

                <div
                    onMouseOver={() => setSelectedItem("reference")}
                    onMouseLeave={() => setSelectedItem(null)}
                >
                    <li className="transitions">Справка</li>
                    {selectedItem === "reference" && <File />}
                </div>
            </ul>
        </nav>
    );
}
