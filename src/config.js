import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "[YOUR ADDRESS HERE]"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "[YOUR URL HERE]",
  },
};