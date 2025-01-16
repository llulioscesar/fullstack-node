'use client';

import React, { FC, useEffect, useState } from 'react';
import { Icons, IconName, Input } from '@components/atoms';

const NavbarSearch: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {windowWidth && windowWidth >= 768 && <Input iconLeft={<Icons name={IconName.SEARCH} />} />}
      {windowWidth && windowWidth < 768 && (
        <button className="justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none">
          <Icons name={IconName.SEARCH} className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default NavbarSearch;
