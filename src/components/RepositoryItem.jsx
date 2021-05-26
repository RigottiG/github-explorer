import React from "react";
export function RepositoryItem(props) {
    const { repository } = props

    return (
        <li>
            <strong>{repository}</strong>
            <p>Forms in React</p>

            <a href="#">Acessar repositório</a>
        </li>
    );
}
