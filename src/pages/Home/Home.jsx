import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import axios from 'axios'
import { Container, ProfileContainer, InputContainer, CardContainer, Button } from './styled'

import { useInput } from '../../hooks/useInput'
import { BASE_URL } from '../../constants/url'


export default function Home() {
    const [search, handleSearch] = useInput()
    const [dataProfile, setDataProfile] = React.useState([])
    const [dataRepos, setDataRepos] = React.useState([])


    const searchProfile = () => {
        axios
            .get(`${BASE_URL}/${search}?client_id=${ process.env.REACT_APP_CLIENT_ID }&client_secret=${ process.env.REACT_APP_CLIENT_SECRET }`)
            .then((response) => {
                setDataProfile(response.data)
            })
            .catch((error) => {
                alert(`${ error } \n Something went wrong, check if the user exists`)
            })
    }

    const getStarreds = () => {
        axios
            .get(`${BASE_URL}/${search}/starred?client_id=${ process.env.REACT_APP_CLIENT_ID }&client_secret=${ process.env.REACT_APP_CLIENT_SECRET }`)
            .then((response) => {
                setDataRepos(response.data)
            })
            .catch((error) => {
                alert(`${ error } \n omething went wrong, check if the user exists`)
            })
    }

    const getRepos = () => {
        axios
            .get(`${BASE_URL}/${search}/repos?client_id=${ process.env.REACT_APP_CLIENT_ID }&client_secret=${ process.env.REACT_APP_CLIENT_SECRET }`)
            .then((response) => {
                setDataRepos(response.data)
            })
            .catch((error) => {
                alert(`${ error } \n Something went wrong, check if the user exists`)
            })
    }


    return (
        <div>
            <Header />
            <InputContainer>
                <input 
                    type="text"
                    placeholder="User"
                    value = { search }
                    onChange = { handleSearch }
                />
                <Button
                    type="submit"
                    onClick = { searchProfile }
                >
                    Search
                </Button>   
            </InputContainer>

           {dataProfile.url &&
            <Container>
                <ProfileContainer>                
                    <CardContainer>
                        <img src={ dataProfile.avatar_url } alt="Avatar" />
                        <h1> { dataProfile.login }</h1>
                        <h2> { dataProfile.bio }</h2>
                        <p> { dataProfile.location }</p>
                        <p> { dataProfile.public_repos } Repositories</p>
                        <a target= '_blank' rel="noreferrer" href={ dataProfile.html_url } >{ dataProfile.html_url } </a>
                    </CardContainer>
                    <div>
                        <Button onClick={ getRepos }>Repos</Button>
                        <Button onClick={ getStarreds }>Starred</Button>
                    </div>
                </ProfileContainer>

                <div>
                    {dataRepos && 
                        dataRepos.map((item) => {
                            return(
                                <Card key = { item.id }
                                name = { item.name }
                                adressUrl = { item.html_url }
                                language = { item.language }
                                />
                            )
                        })
                    }
                </div>
            </Container>
           }
        </div>
    )
}
