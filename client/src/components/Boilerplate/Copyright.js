import Linkstyle from "@mui/material/Link";
import Typography from "@mui/material/Typography";
const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Linkstyle color="inherit" href="http://robbieis.me/">
        LuoTheBuilder
      </Linkstyle>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
