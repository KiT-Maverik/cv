import {SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";
import {commonStyles} from "styles";

const container: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
}

const header: SxProps<Theme> = commonStyles.header

const portfolio: { container: SxProps<Theme>; item: SxProps<Theme>; icon: SxProps<Theme> } = {
    container:{
        display: "flex",
        gap: 3,
    },
    item: {
        flexGrow: 1,
        fontSize: 32,
    },
    icon: {
        width: 36,
        aspectRatio: 1,
    }
}

export default {
    container,
    header,
    portfolio,
}
