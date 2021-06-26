import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.language}</p>
            <a href={props.adressUrl}>{props.adressUrl}</a>
        </div>
    )
}
