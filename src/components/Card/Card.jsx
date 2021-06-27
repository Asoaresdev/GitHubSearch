import React from 'react'
import { CardContainer } from './styled'

export default function Card({ id, name,language, adressUrl }) {
    return (
        <CardContainer Key={id}>
            <h2>{ name }</h2>
            <p>Language: { language }</p>
            <a href={ adressUrl }> { adressUrl }</a>
        </CardContainer>
    )
}
