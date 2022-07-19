import React, { FC } from "react";

import { CSCardFooterChip } from "../CSCardFooterChip";
import { CSCardHeader } from "../CSCardHeader";
import { CSCardHeaderChip } from "../CSCardHeaderChip";
import { CSCardMessage } from "../CSCardMessage";
import { StyledCard } from "./styles";

export const CSCard: FC = () => {
  return (
    <StyledCard>
      <CSCardHeaderChip />
      <CSCardHeader />
      <CSCardMessage />
      <CSCardFooterChip />
    </StyledCard>
  );
};
