import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { useToast } from "@chakra-ui/react";

export default function CounterComponent() {
  const { count, increase } = useContext(CounterContext);
  const toast = useToast()

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <p>Current Count {count}:</p>
      <button
        onClick={() => {
          increase();
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }}
      >
        +1
      </button>
    </div>
  );
}
