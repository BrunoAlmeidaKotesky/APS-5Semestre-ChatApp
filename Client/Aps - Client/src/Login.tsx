import { useNavigate } from "react-router";
import { useChatStore } from "./store";
import type {MouseEvent, MouseEventHandler} from "react";

export const Login = () => {
    const navigate = useNavigate();
    const { setUserName, userName } = useChatStore(state => state);

    const navigateTo: MouseEventHandler<HTMLButtonElement> = (e) => { navigate(e.currentTarget.dataset['path'] as string); }
    const defaultBtnProps = (roomNb: number) => ({
        className: 'loginButton', 
        onClick: navigateTo, 
        disabled: !userName, 
        'data-path': `/chat?sala=${roomNb}`
    });
    
    return (
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor="username">Nome do usuário: </label>
                <input value={userName} type="text" id="username" onChange={(e) => {
                    setUserName(e.target.value);
                }} />
            </div>
            <div style={{ display: 'grid', gap: 8, width: '100%', placeContent: 'center', margin: '0 auto', marginTop: 12 }}>
                <button {...defaultBtnProps(1)}>Entrar no chat</button>
            </div>
        </div>
    );
}