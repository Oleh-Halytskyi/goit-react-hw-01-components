import styled from 'styled-components';

export const Title = styled.h2`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  background-color: ${p => p.theme.colors.background};
  text-align: center;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[0]};
`;

export const StatList = styled.ul`
  display: flex;
  width: 400px;
`;
export const ItemStatistic = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  color: ${p => p.theme.colors.white};
  text-align: center;
  padding: ${p => p.theme.space[3]}px;
`;
export const ItemCaption = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const ItemValue = styled.span`
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
