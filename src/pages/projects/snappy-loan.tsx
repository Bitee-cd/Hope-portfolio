import Layout from "@/Components/Layout/Layout";
import SnappyLoan from "@/Components/Projects/SnappyLoan";
import React from "react";
interface Props {}
const SnappyLoanPage = (props: Props) => {
  return (
    <Layout title="Snappy Loan">
      <SnappyLoan />
    </Layout>
  );
};

export default SnappyLoanPage;
