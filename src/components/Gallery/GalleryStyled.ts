import styled from "styled-components";

export const GalleryCustom = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 64px;
`;

export const GalleryCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  margin-bottom: 64px;
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
  }

  & > h4 {
    margin-bottom: 32px;

    font-family: "RedHatDisplay";
    font-size: 32px;
    line-height: 1.13;

    color: #28283d;
  }

  & > p {
    font-family: "RedHatDisplay";
    font-size: 16px;
    line-height: 1.63;

    color: #87879d;
  }
`;
