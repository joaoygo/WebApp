import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import Header from '../../components/Header';
import './styles.css';

function Dados() {
    const history = useHistory();
    const {
        nameUser,
        setNameUser,
        emailUser,
        setEmailUser,
        ageUser,
        setAgeUser,
    } = useContext(StoreContext);
    return (
        <>
            <Header />
            <div className="container--data">
                <h1 className="title--data">Alterar Dados</h1>
                <div className="data--now">
                    <h3>Dados Atuais</h3>
                    <p>
                        Nome: <input type="text" value={nameUser} disabled />
                    </p>
                    <p>
                        Email: <input type="text" value={emailUser} disabled />
                    </p>
                    <p>
                        Idade: <input type="text" value={ageUser} disabled />
                    </p>
                </div>
                <Formik
                    initialValues={{ name: '', email: '', age: '' }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = 'Campo Obrigatorio';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email,
                            )
                        ) {
                            errors.email = 'Email Invalido';
                        } else if (!values.name) {
                            errors.name = 'Campo Obrigatorio';
                        } else if (values.age <= 0) {
                            errors.age = 'Valor Invalido';
                        } else if (!values.age) {
                            errors.age = 'Campo Obrigatorio';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setNameUser(values.name);
                        setEmailUser(values.email);
                        setAgeUser(values.age);
                        setSubmitting(false);
                        history.push('/');
                    }}
                >
                    {({ values, errors, handleChange, handleSubmit }) => (
                        <form className="data--form" onSubmit={handleSubmit}>
                            <h3>Alterar Dados</h3>
                            <label htmlFor="name">
                                Nome:
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    onChange={handleChange}
                                    value={values.name}
                                />
                            </label>
                            <span>{errors.name && errors.name}</span>
                            <label htmlFor="email">
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </label>
                            <span>{errors.email && errors.email}</span>
                            <label htmlFor="age">
                                Idade:
                                <input
                                    type="number"
                                    name="age"
                                    id="age"
                                    onChange={handleChange}
                                    value={values.age}
                                />
                            </label>
                            <span>{errors.age && errors.age}</span>
                            <button type="submit">Enviar</button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default Dados;
