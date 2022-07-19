import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;
export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background: transparent;
  width: 100%;
`;
export const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  background: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0px;
`;
export const More = styled.div`
  display: flex;
  margin-top: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  text-decoration: underline;
`;
export const Links = styled.div`
  margin-left: 50px;
`;
export const Link = styled.span`
  margin-left: 30px;
`;
