"use client";

import React, { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { Button } from "@heroui/react";
import ConectorsModal from './connectorsModal';
import { addressSlice } from '@/helper/helper';
import { ChevronDown } from './icons';

function ConnectButton() {
    // const { connect, connectors } = useConnect();
    const { isConnected, address, account } = useAccount();
    const [openModal, setModal] = useState(false);
    const { disconnect } = useDisconnect();
     const user = isConnected ? addressSlice(address ?? "") : "Connect Wallet"

    function modalHandler() {
        setModal((prev) => !prev);
      }
    return (
        <>
         {openModal && !isConnected && <ConectorsModal setIsOpen={modalHandler} />}
        <header className="flex justify-between p-2">
             <Button
            className="bg-transparent rounded-full hover:bg-transparent shadow-none border"
            onClick={modalHandler}
          >
            {user}
            <span
              className={`${
                openModal ? "-rotate-180" : "rotate-0"
              } transition-all duration-500`}
            >
              <ChevronDown className="dark:text-white text-black" />
            </span>
          </Button>
          {openModal && (
            <Button
              className={`fixed top-16 right-20 transition-all duration-500 border bg-inherit rounded-full hover:bg-transparent ${
                isConnected ? "block" : "hidden"
              }`}
              onClick={() => {
                disconnect();
                setModal((prev) => !prev);
              }}
            >
              Disconnect Wallet
            </Button>
          )}
        </header>
        </>
    )
}

export default ConnectButton;