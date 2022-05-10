import React from "react";
import Owner from "../components/Owner";
import { TableContainer, TableHead, Table, TableRow, TableCell, Paper, TableBody } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { cropAddress } from "../utils/etherHelper";

import { gql, useQuery } from "@apollo/client";

const LAST_MINT_TOKENS_QUERY = gql`
  query ($topNumber: Int) {
    tokens(first: 5, orderBy: mintTime, orderDirection: desc) {
      tokenID
      owner {
        id
      }
      uri
    }
  }
`;

const ListNewTokens = () => {
  const { loading, error, data } = useQuery(LAST_MINT_TOKENS_QUERY, {
    variables: {
      topNumber: 5,
    },
  });

  return (
    <section className="main-container">
      <div className="ProductList">
        {loading && <div>loading</div>}
        {error && <div>{error.message}</div>}
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Owner</TableCell>
              <TableCell align="center">URI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.tokens.map((data: any) => (
              <TableRow key={data.address} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="center">{data.tokenID}</TableCell>
                <TableCell align="center">{cropAddress(data.owner.id)}</TableCell>
                <TableCell align="center">{data.uri}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ListNewTokens;
