import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import logo from "../assets/sendlogo.png";
import error from "../assets/error.png";

export default function NewModal({
  isOpen,
  closeModal,
  title,
  message,
  type,
  redirectLink,
}) {
  const getBorder = () => {
    switch (type) {
      case "error":
        return "border-red-500";
      case "success":
        return "border-green-500";
      case "info":
        return "border-blue-500";
      default:
        return "border-yellow-500";
    }
  };

  const handleButtonClick = () => {
    if (type === "success" && redirectLink) {
      window.location.href = redirectLink;
    } else {
      closeModal();
    }
  };

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
                <Dialog.Panel
                  className={`relative w-72 h-fit sm:w-[50em] sm:h-[20em] transform overflow-visible rounded-sm  p-2 sm:p-6 text-left align-middle shadow-xl transition-all flex flex-col items-center justify-center`}
                >
                  <div
                    className={`bg-[rgba(0,0,0,1)] ${getBorder()}  p-2 sm:p-0 rounded-sm relative sm:absolute w-full h-full -z-20  flex flex-col items-center justify-center border-4 `}
                  >
                    <img
                      src={type === "error" ? error : logo}
                      alt=""
                      className="w-32 h-32"
                    />
                    <div className="mt-2">
                      <p className="text-white text-center sm:text-balance font-bold text-lg sm:text-xl my-2">
                        {message}
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="w-32 inline-flex justify-center rounded-md border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-500 focus:outline-none"
                        onClick={handleButtonClick}
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
