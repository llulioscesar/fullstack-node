'use client';

import React, { FC } from 'react';

type Props = {
  mainText: string;
  subText: string;
  specialText: string;
};

const ProductDetailHeroText: FC<Props> = (props) => {
  const { mainText, subText, specialText } = props;
  return (
    <>
      <h3 className="text-clamp-14-24 font-light uppercase">{subText}</h3>
      <h2 className="text-clamp-16-36 font-normal uppercase">
        {mainText}
        <span className="ml-1 bg-black px-2 text-clamp-16-36 font-normal uppercase text-white">
          {specialText}
        </span>
      </h2>
    </>
  );
};

export default ProductDetailHeroText;
