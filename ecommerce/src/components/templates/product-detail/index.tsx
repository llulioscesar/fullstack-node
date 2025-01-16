'use client';

import React, { FC } from 'react';
import {
  FormCreditCard,
  ProductDetailRelated,
  Resumen,
  StatusPayment,
} from '@components/organisms';
import {
  ProductDetailBrand,
  ProductDetailColors,
  ProductDetailHeroText,
  ProductDetailImagenView,
  ProductDetailPrice,
  ProductDetailSizes,
} from '@components/molecules';
import { Button } from '@components/atoms';

const ProductDetail: FC = () => {
  return (
    <>
      <section className="mx-auto mt-5 max-w-screen-xl px-4 md:mt-20">
        <div className="block gap-4 md:grid md:grid-cols-product">
          <div>
            <ProductDetailHeroText
              mainText={'mainText'}
              subText={'subText'}
              specialText={'specialText'}
            />
            <h1 className="mt-5 text-clamp-32-64 font-bold md:mb-24 md:mt-24">Title</h1>
            <p className="hidden text-base md:block">Description</p>
          </div>

          <ProductDetailImagenView images={[]} className="mb-10 md:mb-0" />

          <div>
            <ProductDetailBrand name={''} />
            {'' !== undefined && (
              <>
                <ProductDetailColors colors={[]} colorSelected={''} onColorSelected={() => {}} />
              </>
            )}
            <ProductDetailSizes
              sizes={[]}
              sizeSelected={{ size: '', price: 0 }}
              onSizeSelected={() => {}}
            />
            {0 !== undefined && <ProductDetailPrice price={0} />}
            <Button className="mt-10 w-full" onClick={() => {}}>
              Pagar con <br /> tarjeta de credito
            </Button>
          </div>
        </div>

        <p className="mt-10 block text-base md:hidden">description</p>
      </section>

      <ProductDetailRelated products={[]} />
      <FormCreditCard />
      <Resumen />
      <StatusPayment />
    </>
  );
};

export default ProductDetail;
