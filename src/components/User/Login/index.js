import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../Store/Context';
import './styles.css';

function initialState() {
    return { user: '', senha: '' };
}

function logIN({ user, senha }) {
    if (user === 'admin' && senha === 'admin') {
        return { token: '1234' };
    }
    return { error: 'Usuário ou senha invalido' };
}

function UserLogin() {
    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();
    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });
    }
    function onSubmit(event) {
        event.preventDefault();

        const { token } = logIN(values);

        if (token) {
            setToken(token);
            history.push('/');
        } else {
            setValues(initialState);
        }
    }

    return (
        <div className="login--page">
            <form className="login--form" onSubmit={onSubmit}>
                <label htmlFor="user">
                    Usuario
                    <input
                        type="text"
                        name="user"
                        id="user"
                        onChange={onChange}
                        value={values.user}
                    />
                </label>

                <label htmlFor="senha">
                    Senha
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        onChange={onChange}
                        value={values.senha}
                    />
                </label>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default UserLogin;
