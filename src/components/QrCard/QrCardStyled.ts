import styled from "styled-components";

export const QrCardCustom = styled.div`
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 40px;

  text-align: center;

  background-color: #fff;

  border-radius: 20px;

  @media (min-width: 1280px){
    width: 320px;

    margin-left: auto;
    margin-right: auto;
  }

  & > h3 {
    margin-bottom: 16px;

    font-size: 22px;

    color: #1f314f;
  }

  & > p {
    font-size: 15px;

    color: #7d889e;
  }
`;

export const QrCardImgCon = styled.div`
  margin-bottom: 24px;

  border-radius: 10px;

  overflow: hidden;

  box-sizing: border-box;

  & > img {
    width: 100%;
    height: 288px;
  }
`;
