import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Chat from './Chat';
import { Login } from './Login';
import './App.css'

export default function Routes() {

    return (<div className='App'>
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
            </Switch>
        </BrowserRouter>
    </div>);
}