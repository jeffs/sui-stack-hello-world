import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { Greeting } from "./Greeting";
import { useNetworkVariable } from "./networkConfig";

function App() {
  const currentAccount = useCurrentAccount();
  const greetingId = useNetworkVariable("greetingObjectId");

  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>Hello World Template</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <Container>
        <Container
          mt="5"
          py="2"
          px="4"
          style={{ background: "var(--gray-a2)" }}
        >
          {currentAccount ? (
            <Greeting id={greetingId} />
          ) : (
            <Heading>Please connect your wallet</Heading>
          )}
        </Container>
      </Container>
    </>
  );
}

export default App;
