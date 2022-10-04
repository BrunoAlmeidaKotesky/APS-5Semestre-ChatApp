import { useState, useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { WEBSOCKET_URL } from './constants';
import { MessageBlock } from './MessageBlock';
import { useChatStore } from './store';

interface IMessageData {
  room: string;
  user: string;
  message: string;
}

const Chat = () => {
  const userName = useChatStore(state => state.userName);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [messageHistory, setMessageHistory] = useState<MessageEvent[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const { lastMessage, readyState, sendJsonMessage, getWebSocket } = useWebSocket(WEBSOCKET_URL);

  useEffect(() => { 
    if (!userName) return navigate('/'); 
    //Disconnect from websocket if the server is closed
    document.addEventListener('unload', () => {
      const wb = getWebSocket();
      wb.close();
    });
  }, []);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage as any));
    }
  }, [lastMessage]);

  const handleClickSendMessage = useCallback(() => {
    if(readyState === ReadyState.OPEN && currentMessage) {
      sendJsonMessage({room: searchParams.get('sala'), user: userName, message: currentMessage});
      setCurrentMessage('');
    }
  }, [currentMessage, readyState]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Conectando...',
    [ReadyState.OPEN]: 'Aberta',
    [ReadyState.CLOSING]: 'Fechando...',
    [ReadyState.CLOSED]: 'Fechada',
    [ReadyState.UNINSTANTIATED]: 'Indefinida',
  }[readyState];

  const btnDisabled = useMemo(() => readyState !== ReadyState.OPEN || !currentMessage, [readyState, currentMessage]);

  return (
    <div>
      <p>Status da conexão: {connectionStatus}</p>
      <div className='chatContainer'>
        <div className='chatBoxList'>
          {messageHistory.map((message, idx) => {
            const parsedData: IMessageData = JSON.parse(message.data);
            const isCurrentUser = parsedData.user === userName;
            return (
              <MessageBlock 
                isCurrentUser={isCurrentUser} 
                userName={parsedData.user}key={idx}>
                {parsedData.message}
              </MessageBlock>
            )
          })}
        </div>
        <div className='sendMessageContainer'>
          <input type="text" value={currentMessage} onChange={(e) => {
            setCurrentMessage(e.target.value);
          }} />
          <button
            style={{color: btnDisabled ? 'gray' : 'black'}}
            disabled={btnDisabled} 
            onClick={handleClickSendMessage}>Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;