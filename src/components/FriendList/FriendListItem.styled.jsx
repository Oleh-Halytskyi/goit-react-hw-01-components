import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.background};

  border-radius: ${p => p.theme.radii.sm};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ theme, selected }) => {
    return selected ? theme.colors.online : theme.colors.offline;
  }};
`;
export const Avatar = styled.img``;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
