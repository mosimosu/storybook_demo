import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    styled
} from '@mui/material'

/**
 * Button 元件屬性 extends MUI Button 屬性
 *
 * @interface ButtonProps
 * @extends {MuiButtonProps}
 */
interface ButtonProps extends MuiButtonProps {
    text: string
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
    '.MuiButton-containedPrimary': {
        '&.Mui-disabled': {
            color: theme.palette.common.white
        }
    },
    '.MuiButton-containedSecondary': {
        '&.Mui-disabled': {
            color: theme.palette.common.white
        }
    },
    '.MuiButton-outlinedPrimary': {
        borderColor: theme.palette.primary.main,
        boxShadow:
            '0 2px 2px 0 rgba(0, 0, 0, 0.15), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.10)',
        '&:hover': {
            borderColor: theme.palette.primary.light,
            boxShadow: 'none'
        },
        '&.Mui-disabled': {
            color: theme.palette.grey[500]
        }
    }
}))

/**
 * Button 元件
 *
 * @param props {ButtonProps} MUI Button 屬性，用來傳給下一層 MUI Button
 *
 * @param isSelected {boolean} 是否選取，預設為 false
 *
 * @return {JSX.Element}
 */
const Button = ({
    // isSelected = false,
    text = '按鈕',
    ...props
}: ButtonProps): JSX.Element => {
    // // 選取時的樣式
    // const selectedStyle = isSelected && { backgroundColor: Palette.Blue50 };
    // 組合 MUI Button 的 sx 屬性和外部傳入的 sx 屬性
    const totalStyle = {
        // ...selectedStyle,
        ...props.sx
    }

    return (
        <StyledButton
            variant="contained" // 按鈕樣式，預設為 contained，其他可選擇 text、outlined
            color="primary" // 按鈕顏色，預設為 primary，其他可選擇 success、error、warning、info、secondary、info
            {...props}
            sx={totalStyle}
        >
            {text}
        </StyledButton>
    )
}
export default Button
