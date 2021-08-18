import styled from "styled-components";
import { color } from "metabase/lib/colors";
import Link from "metabase/components/Link";

export const FormLink = styled(Link)`
  color: ${color("brand")};

  &:hover {
    text-decoration: underline;
  }
`;

export const FormMessage = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
