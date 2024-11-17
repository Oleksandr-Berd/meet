import styled from "styled-components";

export const InfoCon = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 64px;

  text-align: center;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0;

    margin-bottom: 80px;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0;

    margin-bottom: 117px;

    & > img:not(:last-child) {
      margin-right: 28px;
      margin-left: -32px;
    }
    & > img:last-child {
      margin-left: 88px;
      transform: translateX(-32px);
    }
  }
`;

export const InfoTitle = styled.h3`
  margin-bottom: 24px;

  font-family: "RedHatDisplay";
  font-size: 40px;
  line-height: 1.1;

  color: #28283d;

  @media (min-width: 768px) {
    width: 339px;

    margin-left: auto;
    margin-right: auto;

    font-size: 48px;
    line-height: 1;
  }

  @media (min-width: 1280px) {
    width: 445px;

    font-size: 64px;
    line-height: 1;
  }
`;

export const InfoContent = styled.p`
  margin-bottom: 32px;

  font-family: "RedHatDisplay";
  font-size: 16px;
  line-height: 1.63;

  color: #87879d;

  @media (min-width: 768px) {
    width: 437px;

    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1220px) {
    width: 540px;

    font-size: 18px;
    line-height: 1.44;
  }
`;

export const InfoLinksCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 348px;

    flex-direction: row;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
  }

  & > a:nth-child(1) {
    width: 193px;

    padding-top: 16px;
    padding-bottom: 16px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;

    font-family: "RedHatDisplay";
    font-size: 16px;
    font-weight: 800;
    line-height: 1.63;

    color: #fff;
    background-color: #4d96a9;

    border-radius: 29px;

    & span {
      color: #8fe3f9;
    }
    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 16px;
    }

    @media (min-width: 1280px) {
      transition: background-color 1s linear;

      &:hover,
      &:active,
      &:focus {
        background-color: #71c0d4;
        cursor: pointer;
        transition: background-color 1s linear;
      }
    }
  }
  & > a:nth-child(2) {
    width: 139px;

    padding-top: 16px;
    padding-bottom: 16px;

    margin-left: auto;
    margin-right: auto;

    font-family: "RedHatDisplay";
    font-size: 16px;
    font-weight: 800;
    line-height: 1.63;

    color: #fff;
    background-color: #855fb1;

    border-radius: 29px;

    @media (min-width: 1280px) {
      transition: background-color 1s linear;

      &:hover,
      &:active,
      &:focus {
        background-color: #b18bdd;
        cursor: pointer;

        transition: background-color 1s linear;
      }
    }
  }
`;
