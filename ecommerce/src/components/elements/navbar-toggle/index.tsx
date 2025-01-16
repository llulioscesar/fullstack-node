'use client';

import React, { FC } from 'react';
import { Icons, IconName } from '@components/atoms';

const NavbarToggle: FC = () => {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <Icons name={IconName.MENU} />
    </button>
  );
};

export default NavbarToggle;
