"use client";

import React from "react";
import PropTypes from "prop-types";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import PromotionSection from "../sections/PromotionSection";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/product-demo4.png",
    price: "$29.99",
    link: "/design-catalog/product/1",
  },
  {
    id: 2,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/2",
  },
  {
    id: 3,
    image: "/product-demo2.png",
    price: "$29.99",
    link: "/design-catalog/product/3",
  },
  {
    id: 4,
    image: "/product-demo.png",
    price: "$29.99",
    link: "/design-catalog/product/4",
  },
  {
    id: 5,
    image: "/product-demo5.png",
    price: "$29.99",
    link: "/design-catalog/product/5",
  },
  {
    id: 6,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/6",
  },
];

const Cart = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl
              transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300
              data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 min-h-screen"
          >
            <div className="flex">
              <div className="flex flex-col min-h-screen w-1/2 gap-4 bg-white-green text-dark-gray">
                <div className="flex flex-col p-5">
                  <h1 className="text-2xl font-bold font-base-mono">Cart</h1>
                </div>

                <div className="px-20">
                  <div className="text-left flex flex-col font-base-mono w-52">
                    <h5 className="text-base font-bold">Amount: $89.99</h5>
                    <h6 className="text-base font-bold border-light-green border-b-2">
                      Tax: 2.2$
                    </h6>

                    <h3 className="text-lg text-gray-500 font-base font-bold">
                      Total: $92.19
                    </h3>
                  </div>

                  <div
                    className="bg-transparent border-neutral-400 border-2 h-[450px] max-h-[450px] overflow-scroll mt-5 
                    flex flex-col gap-5 p-5 scroll-p-2 scroll-light-green"
                  >
                    {products.map((product) => (
                      <div className="flex gap-5 items-center" key={product.id}>
                        <div className="w-1/4 flex flex-col items-center justify-center">
                          <Image
                            src={product.image}
                            alt={product.id}
                            className="w-32 h-32"
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className="flex flex-col w-3/4 font-base-mono">
                          <h5 className="text-sm font-bold">
                            Product ID -{" "}
                            <span className="underline">#{product.id}</span>
                          </h5>

                          <h3 className="text-lg font-bold">
                            Heart Theme Instagram Post Background (Scalable)
                          </h3>

                          <h4 className="text-base font-bold">
                            {product.price}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-neutral-400 border-2 border-t-0">
                    <PromotionSection textColor="dark-gray" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col min-h-screen w-1/2 bg-light-green text-dark-gray  p-20">
                <h2 className="text-2xl font-bold font-base-mono text-right mb-5">
                  Payment
                </h2>

                <div className="space-y-8 font-base-mono">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-base font-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-white-green p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-5">
                    <h3 className="text-base font-bold">Billing Details</h3>

                    <div className="flex flex-col">
                      <label htmlFor="address" className="text-base font-bold">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="bg-white-green p-2"
                      />
                    </div>

                    <div className="flex gap-5 w-full">
                      <div className="flex flex-col w-2/5">
                        <label htmlFor="state" className="text-base font-bold">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          className="bg-white-green p-2"
                        />
                      </div>

                      <div className="flex flex-col w-3/5">
                        <label htmlFor="city" className="text-base font-bold">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="bg-white-green p-2"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="zipCode" className="text-base font-bold">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        className="bg-white-green p-2 w-2/5 mr-5"
                      />
                    </div>

                    <fieldset id="payment-methods flex flex-col gap-5">
                      <legend className="text-base font-bold">
                        Payment Methods
                      </legend>

                      <div className="flex gap-20">
                        <div className="flex gap-2 items-center">
                          <input
                            type="radio"
                            id="card"
                            name="payment-methods"
                          />
                          <label htmlFor="card">Credit Card</label>
                        </div>

                        <div className="flex gap-2 items-center">
                          <input
                            type="radio"
                            id="paypal"
                            name="payment-methods"
                          />
                          <label htmlFor="card">Paypal</label>
                        </div>

                        <div className="flex gap-2 items-center">
                          <input
                            type="radio"
                            id="stripe"
                            name="payment-methods"
                          />
                          <label htmlFor="card">Stripe</label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="flex flex-col">
                      <label
                        htmlFor="cardHolderName"
                        className="text-base font-bold"
                      >
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        id="cardHolderName"
                        className="bg-white-green p-2"
                      />
                    </div>

                    <div className="flex gap-5">
                      <div className="flex flex-col w-3/5">
                        <label
                          htmlFor="cardNumber"
                          className="text-base font-bold"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          className="bg-white-green p-2"
                        />
                      </div>

                      <div className="flex flex-col w-2/5">
                        <label htmlFor="cvc" className="text-base font-bold">
                          CVC (CVV)
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          className="bg-white-green p-2"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="bg-dark-gray text-white-green p-2 w-48 rounded-full mx-auto">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

Cart.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Cart;
