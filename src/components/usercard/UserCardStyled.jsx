import styled from 'styled-components';

export const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 40px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 2px 2px rgb(114, 31, 231, 0.2);
  }
`;

export const DescriptionStiled = styled.dav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const AvanarStiled = styled.img`
  width: 150px;
  margin-bottom: 15px;
  border-radius: 50%;
  border: 0.5px solid rgb(114, 108, 108);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NameStyled = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
`;

export const TagLocationStyled = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: gray;
`;

export const ListStyled = styled.ul``;
