'use client';

import React, { FC, useState } from 'react';
import {
  Modal,
  ProductDetailColors,
  ProductDetailPrice,
  ProductDetailSizes,
} from '@components/molecules';
import Image from 'next/image';

const Index: FC = () => {
  const [show, setShow] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showResumen, setShowResumen] = useState(false);

  const images: { url: string; alt: string }[] = [];
  const sizeSelected = { size: '', price: 0 };

  const handlePayment = () => {
    setShow(false);
    setShowPayment(true);
  };

  return (
    <>
      <Modal show={showResumen} onClose={() => setShow(false)}>
        <div className="mb-4">
          {images.length > 0 && (
            <Image
              src={images[0].url}
              alt={images[0].alt}
              priority={true}
              style={{ filter: 'drop-shadow(20px 20px 4px rgba(0,0,0,0.25))' }}
              width={1000}
              height={1000}
            />
          )}
          <ProductDetailColors colors={['']} colorSelected={''} onColorSelected={() => {}} />
          <ProductDetailSizes
            sizes={[sizeSelected]}
            sizeSelected={sizeSelected}
            onSizeSelected={() => {}}
          />
          <ProductDetailPrice price={0} />
          <button
            onClick={handlePayment}
            className={`mt-6 inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-center text-clamp-18-36 text-sm font-medium uppercase text-white hover:opacity-80 focus:outline-none`}
          >
            Pagar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Index;
