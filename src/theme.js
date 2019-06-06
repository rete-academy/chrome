import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';

export default createMuiTheme({
    palette: {
        primary: amber,
        secondary: blueGrey,
    },
    typography: {
        useNextVariants: true,
    },
});
