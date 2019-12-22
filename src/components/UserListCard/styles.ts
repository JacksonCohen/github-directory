import styled from 'styled-components';

export const UserProfile = styled.div`
  position: relative;
  max-height: 10rem;
  width: 15%;
  border: 1px #252525 solid;
  border-radius: 3px;
  margin: 10px 10px;
  text-align: center;
  background: #252525;
  color: #b3b8bc;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 40px 2px;
    transform: scale3d(1.01, 1.01, 1);
  }

  @media (max-width: 768px) {
    width: 25%;
    max-height: 8rem;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 50%;
  margin: 10px 0 5px 0;

  @media (max-width: 768px) {
    height: 30%;
  }
`;

export const ViewMore = styled.a`
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Username = styled.div``;
