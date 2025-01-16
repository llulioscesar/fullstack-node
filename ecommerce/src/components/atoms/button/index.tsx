'use client';

import React, { FC, ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${className ? className : ''} min-h-11 rounded-lg bg-black px-4 py-2 font-medium uppercase text-white`}
    />
  );
};

export default Button;
