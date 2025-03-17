import { useConnect } from "@starknet-react/core";
import { modal } from "../types/index";
import {CrossX} from "./icons";
import { Button } from "@heroui/react";

function ConectorsModal({ setIsOpen }: modal) {
  const { connect, connectors } = useConnect();

  return (
    <div className="relative z-[555] dark:text-white">
      <div
        className="fixed h-screen w-full bg-[#868686]/20 backdrop-blur-md top-0 left-0" 
        onClick={setIsOpen}
      />
      <div className="w-[398px] min-h-[316px] pb-5 pt-8 px-3 bg-white dark:bg-[#1E1E1E] top-1/2 right-1/2 fixed translate-y-[45%] translate-x-[50%] rounded-lg dark:text-white">
        <Button
          className="text-white bg-transparent absolute right-4 top-2 dark:text-white"
          onClick={setIsOpen}
        >
          <CrossX  className="dark:text-white text-black" />
        </Button>
        <h1 className="text-center font-normal text-base uppercase">
          select A wallet
        </h1>
        <div className="w-full grid gap-y-2 mt-7">
          {connectors.map((connector) => (
            <Button
              key={connector.id}
              onClick={() => {
                connect({ connector });
                setIsOpen();
              }}
              className="w-full border bg-transparent rounded-[16px] py-6 capitalize text-start text-lg flex justify-start"
            >
              {
                connector.id
              }
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ConectorsModal;
