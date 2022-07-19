import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.type !== "horizontal" && "360px"};
  margin-bottom: ${(props) => (props.type === "horizontal" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "horizontal" && "flex"};
  gap: 10px;
`;

export const Img = styled.img`
  width: ${(props) => (props.type === "horizontal" ? "40%" : "100%")};
  height: ${(props) => (props.type === "horizontal" ? "120px" : "202px")};
  background: #999;
  flex: 1;
`;

export const Details = styled.div`
  display: flex;
  margin: ${(props) => props.type !== "horizontal" && "16px"};
  gap: 12px;
  flex: 1;
`;

export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
  display: ${(props) => props.type === "horizontal" && "none"};
`;

export const Texts = styled.div``;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
export const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
export const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
