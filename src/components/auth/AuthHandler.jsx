import React from 'react';
import axios from 'axios';

import { SERVER_PORT, HOST, PROTOCOL } from '../../config';

export default class AuthHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: {}
        };
    }

    getServerUrl = path => {
        return `${PROTOCOL}://${HOST}:${SERVER_PORT}${path}`;
    };

    sayHello = () => {
        axios.get(this.getServerUrl('/')).then(answer => console.log('answer', answer));
    };

    requestToken = () => {
        axios.post(this.getServerUrl('/login'), { username: 'admin', password: 'admin' }).then(answer => {
            console.log('secure answer', answer);
            this.setState({ token: { token: answer.data.token, expiry: answer.data.expiry } });
        });
    };

    getProtectedResources = () => {
        axios
            .get(this.getServerUrl('/api/hello'), { headers: { 'x-access-token': this.state.token.token } })
            .then(answer => console.log('answer from protected resources:', answer));
    };

    getOAuthToken = () => {};

    getOAuthProtectedResources = () => {};

    render() {
        const { token } = this.state.token;
        return (
            <div>
                <div>{token}</div>
                <div>
                    <button onClick={this.sayHello}>Say hello</button>
                    <button onClick={this.requestToken}>Request token</button>
                    {token ? <button onClick={this.getProtectedResources}>Call protected resources</button> : null}

                    <button onClick={this.getOAuthToken}>Get OAuth token</button>
                    <button onClick={this.getOAuthProtectedResources}>Get OAuth protected resource</button>
                </div>
            </div>
        );
    }
}
