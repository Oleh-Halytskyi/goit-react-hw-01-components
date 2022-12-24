import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const TableHeader = styled.thead`
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

export const TableTitle = styled.tr`
  border-color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.table_header};
`;

export const TableColum = styled.th`
  padding: ${p => p.theme.space[4]}px 0;
  width: 200px;
  border: ${p => p.theme.borders.normal};
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableStringBody = styled.tr`
  background-color: ${({ theme, index }) => {
    return index % 2 === 0 ? theme.colors.white : theme.colors.bg_main;
  }};
`;

export const TableColumBody = styled.th`
  padding: ${p => p.theme.space[4]}px 0;
  width: 200px;
  color: ${p => p.theme.colors.text};

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  border: ${p => p.theme.borders.normal};
`;
