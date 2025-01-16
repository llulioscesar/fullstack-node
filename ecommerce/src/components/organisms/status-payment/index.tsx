'use client';

import React, { useState } from 'react';
import { Modal } from '@components/molecules';

const Index = () => {
  const [show, setShow] = useState(false);
  const [showFinishBuy, setShowFinishBuy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  return (
    <Modal
      show={showFinishBuy}
      onClose={() => setShow(false)}
      title={loading ? 'Procesando pago' : 'Estado de la transaccion'}
    >
      {loading && <p>Cargando...</p>}
      {!loading && (
        <>
          {success && <p>Pago exitoso</p>}
          {!success && <p>Pago fallido</p>}
        </>
      )}
      <button
        onClick={() => setShow(false)}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-center text-clamp-18-36 text-sm font-medium uppercase text-white hover:opacity-80 focus:outline-none`}
      >
        Aceptar
      </button>
    </Modal>
  );
};

export default Index;
