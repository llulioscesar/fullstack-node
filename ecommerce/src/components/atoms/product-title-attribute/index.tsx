'use client';

import React, { FC } from 'react';

type Props = {
  title: string;
};

const ProductTitleAttribute: FC<Props> = (props) => {
  const { title } = props;
  return <p className="mt-5 text-clamp-16-24 font-medium uppercase">{title}</p>;
};

export default ProductTitleAttribute;
