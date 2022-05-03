import { Card, CardContent, Typography } from "@mui/material";

interface TokenProps {
  URI: string;
}

function Token(props: TokenProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" color="text.secondary">
          Address: {props.URI}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Token;
