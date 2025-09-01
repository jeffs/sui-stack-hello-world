import { getFullnodeUrl } from "@mysten/sui/client";
import {
  TESTNET_HELLO_WORLD_PACKAGE_ID,
  TESTNET_GREETING_OBJECT_ID,
} from "./constants.ts";
import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        helloWorldPackageId: TESTNET_HELLO_WORLD_PACKAGE_ID,
        greetingObjectId: TESTNET_GREETING_OBJECT_ID,
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
