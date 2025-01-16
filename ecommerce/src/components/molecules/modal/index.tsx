'use client';

import React, { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  show: boolean;
  onClose: () => void;
  title?: string;
}>;

const Index: FC<Props> = (props) => {
  const { children, show, onClose, title } = props;
  return (
    <>
      <div
        className={`${show ? '' : 'hidden'} fixed bottom-0 left-0 right-0 top-0 z-50 w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-75 md:inset-0`}
      >
        <div className="relative mx-auto max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-bg-color shadow">
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
              {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
              <button
                type="button"
                onClick={onClose}
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
