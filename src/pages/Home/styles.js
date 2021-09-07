import styled from "styled-components";
import { darken } from "polished";
export const ProductList = styled.ul`
  max-width: 70vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  padding: 20px;
  transition: transform 0.1s linear;

  &:hover {
    transform: scale(1.01);
  }

  img {
    max-width: 200px;
    align-self: center;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: #5960c1;
    color: #fff;

    border-radius: 10px;
    border: 0;

    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, "#5960c1")};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
