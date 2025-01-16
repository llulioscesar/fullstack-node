'use client';

import React, { FC } from 'react';
import { Icons, IconName } from '@components/atoms';

const NavbarCart: FC = () => {
  return (
    <>
      <button className="mr-3 justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none md:mr-0">
        <Icons name={IconName.SHOPPING_CART} className="h-6 w-6 md:h-10 md:w-10" />
      </button>
    </>
  );
};

export default NavbarCart;
