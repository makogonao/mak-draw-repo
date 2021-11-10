import React from 'react'
import "./navigation.css"

export default function File() {
    return (
        <ul className="panel-menu">
            <li className="transitions">Создать...</li>
            <li className="transitions">Открыть...</li>
            <li className="transitions">Сохранить</li>
            <li className="transitions">Сохранить как...</li>
            <li className="transitions">Печать...</li>
            <li className="transitions">Выход</li>
        </ul>
    )
}
