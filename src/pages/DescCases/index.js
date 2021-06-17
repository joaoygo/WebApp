import React from 'react';
import Header from '../../components/Header';
import './styles.css';

function DescCases(props) {
    const data = props.location.state;
    return (
        <>
            <Header />
            <div className="container--info-state">
                <div className="infos--state">
                    <h1>{data[0].provinceState}</h1>
                    <p>
                        Casos Ativos:
                        <input value={data[0].active} disabled />
                    </p>
                    <p>
                        Casos Confirmados:
                        <input value={data[0].confirmed} disabled />
                    </p>
                    <p>
                        Mortos:
                        <input value={data[0].deaths} disabled />
                    </p>
                    <p>
                        Recuperados:
                        <input value={data[0].recovered} disabled />
                    </p>
                </div>
            </div>
        </>
    );
}
export default DescCases;
