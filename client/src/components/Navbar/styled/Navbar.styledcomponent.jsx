import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
export const Search = styled.div`
  position: absolute;
  width: 35%;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
`;
export const Input = styled.input`
  border: none;
  background: transparent;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #999;
`;

export const LogoutMenu = styled.div`
  position: absolute;
  height: 150px;
  width: 300px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.bgLighter};
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 30px;
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 0;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 5px;
`;
