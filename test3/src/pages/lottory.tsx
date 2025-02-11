import Logo from "@/components/Logo"
import FormLotto from "@/components/lottory/FormLotto"
import { Box, Grow } from "@mui/material"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const lottory = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <div>
            <Logo />
          </div>
        </Grow>
      </Box>
      <QueryClientProvider client={queryClient}>
      <FormLotto />
      </ QueryClientProvider>
    </>
  )
}
export default lottory
