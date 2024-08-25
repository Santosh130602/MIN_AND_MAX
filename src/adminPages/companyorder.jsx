import React from "react";

const companyOrders = [
  {
    companyName: "PharmaTech",
    orders: [
      { id: 1, product: "Paracetamol", quantity: 200, status: "Shipped" },
      { id: 2, product: "Ibuprofen", quantity: 150, status: "Pending" },
    ],
  },
  {
    companyName: "WellnessCo",
    orders: [
      { id: 3, product: "Vitamin C", quantity: 300, status: "Delivered" },
      { id: 4, product: "Multivitamins", quantity: 100, status: "Shipped" },
    ],
  },
  {
    companyName: "HealthCorp",
    orders: [
      { id: 5, product: "Aspirin", quantity: 180, status: "Pending" },
      { id: 6, product: "Cough Syrup", quantity: 80, status: "Delivered" },
    ],
  },
];

export default function CompanyOrders() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-sky-700 mb-6">Company Orders</h1>
      {companyOrders.map((company) => (
        <div
          key={company.companyName}
          className="mb-6 p-4 border rounded-lg shadow-md bg-sky-50 border-sky-300"
        >
          <h2 className="text-xl font-semibold text-sky-600 mb-4">
            {company.companyName}
          </h2>
          <ul>
            {company.orders.map((order) => (
              <li
                key={order.id}
                className="mb-2 p-2 border-b border-sky-200"
              >
                <div className="flex justify-between text-sky-600">
                  <span className="font-medium">{order.product}</span>
                  <span>Quantity: {order.quantity}</span>
                  <span className="text-sky-500">Status: {order.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
