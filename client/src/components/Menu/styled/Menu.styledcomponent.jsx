import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  position: sticky;
  top: 0;
`;
export const Wrapper = styled.div`
  padding: 18px 26px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Img = styled.img`
  height: 25px;
`;
