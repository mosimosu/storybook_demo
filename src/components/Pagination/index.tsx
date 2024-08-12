import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;

  gap: 1rem;
  & > p {
    ${({ theme }) => theme.typography.textMedium};
    color: ${({ theme }) => theme.palette.gray[900]};
  }
`;
