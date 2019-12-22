import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  border-radius: 5px;
  left: 35%;
  top: 25%;
  width: 30%;
  height: 50%;
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
  margin: 8px 35px;
  border-bottom: 1px solid #000;
  width: 80%;
  color: #b3b8bc;
`;

export const Username = styled.div`
  /* content: ''; */
  flex: 1 1 auto;
  margin-left: 35px;
  color: #b3b8bc;
`;

export const BioField = styled.div`
  align-items: center;
  margin: 8px 35px;
  border-bottom: 1px solid #000;
  width: 80%;
  color: #b3b8bc;
`;

export const Bio = styled.div`
  color: #b3b8bc;
  flex: 1 1 auto;
  margin-left: 35px;
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
  right: 10%;
  top: 40%;
  width: 5%;
`;

export const ProfileFields = styled.div`
  position: relative;
  bottom: 5%;
`;
