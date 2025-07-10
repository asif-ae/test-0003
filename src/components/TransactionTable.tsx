import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
type Transaction = {
  id: string;
  date: string;
  account: string;
  type: "deposit" | "withdrawal" | "transfer" | "payment";
  amount: number;
  status: "completed" | "pending" | "failed";
};

const allTransactions: Transaction[] = [
  {
    id: "TRX-2938",
    date: "2023-11-15",
    account: "James Wilson",
    type: "deposit",
    amount: 1250.0,
    status: "completed",
  },
  {
    id: "TRX-2937",
    date: "2023-11-14",
    account: "Sarah Johnson",
    type: "withdrawal",
    amount: 890.5,
    status: "completed",
  },
  {
    id: "TRX-2936",
    date: "2023-11-14",
    account: "Michael Brown",
    type: "transfer",
    amount: 3500.0,
    status: "pending",
  },
  {
    id: "TRX-2935",
    date: "2023-11-13",
    account: "Emily Davis",
    type: "payment",
    amount: 750.25,
    status: "completed",
  },
  {
    id: "TRX-2934",
    date: "2023-11-12",
    account: "Robert Taylor",
    type: "deposit",
    amount: 2100.0,
    status: "failed",
  },
  {
    id: "TRX-2933",
    date: "2023-11-11",
    account: "Jennifer White",
    type: "payment",
    amount: 450.75,
    status: "completed",
  },
  {
    id: "TRX-2932",
    date: "2023-11-11",
    account: "Thomas Martin",
    type: "withdrawal",
    amount: 1200.0,
    status: "completed",
  },
  {
    id: "TRX-2931",
    date: "2023-11-10",
    account: "Lisa Anderson",
    type: "transfer",
    amount: 2800.0,
    status: "pending",
  },
  {
    id: "TRX-2930",
    date: "2023-11-09",
    account: "David Thompson",
    type: "deposit",
    amount: 3200.0,
    status: "completed",
  },
  {
    id: "TRX-2929",
    date: "2023-11-08",
    account: "Susan Martinez",
    type: "payment",
    amount: 980.5,
    status: "failed",
  },
  {
    id: "TRX-2928",
    date: "2023-11-07",
    account: "Kevin Robinson",
    type: "deposit",
    amount: 1750.0,
    status: "completed",
  },
  {
    id: "TRX-2927",
    date: "2023-11-06",
    account: "Patricia Clark",
    type: "withdrawal",
    amount: 500.0,
    status: "completed",
  },
];
export function TransactionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const totalPages = Math.ceil(allTransactions.length / itemsPerPage);

  const indexOfLastTransaction = currentPage * itemsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
  const currentTransactions = allTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const goToPage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Recent transactions
        </h2>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700 border-y border-gray-200 dark:border-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Account
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {currentTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {transaction.account}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
                  {transaction.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  ${transaction.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      transaction.status === "completed"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                        : transaction.status === "pending"
                        ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                        : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {indexOfFirstTransaction + 1}-
          {Math.min(indexOfLastTransaction, allTransactions.length)} of{" "}
          {allTransactions.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <button
            className={`p-2 rounded-full ${
              currentPage === 1
                ? "text-gray-300 dark:text-gray-600"
                : "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            }`}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaArrowLeft className="h-5 w-5" />
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;

            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNumber}
                  className={`px-3 py-1 rounded ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => goToPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            } else if (
              pageNumber === currentPage - 2 ||
              pageNumber === currentPage + 2
            ) {
              return (
                <span key={pageNumber} className="px-1">
                  ...
                </span>
              );
            }
            return null;
          })}
          <button
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? "text-gray-300 dark:text-gray-600"
                : "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            }`}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
