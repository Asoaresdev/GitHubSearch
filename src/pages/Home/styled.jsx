import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
    height: 2.5rem;
    margin-bottom: 1rem;
    font-size: large;
    border-radius: 5px;
    text-align: center;
    }
/* 
    button {
        height: 2.5rem;
        background: #FFB800;
        border: none;
        border-radius: 5px;
        font-size: large;
        cursor: pointer;
    } */
`

export const Button = styled.button`
     height: 2.5rem;
    background: #FFB800;
    border: none;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
    width: 7.5rem;
    margin-right: 1.5rem;

`
export const CardContainer = styled.section`

    img{
        width: 150px;
        height:150px;
        margin: 2.5rem 0;
        border-radius: 50%;
    }

`