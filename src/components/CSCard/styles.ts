import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)((props) => ({
  "&.MuiCard-root": {
    height: 500,
  },
  // TODO: This is how media break points are done.
  // "@media (max-width: 500px)": {
  //   flex: "100%"
  // }
}));
