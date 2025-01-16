'use client';

import React, { FC } from 'react';
import { ProductTitleAttribute, ProductSize as Size } from '@components/atoms';

export type ProductSize = {
  size: string;
  price: number;
};

type Props = {
  sizes: ProductSize[];
  sizeSelected: ProductSize;
  onSizeSelected: (size: ProductSize) => void;
};

const Index: FC<Props> = (props) => {
  const { sizes, sizeSelected, onSizeSelected } = props;

  return (
    <>
      <div>
        <ProductTitleAttribute title="Talla" />
        <div className="grid auto-cols-max grid-flow-row auto-rows-max grid-cols-4 gap-2">
          {sizes.map((size, index) => (
            <Size
              key={index}
              size={size.size}
              selected={sizeSelected.size === size.size}
              onSelected={() => onSizeSelected(size)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
