import { Suspense } from "react";
import TransactionsClient from "./transactionsClient";


export default function Transactions() {
  return (
    <Suspense fallback={<div className="p-4 text-sm text-gray-500">로딩 중...</div>}>
      <TransactionsClient />
    </Suspense>
  );
}
