import { Box, Text, UseToastOptions } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
export const toastOptions = (count: number): UseToastOptions => {
  return {
    position: "bottom-right",
    duration: 1500,
    render: () => (
      <Box
        bg="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F"
        borderRadius="8px"
        border="2px solid rgba(116, 200, 152, 0.45)"
        rounded="md"
      >
        <Box
          borderRadius="3px"
          background="gray.900"
          p="16px"
          color="white"
          bg="radial-gradient(53.57% 282.15% at 2.14% 50%, 
              rgba(34, 42, 37, 0.5) 0%, 
              rgba(8, 20, 13, 0.5) 100%),rgba(37, 55, 45, 0.5)"
          boxShadow="
              0px 0px 0px 1px rgba(40, 41, 50, 0.4),
              0px 2px 2px -1px rgba(40, 41, 50, 0.4),
              0px 4px 4px -2px rgba(40, 41, 50, 0.4),
              0px 8px 8px -4px rgba(40, 41, 50, 0.6),
              0px 16px 32px rgba(40, 41, 50, 0.6)"
        >
          <Box display="flex" alignItems="center" gap="20px">
            <CheckIcon
              color="#74C898"
              width="24px"
              height="24px"
              border="2px solid #74C898"
              borderRadius="12px"
              p="3px"
            />
            <Box>
              <Text fontSize="16px" fontWeight="bold">
                Incremented
              </Text>
              <Text>Counter is now {count}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    ),
  };
};
