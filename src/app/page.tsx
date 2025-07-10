"use client";

import { Card } from "@/components/Card";
import DashboardLayout from "@/components/DashboardLayout";
import { TransactionTable } from "@/components/TransactionTable";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="dark:bg-gray-900 bg-white min-h-screen p-[12px_24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <Card />
          <Card />
          <Card />
        </div>
        <TransactionTable />
      </div>
    </DashboardLayout>
  );
}
