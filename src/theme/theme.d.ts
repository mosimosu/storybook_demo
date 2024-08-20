// import { PaletteOptions, TypographyOptions } from "@mui/material/styles";

// // 定義自定義調色板介面 CustomPalette
// // 包含基底顏色、灰色、藍色、綠色、黃色、紅色和紫色的色調
// interface CustomPalette {
//   base: {
//     white: string;
//     black: string;
//     divider: string;
//   }; // 基底顏色
//   gray: {
//     [key: number]: string;
//   }; // 灰色
//   blue: {
//     [key: number]: string;
//   }; // 藍色
//   green: {
//     [key: number]: string;
//   }; // 綠色
//   yellow: {
//     [key: number]: string;
//   }; // 黃色
//   red: {
//     [key: number]: string;
//   }; // 紅色
//   purple: {
//     [key: number]: string;
//   }; // 紫色
// }

// // 擴展 @mui/material/styles 模組中的 PaletteOptions 和 Palette 介面，使其包含自訂的 CustomPalette 介面
// declare module "@mui/material/styles" {
//   interface PaletteOptions extends CustomPalette {}
//   interface Palette extends CustomPalette {}
// }

// // 擴展 @mui/material/styles 模組中的 TypographyOptions 和 Typography 介面，使其包含自訂的 CustomTypography 介面
// declare module "@mui/material/styles" {
//   interface TypographyVariants {
//     textTiny: React.CSSProperties;
//     textSmall: React.CSSProperties;
//     textMedium: React.CSSProperties;
//     textLarge: React.CSSProperties;
//     textXLarge: React.CSSProperties;
//   }

//   interface TypographyVariantsOptions {
//     textTiny?: React.CSSProperties;
//     textSmall?: React.CSSProperties;
//     textMedium?: React.CSSProperties;
//     textLarge?: React.CSSProperties;
//     textXLarge?: React.CSSProperties;
//   }
// }
