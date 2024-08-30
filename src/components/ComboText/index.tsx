import { styled } from "@mui/material";
interface ComboTextProps {
    text: string;
    color: string;
    position: string;
}

interface StyledComboTextProps {
    color: string;
    position: string;
}

interface ColorBlockProps {
    color: string;
    position: string;
}

/**
 * styled ComboText component
 * @prop color {string} // 標籤顏色
 * @prop position {string} // 色塊位置
 * @return {JSX.Element}
 */
const StyledComboText = styled("label")<StyledComboTextProps>(({
    color,
    position,
}) => {
    const handleColor = position === "left" ? "transparent" : color;
    const handlePadding = position === "left" ? "0" : "0 6px";
    return {
        display: "flex",
        gap: "8px",
        backgroundColor: handleColor,
        padding: handlePadding,
        alignItems: "center",
        "& p": {
            fontWeight: "500",
            margin: "0",
        },
    };
});

/**
 * 色塊
 *
 * @param color {string} // 色塊顏色
 * @param position {string} // 色塊位置
 * @return {JSX.Element}
 */
const ColorBlock = styled("div")<ColorBlockProps>(({ position, color }) => {
    const handleColor = position === "left" ? color : "transparent";

    return {
        width: "20px",
        height: "20px",
        backgroundColor: handleColor,
    };
});

/**
 * 匯出 ComboText component
 *
 * @param text {string} // 標籤文字
 *
 * @param position {string} // 色塊位置
 *
 * @param color {string} // 標籤顏色
 *
 * @param props {any} // 其他 props
 *
 * @return {JSX.Element}
 */
const ComboText = ({
    text = "休息",
    position = "left",
    color = "#D4D4D8",
    ...props
}: ComboTextProps): JSX.Element => {
    return (
        <StyledComboText color={color} position={position} {...props}>
            {position === "left" && (
                <ColorBlock color={color} position={position} />
            )}
            <p>{text}</p>
        </StyledComboText>
    );
};

export default ComboText;
