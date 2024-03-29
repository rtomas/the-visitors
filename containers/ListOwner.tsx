import React from "react";
import Owner from "../components/Owner";
import { TableContainer, TableHead, Table, TableRow, TableCell, Paper, TableBody } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { cropAddress } from "../utils/etherHelper";

import { gql, useQuery } from "@apollo/client";

const TOP_OWNERS_QUERY = gql`
  query ($topNumber: Int) {
    accounts(orderBy: numTokens, orderDirection: desc, first: 5) {
      address
      numTokens
    }
  }
`;

const ListOwner = () => {
  const { loading, error, data } = useQuery(TOP_OWNERS_QUERY, {
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
              <TableCell align="left">Address</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.accounts.map((data: any) => (
              <TableRow key={data.address} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="left">{cropAddress(data.address)}</TableCell>
                <TableCell align="center">{data.numTokens}</TableCell>
                <TableCell align="center">
                  <InsertLinkIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ListOwner;
