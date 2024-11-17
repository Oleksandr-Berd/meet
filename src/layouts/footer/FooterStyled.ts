import styled from "styled-components";

import footerBackMob from "../../assets/images/mobile/image-footer.jpg";

export const FooterCustom = styled.footer`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 24px;
  padding-top: 92px;
  padding-right: 24px;
  padding-bottom: 72px;

  text-align: center;

  background-image: url(${footerBackMob});
  background-size: cover;
  background-color: #4d96a9;
  background-blend-mode: multiply;

  color: #fafafa;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 66px;
  }

  & > h3 {
    margin-bottom: 24px;

    font-family: "RedHatDisplay";
    font-size: 32px;
    line-height: 1.13;

    @media (min-width: 768px) {
      width: 457px;
      margin-left: auto;
      margin-right: auto;

      margin-bottom: 32px;
      font-size: 40px;
      line-height: 1.1;
    }
  }

  & > p {
    margin-bottom: 32px;

    font-family: "RedHatDisplay";
    font-size: 18px;
    line-height: 1.44;

    @media (min-width: 768px) {
      width: 573px;
      margin-left: auto;
      margin-right: auto;

      margin-bottom: 40px;
    }
  }

  & a {
    width: 193px;

    padding-top: 16px;
    padding-bottom: 16px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;

    text-align: center;

    font-family: "RedHatDisplay";
    font-size: 16px;
    font-weight: 800;
    line-height: 1.63;

    color: #fff;
    background-color: #855fb1;

    border-radius: 29px;

    & span {
      color: #d9b8ff;
    }
  }
`;
