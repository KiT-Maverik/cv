import {SxProps} from "@mui/material";
import {Theme, alpha} from "@mui/material/styles";
import {commonStyles} from "styles";

const container: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
}

const header: SxProps<Theme> = commonStyles.header

const portfolio: { container: SxProps<Theme>; item: SxProps<Theme>; icon: SxProps<Theme> } = {
    container:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
    },
    item: {
        display: "flex",
        gap: 3,
        alignItems: "center",
        fontSize: 32,
        p: 5,
        borderRadius: 2,

        ':hover': {
            backgroundColor: theme => alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
        }
    },
    icon: {
        display: "flex",
        alignItems: "center",
        width: 36,
        aspectRatio: 1,
        fill: theme => theme.palette.text.primary,
    }
}

export default {
    container,
    header,
    portfolio,
}
