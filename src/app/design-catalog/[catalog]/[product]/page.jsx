import React from "react";

const Page = ({ params }) => {
  return (
    <div>
      Product: {params.catalog} / {params.product}
    </div>
  );
};

export default Page;
