import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import {  Button, useToast } from "@chakra-ui/react";
import { toastOptions } from "./toastOptions";

export default function CounterComponent() {
  const { count, increase } = useContext(CounterContext);
  const toast = useToast();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Current Count {count}:</p>
      <Button
        onClick={() => {
          increase();
          toast(toastOptions(count));
        }}
      >
        +1
      </Button>
    </div>
  );
}
