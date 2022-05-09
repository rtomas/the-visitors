import React from "react";
import Owner from "../components/Owner";

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
        {data?.accounts.map((data: any) => (
          <Owner address={data.address} numTokens={data.numTokens} />
        ))}
      </div>
    </section>
  );
};

export default ListOwner;
