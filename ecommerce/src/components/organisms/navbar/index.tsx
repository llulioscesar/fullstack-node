'use client';

import React, { FC } from 'react';
import { Logo } from '@components/atoms';
import Link from 'next/link';
import { NavbarLink, NavbarCart, NavbarToggle, NavbarSearch } from '@components/elements';

const Index: FC = () => {
  return (
    <header>
      <nav className="bg-bg-color">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/">
            <Logo className="logo h-8 w-8 md:h-12 md:w-12" />
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              <NavbarLink text="Hombre" url="#" />
              <NavbarLink text="Mujer" url="#" />
              <NavbarLink text="Niños" url="#" />
              <NavbarLink text="Ofertas" url="#" />
            </ul>
          </div>

          <div className="flex flex-row items-center justify-center">
            <NavbarSearch />
            <NavbarCart />
            <NavbarToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Index;
