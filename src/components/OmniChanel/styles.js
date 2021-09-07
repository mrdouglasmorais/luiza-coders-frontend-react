import styled from "styled-components";

export const FloatContent = styled.div`
  position: fixed;
  bottom: 12px;
  left: 12px;

  img{
    border-radius: 100%;
    width: 100px;
    height: 100px;
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: #ffffff;
    }
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
    }
  }
`