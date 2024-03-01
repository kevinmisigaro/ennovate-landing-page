import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import logo from "../assets/sendlogo.png";
export default function Modal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-[50em] h-[30em] transform overflow-visible rounded-sm  bg-yellow-500 p-6 text-left align-middle shadow-xl transition-all  flex flex-col items-center justify-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="bg-[rgba(0,0,0,1)] rounded-sm absolute w-full h-full -z-20 -right-12 -top-12 flex flex-col items-center justify-center">
                    {/* stuffs here */}
                    <img src={logo} alt="" className="w-32 h-32" />
                    <div className="mt-2">
                      <p className=" text-white font-bold text-xl my-2">
                        Thank your interest in joining TheNextFund Syndicate
                        Network
                      </p>
                      <h4 className="text-yellow-500 my-1">
                        We shall get back to you in the next 7 days to discuss
                        your interest
                      </h4>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="w-32 inline-flex justify-center rounded-md border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-500  focus:outline-none"
                        onClick={closeModal}
                      >
                        exit
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
