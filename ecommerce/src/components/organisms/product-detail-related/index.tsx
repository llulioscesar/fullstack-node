'use client';

import React, { FC } from 'react';
import { ProductRelated as Product } from '@components/molecules';

export type ProductRelated = {
  title: string;
  price: number;
  image: string;
};

type Props = {
  products: ProductRelated[];
};

const Index: FC<Props> = (props) => {
  const { products = [] } = props;

  return (
    <>
      <section className="mx-auto my-28 max-w-screen-xl px-4">
        <p className="text-clamp-16-24 font-medium uppercase">Tambien te puede interesar</p>
        <div className="md:grid md:grid-cols-3">
          {products.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
