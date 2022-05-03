import React from "react";
import Owner from "../components/Owner";

import { gql, useQuery } from "@apollo/client";

const TOP_OWNERS_QUERY = gql`
  query ($topNumber: Int) {
    owners(orderBy: numTokens, orderDirection: desc, first: $topNumber, where: { address_not: "0x0000000000000000000000000000000000000000" }) {
      address
      numTokens
    }
  }
`;

const ListOwner = () => {
  const { loading, error, data } = useQuery(TOP_OWNERS_QUERY, {
    variables: {
      topNumber: 10,
    },
  });

  return (
    <section className="main-container">
      <div className="ProductList">
        {loading && <div>loading</div>}
        {error && <div>{error.message}</div>}
        {data?.owners.map((data: any) => (
          <Owner address={data.address} numTokens={data.numTokens} />
        ))}
      </div>
    </section>
  );
};

export default ListOwner;
