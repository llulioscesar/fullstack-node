'use client';

import React, { FC } from 'react';

type Props = {
  size: string;
  selected: boolean;
  onSelected: (size: string) => void;
};

const ProductSize: FC<Props> = (props) => {
  const { size, selected, onSelected } = props;
  return (
    <>
      <button
        onClick={() => onSelected(size)}
        className={`${selected ? 'border-black font-bold' : 'border-controls-color'} flex cursor-pointer justify-center rounded-md border-2 px-6 py-1 focus:outline-none`}
      >
        {size}
      </button>
    </>
  );
};

export default ProductSize;
