'use client';

import React, {useState} from "react";
import {Modal} from "@components/molecules";

const Index = () => {
    const [show, setShow] = useState(false);
    const [showFinishBuy, setShowFinishBuy] = useState(false);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    return (
        <Modal show={showFinishBuy} onClose={() => setShow(false)}
               title={loading ? 'Procesando pago' : 'Estado de la transaccion'}>
            {loading && <p>Cargando...</p>}
            {!loading && (
                <>
                    {success && <p>Pago exitoso</p>}
                    {!success && <p>Pago fallido</p>}
                </>
            )}
            <button
                onClick={() => setShow(false)}
                className={`w-full mt-6 text-white inline-flex items-center justify-center bg-black hover:opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase text-clamp-18-36`}>
                Aceptar
            </button>
        </Modal>
    )
}

export default Index;