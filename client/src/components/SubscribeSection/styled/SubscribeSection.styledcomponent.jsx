import styled from "styled-components";

export const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
export const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
export const ChannelName = styled.span`
  font-weight: 500;
`;
export const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
export const ChannelDescription = styled.p`
  font-size: 14px;
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const Subscribe = styled.button`
  background: #cc1a00;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
