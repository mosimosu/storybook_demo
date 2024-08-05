import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    base?: PaletteOptions["white"];
    gray?: PaletteOptions["gray"];
    blue?: PaletteOptions["blue"];
    green?: PaletteOptions["green"];
    yellow?: PaletteOptions["yellow"];
    red?: PaletteOptions["red"];
    purple?: PaletteOptions["purple"];
  }
}
