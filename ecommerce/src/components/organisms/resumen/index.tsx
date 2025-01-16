'use client';

import React, {FC, useState} from 'react';
import {Modal, ProductDetailColors, ProductDetailPrice, ProductDetailSizes} from "@components/molecules";
import Image from "next/image";

const Index: FC = () => {

    const [show, setShow] = useState(true);
    const [showPayment, setShowPayment] = useState(true);
    const [showResumen, setShowResumen] = useState(true);

    const images: {url:string, alt:string}[] = [];
    const sizeSelected = {size: '', price: 0};

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
                            style={{filter: 'drop-shadow(20px 20px 4px rgba(0,0,0,0.25))'}}
                            width={1000}
                            height={1000}
                        />
                    )}
                    <ProductDetailColors
                        colors={['']}
                        colorSelected={''}
                        onColorSelected={() => {
                        }}
                    />
                    <ProductDetailSizes
                        sizes={[sizeSelected]}
                        sizeSelected={sizeSelected}
                        onSizeSelected={() => {
                        }}
                    />
                    <ProductDetailPrice price={0}/>
                    <button
                        onClick={handlePayment}
                        className={`w-full mt-6 text-white inline-flex items-center justify-center bg-black hover:opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase text-clamp-18-36`}>
                        Pagar
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default Index;