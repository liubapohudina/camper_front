import styled from "styled-components";
import switchImage from '../../assets/img/noleggio-camper.jpg'; 

export const BackgroundWrapper = styled.div`
  background-image: url(${switchImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;