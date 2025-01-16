'use client';

import React, { FC, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  iconLeft?: React.ReactNode;
  controlClassName?: string;
};

const Input: FC<Props> = (props) => {
  const { controlClassName, iconLeft, className = '', ...rest } = props;
  return (
    <>
      {iconLeft && (
        <>
          <div className={`${className} input inline-block rounded-lg border`}>
            <div className="flex flex-row items-center pl-4">
              {iconLeft}
              <input
                {...rest}
                className={`${controlClassName ? controlClassName : ''} ml-2 h-11 rounded-lg pr-4 focus:outline-none`}
              />
            </div>
          </div>
        </>
      )}
      {!iconLeft && (
        <>
          <input
            {...rest}
            className={`${className} rounded-lg border focus:outline-none ${iconLeft ? 'pl-12' : 'pl-4'} h-11 pr-4`}
          />
        </>
      )}
    </>
  );
};

export default Input;
