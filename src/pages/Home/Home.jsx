import React from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { InputContainer, CardContainer, Button } from './styled'

import { useInput } from '../../hooks/useInput'
import { BASE_URL } from '../../constants/url'
import Card from '../../components/Card/Card'


export default function Home() {
    const [search, handleSearch, resetInput] = useInput()
    const [dataProfile, setDataProfile] = React.useState([])
    // const [dataRepos, setDataRepos] = React.useState([])
    const [dataStarred, setDataStarred] = React.useState([])


    const searchProfile = () => {
        axios
            .get(`${BASE_URL}/${search}?client_id=${ process.env.REACT_APP_CLIENT_ID }&client_secret=${ process.env.REACT_APP_CLIENT_SECRET }`)
            .then((response) => {
                setDataProfile(response.data)
                // resetInput()
                })
            .catch((error) => {
                alert(error)
            })
    }

    const getStarred = () => {
        axios
            .get(`${BASE_URL}/${search}/starred?client_id=${ process.env.REACT_APP_CLIENT_ID }&client_secret=${ process.env.REACT_APP_CLIENT_SECRET }`)
            .then((response) => {
                setDataStarred(response.data)
                // resetInput()
                })
            .catch((error) => {
                alert(error)
            })
    }
    console.log(dataStarred);

    return (
        <div>
            <Header />
            <InputContainer>
                <input 
                    type="text"
                    placeholder="Usuário"
                    value = { search }
                    onChange = { handleSearch }
                />
                <Button
                    onClick = { searchProfile }
                >
                    Search
                </Button>
            </InputContainer>

           {dataProfile.url &&
           <div>
                <CardContainer>
                    <img src={dataProfile.avatar_url} alt="" />
                    <p> {dataProfile.bio}</p>
                    <p> {dataProfile.location}</p>
                    <p> { dataProfile.public_repos } Repositories</p>
                    <a target= '_blank' rel="noreferrer" href={ dataProfile.html_url} >{dataProfile.html_url} </a>
                </CardContainer>
                <div>
                    <Button>Repos</Button>
                    <Button onClick={getStarred}>Starred</Button>
                </div>
                <div>
                    {dataStarred && dataStarred.map((item) => {
                        return(
                            <Card 
                            name = {item.name}
                            adressUrl = { item.html_url }
                            language = {item.language}
                            />
                        )
                    })}
                </div>
           </div>
           }
        </div>
    )
}
