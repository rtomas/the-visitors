import { Card, CardContent, Typography } from "@mui/material";

interface OwnerProps {
  address: string;
  numTokens: number;
}

function Owner(props: OwnerProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" color="text.secondary">
          Address: {props.address}
          <br />
          Amount: {props.numTokens}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Owner;
