import styled from 'styled-components';

type IMessageBlockProps = {isCurrentUser: boolean, userName: string};
export const MessageBlock = styled.div<IMessageBlockProps>`
  background-color: ${p => p.isCurrentUser ? 'rgb(255, 255, 255)' : 'rgb(162 210 255)'};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  overflow-x: hidden;
  width: 80%;
  float: ${p => p.isCurrentUser ? 'left' : 'right'};
  text-align: ${p => p.isCurrentUser ? 'left' : 'right'};

&::before {
  content: '${p => p.userName}';
  position: absolute;
  margin-top: -28px;
  margin-left: -11px;
  background: white;
  font-weight: 600;
  padding: 2px;
  border: 0.85px solid #a79f9f42;
  color: black;
  border-radius: 4px 4px 4px 0px;
}
`;