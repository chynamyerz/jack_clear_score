import { Paper, styled } from "@mui/material";

const StyledPaper = styled(Paper, {
  name: "StyledPaper",
  slot: "Wrapper",
})((props) => ({
  color: "#6B8068",
  margin: "auto",
  borderRadius: 2,
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".MuiButton-root": { color: "#FF0000" },
}));
