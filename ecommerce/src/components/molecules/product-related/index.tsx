'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@utils/format-price';

type Props = {
  title: string;
  price: number;
  image: string;
};

const Index: FC<Props> = (props) => {
  const { title, price, image } = props;
  return (
    <>
      <Link href="#" className="flex cursor-pointer flex-col">
        <Image
          src={image}
          alt={title}
          priority={true}
          width={1000}
          height={1000}
          className="w-full hover:scale-125"
        />
        <p className="text-clamp-16-24 font-medium uppercase">{title}</p>
        <p>{formatPrice(price)}</p>
      </Link>
    </>
  );
};

export default Index;
