'use client';

import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CardIcon, Input } from '@components/atoms';
import { Modal } from '@components/molecules';

const CreditCardForm: FC = () => {
  const [show, setShow] = useState(false);
  const [showResumen, setShowResumen] = useState(false);

  const [showFormCreditCard, setShowFormCreditCard] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [expire, setExpire] = useState('');
  const [name, setName] = useState('');
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    if (cardNumber.length === 19 && cvc.length === 3 && expire.length === 5 && name.length > 5) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [cardNumber, cvc, expire, name]);

  const handleInputCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/\D/g, '');

    if (isNaN(Number(inputValue))) {
      console.error('El valor ingresado no es un número válido');
      return;
    }

    if (inputValue.length > 16) {
      console.error('El número de la tarjeta de crédito no puede tener más de 16 dígitos');
      return;
    }

    const formattedValue = inputValue.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  const handleInputCvc = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/\D/g, '');

    if (isNaN(Number(inputValue))) {
      console.error('El valor ingresado no es un número válido');
      return;
    }

    if (inputValue.length > 3) {
      console.error('El CVC no puede tener más de 3 dígitos');
      return;
    }

    setCvc(inputValue);
  };

  const handleInputExpire = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/\D/g, '');

    if (isNaN(Number(inputValue))) {
      console.error('El valor ingresado no es un número válido');
      return;
    }

    if (inputValue.length > 4) {
      console.error('La fecha de expiración no puede tener más de 4 dígitos');
      return;
    }

    const formattedValue =
      inputValue.length === 4 ? inputValue.slice(0, 2) + '/' + inputValue.slice(2) : inputValue;
    setExpire(formattedValue);
  };

  const handleInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNext = () => {
    setShowResumen(true);
  };

  return (
    <>
      <Modal show={showFormCreditCard} onClose={handleClose} title="Pagar con tarjeta de credito">
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="card-number" className="mb-2 block text-sm font-medium text-gray-900">
              Numero de tarjeta
            </label>
            <Input
              id="card-number"
              iconLeft={<CardIcon franchise="visa" />}
              className="w-full"
              controlClassName="w-full"
              value={cardNumber}
              onChange={handleInputCardNumber}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="cvc" className="mb-2 block text-sm font-medium text-gray-900">
              CVC
            </label>
            <Input id="cvc" className="block w-full" value={cvc} onChange={handleInputCvc} />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-900">
              Expiracion (MM/DD)
            </label>
            <Input id="date" className="block w-full" value={expire} onChange={handleInputExpire} />
          </div>
          <div className="col-span-2">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
              Nombre completo
            </label>
            <Input id="name" className="block w-full" value={name} onChange={handleInputName} />
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={!isNext}
          className={`${!isNext ? 'cursor-not-allowed opacity-70' : ''} mt-6 inline-flex items-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:opacity-80 focus:outline-none`}
        >
          Siguiente
        </button>
      </Modal>
    </>
  );
};

export default CreditCardForm;
