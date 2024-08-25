

import React from "react";

export default function PharmaContract() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Pharmaceutical Supply Agreement
      </h1>

      <p className="mb-6 text-gray-700">
        **This Pharmaceutical Supply Agreement ("Agreement")** is made and entered into on this
        [<strong>Date</strong>], by and between:
      </p>

      <p className="mb-6 text-gray-700">
        **PharmaCo, Inc.**, a corporation organized and existing under the laws of [<strong>Country/State</strong>],
        with its principal office located at [<strong>Address</strong>] (hereinafter referred to as "PharmaCo"), and
      </p>

      <p className="mb-6 text-gray-700">
        **Distributor, Inc.**, a corporation organized and existing under the laws of [<strong>Country/State</strong>],
        with its principal office located at [<strong>Address</strong>] (hereinafter referred to as "Distributor").
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">1. PURPOSE</h2>
      <p className="mb-6 text-gray-700">
        This Agreement sets forth the terms and conditions under which PharmaCo agrees to supply, and Distributor agrees
        to purchase and distribute, certain pharmaceutical products as detailed herein.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">2. PRODUCTS</h2>
      <p className="mb-6 text-gray-700">
        PharmaCo agrees to supply the following products to Distributor:
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Product A: [Description, SKU, etc.]</li>
          <li>Product B: [Description, SKU, etc.]</li>
          <li>Product C: [Description, SKU, etc.]</li>
        </ul>
        The products listed above may be amended from time to time by mutual written consent of both parties.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">3. TERM OF AGREEMENT</h2>
      <p className="mb-6 text-gray-700">
        This Agreement shall commence on the Effective Date and shall remain in effect for a period of [<strong>Number</strong>] years, unless terminated earlier in accordance with the provisions herein.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">4. PRICING AND PAYMENT TERMS</h2>
      <p className="mb-6 text-gray-700">
        <ul className="list-disc list-inside ml-6">
          <li>
            <strong>Pricing:</strong> Distributor agrees to purchase the products at the prices listed in [<strong>Appendix A/Pricing Schedule</strong>].
          </li>
          <li>
            <strong>Payment Terms:</strong> Payments shall be made by Distributor to PharmaCo within [<strong>Number</strong>] days of receipt of the invoice. Payments shall be made via [<strong>Payment Method</strong>] to the account designated by PharmaCo.
          </li>
          <li>
            <strong>Late Payments:</strong> Any payments not made within the specified period shall accrue interest at a rate of [<strong>Interest Rate</strong>] per annum until fully paid.
          </li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">5. ORDER AND DELIVERY</h2>
      <p className="mb-6 text-gray-700">
        <ul className="list-disc list-inside ml-6">
          <li>
            <strong>Order Placement:</strong> Distributor shall place orders via [<strong>Order Method</strong>] at least [<strong>Number</strong>] days prior to the desired delivery date.
          </li>
          <li>
            <strong>Delivery:</strong> PharmaCo shall deliver the products to the Distributor at [<strong>Delivery Location</strong>] within [<strong>Number</strong>] days of receiving the order. The risk of loss shall pass to Distributor upon delivery.
          </li>
          <li>
            <strong>Shipping Costs:</strong> [Specify who is responsible for shipping costs].
          </li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">6. QUALITY AND WARRANTY</h2>
      <p className="mb-6 text-gray-700">
        <ul className="list-disc list-inside ml-6">
          <li>
            <strong>Quality Assurance:</strong> PharmaCo warrants that all products supplied under this Agreement shall comply with [<strong>Quality Standards</strong>] and are free from defects in material and workmanship.
          </li>
          <li>
            <strong>Warranty Period:</strong> The warranty period for each product shall be [<strong>Number</strong>] months from the date of delivery.
          </li>
          <li>
            <strong>Returns:</strong> Distributor may return any defective products to PharmaCo within [<strong>Number</strong>] days of discovery, provided such defects are not due to improper handling by Distributor.
          </li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">7. COMPLIANCE WITH LAWS</h2>
      <p className="mb-6 text-gray-700">
        Both parties agree to comply with all applicable laws and regulations governing the manufacture, sale, and distribution of the products.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">8. CONFIDENTIALITY</h2>
      <p className="mb-6 text-gray-700">
        Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed under this Agreement and shall not disclose such information to any third party without prior written consent.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-indigo-500">9. TERMINATION</h2>
      <p className="mb-6 text-gray-700">
        <ul className="list-disc list-inside ml-6">
          <li>
            <strong>Termination for Cause:</strong> Either party may terminate this Agreement for cause if the other party fails to perform any of its material obligations under this Agreement and such failure continues for [<strong>Number</strong>] days after written notice.
          </li>
          <li>
            <strong>Termination for Convenience:</strong> Either party may terminate this Agreement without cause by providing [<strong>Number</strong>] days' written notice to the other party.
          </li>
        </ul>
      </p>

      <p className="mt-8 text-gray-700">
        **Signed:** <br />
        PharmaCo, Inc. <br />
        Distributor, Inc.
      </p>
    </div>
  );
}
