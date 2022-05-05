import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Chat from './Chat';
import { Login } from './Login';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
            </Switch>
        </BrowserRouter>
    );
}