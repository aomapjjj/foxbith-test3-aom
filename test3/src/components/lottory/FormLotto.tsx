import { Box, Grid2, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

interface Lottory {
  first: Object
}

const baseUrl = "http://localhost:3000/api/route"

const FormLotto = () => {
  const [posts, setPosts] = useState<any>()

  async function fetchPosts() {
    try {
      const response = await axios.post(baseUrl)
      return response.data
    } catch (error) {
      console.error("Error fetching posts:", error)
    }
  }
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["lottory"],
    queryFn:fetchPosts
  })


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }

  return (
    <>
      <Grid2
        container
        sx={{
          gap: 4,
          p: 6
        }}
      >
        <Grid2 size={12}>
          <Box
            sx={{
              boxShadow: 3,
              width: "100%",
              height: "300px",
              alignContent: "center",
              justifyItems: "center",
              borderRadius: "10px"
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                fontFamily: "Prompt",
                color: "#454C60",
                pb: 2
              }}
            >
              รางวัลที่ 1
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
              sx={{
                fontFamily: "Prompt",
                pb: 2
              }}
              color="warning"
            >
              {}
            </Typography>
            <Typography
              fontWeight={300}
              sx={{
                fontFamily: "Prompt",
                color: "#454C60"
              }}
            >
              รางวัลละ 6,000,000 บาท (รับสุทธิหลังถูกหักภาษี 5,970,000 บาท)
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </>
  )
}
export default FormLotto
