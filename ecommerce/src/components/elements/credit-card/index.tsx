'use client';

import React, { FC } from 'react';

const CreditCard: FC = () => {
  return (
    <div className="mx-auto mt-40 max-w-lg">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <img
              className="h-8"
              src="https://www.svgrepo.com/show/499847/company.svg"
              alt="Workflow logo"
            />
            <span className="font-medium text-gray-600">05/24</span>
          </div>
          <div className="mt-4">
            <div className="text-xl font-bold text-gray-800">**** **** **** 1234</div>
            <div className="mt-2 flex items-center justify-between">
              <div className="text-sm text-gray-600">CARDHOLDER NAME</div>
              <img
                className="h-10 w-10"
                src="https://www.svgrepo.com/show/362011/mastercard.svg"
                alt="Mastercard logo"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-6 py-4">
          <div className="font-medium text-gray-600">CARD VERIFICATION VALUE</div>
          <div className="mt-2 text-lg font-bold text-gray-800">***</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
