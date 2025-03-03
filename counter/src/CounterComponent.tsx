import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { Box, Button, useToast } from "@chakra-ui/react";

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
          toast({
            position: "bottom-right",
            render: () => (
              <Box
                position="relative"
                display="inline-block"
                p="5px"
                borderRadius="8px"
                background="linear-gradient(0deg, #6F7076, #6F7076), 
                            radial-gradient(53.57% 282.15% at 2.14% 50%, 
                            rgba(116, 200, 152, 0.65) 0%, 
                            rgba(116, 200, 152, 0.1) 100%)"
              >
                <Box
                  borderRadius="6px"
                  background="gray.900"
                  p="16px"
                  color="white"
                >
                  <div style={{ display: "flex", alignItems:"center" , gap:"20px"}}>
                    <div>V</div>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        Incremented
                      </p>
                      <p>Counter is now {count}</p>
                    </div>
                  </div>
                </Box>
              </Box>
            ),
          });
        }}
      >
        +1
      </Button>
    </div>
  );
}
