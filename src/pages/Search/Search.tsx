import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const BASE_URL = 'https://api.github.com/users'

type Result = {
    avatar_url: string;
    public_repos: string;
    following: string;
    followers: string;
    company: string;
    blog: string;
    location: string;
    created_at: string;
    html_url: string;
}

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [resultData, setResultData] = useState<Result>();
    const [placeHolderValue, setPlaceHolderValue] = useState('Usuário Github');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResultData(undefined);

        axios(`${BASE_URL}/${searchValue}`)
        .then(response => setResultData(response.data))
        .catch(
            () => {console.error('Houve um errro ao buscar os dados!');
            setSearchValue('');
            setPlaceHolderValue('Usuário não encontrado - Usuário Github');
            });
    }

    return (
        <>
            <div className="Search-conteiner">
                <div className="Search-content">
                    <h1 className="Search-content-title">
                        Encontre um perfil Github
                    </h1>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="Search-input-text"
                            placeholder={placeHolderValue}
                            value={searchValue}
                            onChange={event => setSearchValue(event.target.value)}
                        />
                        <button className="btn-icon">Encontrar</button>
                    </form>
                </div>
            </div>
            {resultData && (
//                setDateValue(Moment(resultData.created_at).format("DD-MM-YYYY")),
                <div className="Result-conteiner">
                    <div className="Result-content">
                        <>
                            <div className="left-column">
                                <img src={resultData.avatar_url} alt="IMG PROFILE" className="img-profile"/>
                                <form action={resultData.html_url} target="_blank">
                                    <button className="btn-icon">Ver Perfil</button>
                                </form>
                            </div>
                        </>
                        <>
                            <div className="right-column">
                                <div className="result-fields">
                                    <span className="result-fields-box">Repositórios públicos: {resultData.public_repos}</span>
                                    <span className="result-fields-box">Seguidores: {resultData.following}</span>
                                    <span className="result-filds-box">Seguindo: {resultData.followers}</span>
                                    <div className="result-info">
                                        <h6 className="result-info-title">
                                            Informações
                                        </h6>
                                        <strong className="result-info-data">
                                            Empresa: {resultData.company}
                                        </strong>
                                        <strong className="result-info-data">
                                            Website/Blog: {resultData.blog}
                                        </strong>
                                        <strong className="result-info-data">
                                            Localidade: {resultData.location}
                                        </strong>
                                        <strong className="result-info-data">
                                            Membro desde: {resultData.created_at}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            )}
        </>
    )
}
  
export default Search;