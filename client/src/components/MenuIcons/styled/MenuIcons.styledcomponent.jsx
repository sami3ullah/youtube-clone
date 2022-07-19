import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 10px 0px;

  &:hover {
    background: ${({ theme }) => theme.soft};
  }
`;

export const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaa;
  margin-bottom: 20px;
`;
