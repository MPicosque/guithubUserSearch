import React, { useState } from 'react';
import Moment from 'moment';
import axios from 'axios';
import './styles.css';
import ImageLoader from 'core/components/Loaders/ImageLoader';
import InfoLoader from 'core/components/Loaders/InfoLoader';

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
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResultData(undefined);
        setIsActive(false);
        setPlaceHolderValue('Usuário Github');
        setIsLoading(true);

        axios(`${BASE_URL}/${searchValue}`)
        .then(
            response => {setResultData(response.data);
            setIsActive(true);
            })
        .catch(
            () => {console.error('Houve um errro ao buscar os dados!');
            setSearchValue('');
            setPlaceHolderValue('Usuário não encontrado - Usuário Github');
            })
        .finally(() => {
                setIsLoading(false);
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
            {(isActive || isLoading) ? (
                <div className="Result-conteiner">
                    <div className="Result-content">
                        <>
                        {isLoading ? <ImageLoader /> : (
                            <div className="left-column">
                                <img src={resultData?.avatar_url} alt="IMG PROFILE" className="img-profile"/>
                                <form action={resultData?.html_url} target="_blank">
                                    <button className="btn-icon">Ver Perfil</button>
                                </form>
                            </div>
                        )}
                        </>
                        <>
                        {isLoading ? <InfoLoader /> : (
                            <div className="right-column">
                                <div className="result-fields">
                                    <span className="result-fields-box">Repositórios públicos: {resultData?.public_repos}</span>
                                    <span className="result-fields-box">Seguidores: {resultData?.following}</span>
                                    <span className="result-filds-box">Seguindo: {resultData?.followers}</span>
                                    <div className="result-info">
                                        <h6 className="result-info-title">
                                            Informações
                                        </h6>
                                        <strong className="result-info-data">
                                            Empresa: {resultData?.company}
                                        </strong>
                                        <strong className="result-info-data">
                                            Website/Blog: {resultData?.blog}
                                        </strong>
                                        <strong className="result-info-data">
                                            Localidade: {resultData?.location}
                                        </strong>
                                        <strong className="result-info-data">
                                            Membro desde: {Moment(resultData?.created_at).format("DD/MM/YYYY")}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        )}
                        </>
                    </div>
                </div>
             ) : null }
        </>
    )
}
  
export default Search;