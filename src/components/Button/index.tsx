import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    styled,
    alpha
} from '@mui/material'

import * as icons from '../Icons/Icons'
import { IconEnum } from '../Icons/IconEnum'
import { FontSizeEnum } from '../../enums/FontSizeEnum'
import { LineHeightEnum } from '../../enums/LineHeightEnum'

/**
 * Button 元件屬性 extends MUI Button 屬性
 *
 * @param text {string} 按鈕名稱
 *
 * @param children {ReactNode} 按鈕內容
 *
 * @param icon {IconEnum} 按鈕 icon 名稱 mapping 用
 *
 * @interface ButtonProps
 *
 * @extends {MuiButtonProps}
 */
interface ButtonProps extends MuiButtonProps {
    text?: string
    children?: React.ReactNode
    icon?: keyof typeof IconEnum
}

/**
 *  All variants of button style
 */
const StyledButton = styled(MuiButton)<ButtonProps>(({ theme, size }) => ({
    '&.MuiButton-containedPrimary': {
        '&.Mui-disabled': {
            color: theme.palette.common.white
        }
    },
    '&.MuiButton-containedSecondary': {
        '&.Mui-disabled': {
            color: theme.palette.common.white
        }
    },
    '&.MuiButton-outlinedPrimary': {
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
    },
    '&.MuiButton-outlinedSecondary': {
        color: theme.palette.common.black,
        borderColor: theme.palette.grey[600],
        boxShadow:
            '0 2px 2px 0 rgba(0, 0, 0, 0.15), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.10)',
        '&:hover': {
            borderColor: theme.palette.grey[600],
            backgroundColor: alpha(theme.palette.common.black, 0.05),
            boxShadow: 'none'
        },
        '&.Mui-disabled': {
            borderColor: alpha('#111111', 0.15),
            color: theme.palette.grey[500]
        }
    },
    '&.MuiButton-outlinedSuccess': {
        borderColor: theme.palette.success.main,
        boxShadow:
            '0 2px 2px 0 rgba(0, 0, 0, 0.15), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.10)',
        '&:hover': {
            borderColor: theme.palette.success.main,
            backgroundColor: alpha(theme.palette.success.main, 0.05),
            boxShadow: 'none'
        },
        '&.Mui-disabled': {
            borderColor: alpha('#111111', 0.15),
            color: theme.palette.grey[500]
        }
    },
    '&.MuiButton-textPrimary': {
        color: theme.palette.primary.main,
        '&.Mui-disabled': {
            color: theme.palette.grey[500]
        }
    },
    '&.MuiButton-textSecondary': {
        color: theme.palette.common.black,
        '&:hover': {
            BorderColor: theme.palette.grey[600],
            backgroundColor: alpha('#000000', 0.05)
        },
        '&.Mui-disabled': {
            BorderColor: alpha('#111111', 0.15),
            color: theme.palette.grey[500]
        }
    },
    '&.MuiButton-textSuccess': {
        color: theme.palette.success.main,
        backgroundColor: alpha(theme.palette.success.main, 0.05),
        '&.Mui-disabled': {
            BorderColor: alpha('#111111', 0.15),
            color: theme.palette.grey[500]
        }
    },
    /**
     * 根據傳入的 size 參數，判斷要使用哪一種 fontSize
     */
    fontSize: ((size) => {
        switch (size) {
            case 'small':
                return FontSizeEnum.TextTiny
            case 'medium':
                return FontSizeEnum.TextSmall
            case 'large':
                return FontSizeEnum.TextMedium
            default:
                return FontSizeEnum.TextMedium
        }
    })(size),
    /**
     * 根據傳入的 size 參數，判斷要使用哪一種 lineHeight
     */
    lineHeight: ((size) => {
        switch (size) {
            case 'small':
                return LineHeightEnum.LineHeight100
            case 'medium':
                return LineHeightEnum.LineHeight125
            case 'large':
                return LineHeightEnum.LineHeight150
            default:
                return LineHeightEnum.LineHeight150
        }
    })(size)
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
    children,
    icon,
    ...props
}: ButtonProps): JSX.Element => {
    console.log(icon)

    /**  選取時的樣式
     * const selectedStyle = isSelected && { backgroundColor: Palette.Blue50 };
     * 組合 MUI Button 的 sx 屬性和外部傳入的 sx 屬性
     */
    const whiteSpace = { whiteSpace: icon ? 'nowrap' : 'normal' }
    const totalStyle = {
        ...whiteSpace,
        ...props.sx
    }
    /**
     * mapping Icons
     */
    const IconSvg = icon ? icons[icon as keyof typeof icons] : null

    return (
        <StyledButton
            variant="contained" // 按鈕樣式，預設為 contained，其他可選擇 text、outlined
            color="primary" // 按鈕顏色，預設為 primary，其他可選擇 success、error、warning、info、secondary、info
            startIcon={IconSvg ? <IconSvg /> : null}
            {...props}
            sx={totalStyle}
        >
            {children || text}
        </StyledButton>
    )
}
export default Button
