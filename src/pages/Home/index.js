import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import StoreContext from '../../components/Store/Context';
import Header from '../../components/Header';
import api from '../../services/api';

import './styles.css';

function PagesHome() {
    const { nameUser, setNameUser, emailUser, setEmailUser } =
        useContext(StoreContext);
    const [cases, setCases] = useState([]);
    const [countries, setCountries] = useState('BR');
    const history = useHistory();
    useEffect(() => {
        if (nameUser === undefined || nameUser === null) {
            setNameUser('ADMIN');
        }
        if (emailUser === undefined || emailUser === null) {
            setEmailUser('admin@admin.com');
        }
    }, []);
    useEffect(() => {
        api.get(`countries/${countries}/confirmed`).then((res) => {
            setCases(
                res.data.sort((a, b) => {
                    if (b.confirmed > a.confirmed) {
                        return 1;
                    }
                    if (b.confirmed < a.confirmed) {
                        return -1;
                    }
                    return 0;
                }),
            );
        });
    }, []);

    const info = (props) => {
        history.push({
            pathname: `/covid/desc`,
            state: [props],
        });
    };
    return (
        <>
            <Header />
            <div className="container--home">
                <h1 className="title--home">
                    RANKING DE ESTADOS COM MAIS CASOS DE COVID-19 NO BRASIL
                </h1>
                <ul className="list--cases">
                    {cases.map((cas, index) => (
                        <li key={cas.uid}>
                            <p>{index + 1}</p>
                            <p>{cas.provinceState}</p>
                            <p>Casos Confirmados</p>
                            <p>{cas.confirmed}</p>
                            <InfoIcon
                                className="about"
                                onClick={() => info(cas)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default PagesHome;
