import styled from "styled-components";

export const FooterContent = styled.footer`
  width: 100%;
  position: inherit;
  bottom: 0;
  display: flex;
  background-color: #961ED9;
  
  .content{
    padding: 30px;
    width: 70vh;
    margin: auto;
    text-align: center;
    color: #fff;
    & img {
      max-width: 100px;
      height: auto;
      margin-bottom: 20px;
    }

    p{
      font-size: 12px;
      font-weight: normal;
    }
  }
`