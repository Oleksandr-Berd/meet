import styled from "styled-components";
import { IProps } from "../../utils/interfaces";

export const Geometry = styled.div`
  position: relative;

  margin-bottom: 164px;
`;

export const GeometryLine = styled.div<IProps>`
  position: ${({ layout }) => (layout === "02" ? "absolute" : "static")};

  top: ${({ layout }) => (layout === "02" ? "0" : "null")};

  transform: ${({ layout }) =>
    layout === "02" ? "translate(-50%, -168px) rotate(90deg)" : "rotate(90deg)"};

  width: 84px;


  margin-left: auto;
  margin-right: auto;

  border: 1px solid #87879d;
`;

export const GeometryCircle = styled.div<IProps>`
  position: absolute;

  bottom: 0;
  right: 50%;
  z-index: 5;

  transform: ${({ layout }) =>
    layout === "02" ? "translate(50%, -66px)" : "translate(50%, 100px)"};

  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "RedHatDisplay";
  font-size: 16px;
  line-height: 1.63;
  font-weight: 800;

  margin-left: auto;
  margin-right: auto;

  color: #87879d;
  background-color: #f2f2f2;

  border: 1px solid #87879d;
  border-radius: 50%;
`;
