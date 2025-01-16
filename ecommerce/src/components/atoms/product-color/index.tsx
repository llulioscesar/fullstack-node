'use client';

import React, { FC, useState } from 'react';

type Props = {
  color: string;
  selected: boolean;
  onSelected: (color: string) => void;
};

const ProductColor: FC<Props> = (props) => {
  const { color, onSelected, selected } = props;

  const handleColorClick = (color: string) => {
    onSelected(color);
  };

  return (
    <>
      <button
        style={{ backgroundColor: color }}
        onClick={() => handleColorClick(color)}
        className={`mr-1 inline-block h-10 w-10 rounded-3xl focus:outline-none ${selected ? 'border-2 border-black' : ''}`}
      >
        &nbsp;
      </button>
    </>
  );
};

export default ProductColor;
