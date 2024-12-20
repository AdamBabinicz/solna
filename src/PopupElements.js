import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  min-height: 100vh;
  display: grid;
  place-items: center;
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  color: #333;
  z-index: 999;
`;

export const PopupInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  max-height: 100%;
  max-width: 640px;
  background: #fff;
  z-index: 2;

  img {
    max-width: 70%;
  }

  @media screen and (max-width: 480px) {
    max-width: 90%;
    padding: 15px;
    margin: 0 auto;
    max-height: 98vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      /* max-width: 100%; */
      height: auto;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border: none;
  font-size: 2rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    top: 4px;
    right: 4px;
  }
`;
