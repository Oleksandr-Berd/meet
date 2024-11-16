import styled from "styled-components";

export const Geometry = styled.div`
  position: relative;

  margin-bottom: 164px;
`;

export const GeometryLine = styled.div`
  width: 84px;

  transform: rotate(90deg);

  margin-left: auto;
  margin-right: auto;

  border: 1px solid #87879d;
`;

export const GeometryCircle = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;

  transform: translate(50%, 100px);

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

  border: 1px solid #87879d;
  border-radius: 50%;
`;
