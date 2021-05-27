import React from "react";
export function RepositoryItem(props) {
    const { repository } = props

    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>Acessar repositório</a>
        </li>
    );
}
