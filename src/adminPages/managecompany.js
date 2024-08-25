


import React from "react";

const companies = [
  {
    name: "TechCorp",
    medicines: [
      { id: 1, name: "Paracetamol", quantity: 200 },
      { id: 2, name: "Ibuprofen", quantity: 150 },
    ],
  },
  {
    name: "EcoProducts",
    medicines: [
      { id: 3, name: "Vitamin C", quantity: 300 },
      { id: 4, name: "Multivitamins", quantity: 100 },
    ],
  },
  {
    name: "GadgetWorld",
    medicines: [
      { id: 5, name: "Aspirin", quantity: 180 },
      { id: 6, name: "Cough Syrup", quantity: 80 },
    ],
  },
];

export default function ManageCompanies() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-sky-700 mb-6">Manage Companies</h1>
      {companies.map((company) => (
        <div
          key={company.name}
          className="mb-6 p-4 border rounded-lg shadow-md bg-sky-50 border-sky-300"
        >
          <h2 className="text-xl font-semibold text-sky-600 mb-4">{company.name}</h2>
          <ul>
            {company.medicines.map((medicine) => (
              <li
                key={medicine.id}
                className="mb-2 p-2 border-b border-sky-200"
              >
                <div className="flex justify-between">
                  <span className="font-medium text-sky-600">{medicine.name}</span>
                  <span className="text-sky-500">Quantity: {medicine.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
