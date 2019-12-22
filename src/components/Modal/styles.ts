import styled from 'styled-components';
import { CriteriaSelector } from '../Search/styles';

export const Container = styled.div`
  position: absolute;
  border-radius: 5px;
  left: 35%;
  top: 25%;
  width: 30%;
  height: auto;
  border: 1px black solid;
  background: #252525;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @media (max-width: 768px) {
    width: 70%;
    left: 15%;
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 25%;
      opacity: 1;
    }
  }
`;

export const Avatar = styled.img`
  position: relative;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  bottom: 40px;
  width: 40%;
`;

export const NameField = styled.div`
  align-items: center;
  margin: 0 30px 10px 30px;
  border-bottom: 1px solid #000;
  width: 80%;
  color: #b3b8bc;
`;

export const Username = styled.div`
  flex: 1 1 auto;
  margin-left: 30px;
  color: #b3b8bc;
`;

export const BioField = styled(NameField)`
  margin: 16px 30px 10px 30px;
`;

export const Bio = styled(Username)`
  margin: 0 0 30px 30px;
  width: 80%;
`;

export const Exit = styled.div`
  position: absolute;
  top: 0;
  right: 7px;
  font-size: 28px;
  font-weight: bold;
  color: #b3b8bc;
  &:hover,
  :focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Edit = styled.img`
  position: absolute;
  width: 20px;
  left: 83%;
  cursor: pointer;
`;

export const SaveContainer = styled.div`
  text-align: center;
`;

export const Save = styled(CriteriaSelector)`
  display: inline-block;
  width: 25%;
  text-align: center;
  cursor: pointer;
  padding: 3px;
  background: #252525;
`;

export const ProfileFields = styled.div`
  position: relative;
  bottom: 5%;
`;

export const BioEditor = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  min-height: 50px;
`;
