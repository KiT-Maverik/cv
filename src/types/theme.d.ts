declare module '@mui/material/styles' {
    interface TypeBackground {
        surface: string
    }

    interface BreakpointOverrides {
        xs: false // removes the `xs` breakpoint
        sm: false
        md: false
        lg: false
        xl: false
        mobile: true // adds the `mobile` breakpoint
        tablet: true
        laptop: true
        desktop: true
        fullWidth: true
    }
}
