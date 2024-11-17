import styled from "styled-components";

export const GalleryCustom = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 176px;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;

    margin-bottom: 192px;
  }

  @media (min-width: 1280px){
    margin-bottom: 184px;
  }
`;

export const GalleryCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  margin-bottom: 64px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 48px;

    & * {
      &:not(:last-child) {
        margin-right: 11px;
      }
    }
  }

  @media (min-width: 1280px) {
    justify-content: center;

    margin-bottom: 80px;

    & * {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
`;

export const GalleryContent = styled.div`
  text-align: center;
  & > h3 {
    margin-bottom: 24px;

    text-transform: uppercase;

    font-family: "RedHatDisplay";
    font-size: 16px;
    line-height: 1.63;

    color: #4d96a9;

    @media (min-width: 768px) {
      margin-bottom: 16px;
    }
  }

  & > h4 {
    margin-bottom: 32px;

    font-family: "RedHatDisplay";
    font-size: 32px;
    line-height: 1.13;

    color: #28283d;

    @media (min-width: 768px) {
      width: 425px;
      margin-left: auto;
      margin-right: auto;

      font-size: 40px;
      line-height: 1.1;
    }
  }

  & > p {
    font-family: "RedHatDisplay";
    font-size: 16px;
    line-height: 1.63;

    color: #87879d;

    @media (min-width: 768px){
        width: 573px;

        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1280px){
        font-size: 18px;
    }
  }
`;
