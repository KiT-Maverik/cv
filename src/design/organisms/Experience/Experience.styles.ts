import {SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

import {commonStyles} from "styles";

const container: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
}

const header: SxProps<Theme> = commonStyles.header

export default {
    container,
    header,
}
