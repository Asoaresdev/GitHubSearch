import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width:481px){
        grid-template-columns: 1fr;
    }

        a{
            text-decoration: none;
            color: black;
        }

        h2{
            text-transform: uppercase;
            font-size: 1rem;
        }

        button:hover{
        color: white;
        }
        
        button:focus{
        background: #b28000;
        color: white;
        }
`

export const ProfileContainer = styled.div`
    border-right: 1px solid #FFB800;;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

        input {
        height: 2.5rem;
        font-size: large;
        border-radius: 5px;
        text-align: center;
        }
`

export const Button = styled.button`
    height: 2.5rem;
    background: #FFB800;
    border: none;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
    width: 7.5rem;
    margin: 1.5rem;
`

export const CardContainer = styled.section`

    img{
        width: 150px;
        height:150px;
        margin: 2rem 0;
        border-radius: 50%;
    }

`