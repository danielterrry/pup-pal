import { styled } from 'styled-components';

export const H1Type = styled.h1`
  font-size: 3rem;
  line-height: 3.75rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sora-semi-bold;
`;

export const H2Type = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sora-semi-bold;
`;

export const TitleH1 = ({ className, children }) => {
  return <H1Type className={className}>{children}</H1Type>;
};

export const TitleH2 = ({ className, children }) => {
  return <H2Type className={className}>{children}</H2Type>;
};