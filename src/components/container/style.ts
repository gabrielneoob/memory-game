import styled from "styled-components";

const ContainerWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 750px;
  margin:auto;
  
  @media(max-width: 750px) {
    flex-direction: column;
  }

`

export {ContainerWrap}