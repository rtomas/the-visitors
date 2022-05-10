import React from "react";
import Owner from "../components/Owner";
import { TableContainer, TableHead, Table, TableRow, TableCell, Paper, TableBody } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

import { gql, useQuery } from "@apollo/client";

const VISITOR_INFO_QUERY = gql`
  query {
    visitorsInfos(first: 1) {
      numTokens
      numOwners
      numAccounts
      lastBurned
      lastMintDate
      lastTransferDate
    }
  }
`;

const VisitorInfo = () => {
  const { loading, error, data } = useQuery(VISITOR_INFO_QUERY, {
    variables: {},
  });

  return (
    <section className="main-container">
      <div className="ProductList">
        {loading && <div>loading</div>}
        {error && <div>{error.message}</div>}
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {data?.visitorsInfos.map((data: any, index: number) => (
            <TableBody>
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="left">Number of tokens</TableCell>
                <TableCell align="center">{data.numTokens}</TableCell>
              </TableRow>
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="left">Number of owners</TableCell>
                <TableCell align="center">{data.numOwners}</TableCell>
              </TableRow>
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="left">Number of accounts</TableCell>
                <TableCell align="center">{data.numAccounts}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </section>
  );
};

export default VisitorInfo;
