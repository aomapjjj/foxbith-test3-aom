import { Box, Grid2, Typography } from "@mui/material"
import axios from "axios"
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState
} from "react"
import { useQuery } from "@tanstack/react-query"

interface LOTTO {
  price: string
  number: {
    round: number
    value: string
  }[]

  // second: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
  // third: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
  // fourth: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
  // fifth: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
  // last2: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
  // last3f: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
  // last3b: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
  // near1: {
  //   price: string
  //   number: {
  //     round: number
  //     value: string
  //   }[]
  // }
}

const LOTTO_INIT = {
  price: "",
  number: [
    {
      round: 0,
      value: ""
    }
  ]
  // second: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // },
  // third: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // },
  // fourth: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // },
  // fifth: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // },
  // last2: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // },
  // last3f: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // },
  // last3b: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // },
  // near1: {
  //   price: "",
  //   number: [
  //     {
  //       round: 0,
  //       value: ""
  //     }
  //   ]
  // }
}

const baseUrl = "http://localhost:3000/api/route"

const FormLotto = () => {
  const [dataset, setData] = useState<boolean>(false)
  const [lottory1, setLottory1] = useState<any>([{ ...LOTTO_INIT }])
  const [lottoryNear1, setLottoryNear1] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory2, setLottory2] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory3, setLottory3] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory4, setLottory4] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory5, setLottory5] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryL2, setLottoryL2] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryL3F, setLottoryL3F] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryL3B, setLottoryL3B] = useState<LOTTO[]>([{ ...LOTTO_INIT }])

  async function getLatestLottery() {
    try {
      const response = await axios.post(baseUrl)
      return response?.data.response
    } catch (error) {
      console.error("Error fetching posts:", error)
    }
  }
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["lottory"],
    queryFn: getLatestLottery
  })

  if (data && dataset === false) {
    setLottory1((prev: any) => {
      const lotto = [data.data.first]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottoryNear1((prev: any) => {
      const lotto = [data.data.near1]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottory2((prev: any) => {
      const lotto = [data.data.second]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottory3((prev: any) => {
      const lotto = [data.data.third]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottory4((prev: any) => {
      const lotto = [data.data.fourth]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottory5((prev: any) => {
      const lotto = [data.data.fifth]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottoryL2((prev: any) => {
      const lotto = [data.data.last2]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottoryL3F((prev: any) => {
      const lotto = [data.data.last3f]
      prev = [...lotto]
      console.log(prev)
      return prev
    })
    setLottoryL3B((prev: any) => {
      const lotto = [data.data.last3b]
      prev = [...lotto]
      console.log(prev)
      return prev
    })

    setData(true)
  }

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
          py: 2,
          px: 20
        }}
      >
        <Grid2
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          {lottory1?.map((lotto: any, index: number) => (
            <Box
              key={index}
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
                variant="h4"
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
                letterSpacing={2}
                color="warning"
              >
                {lotto.number[0].value}
              </Typography>
              <Typography
                fontWeight={300}
                sx={{
                  fontFamily: "Prompt",
                  color: "#454C60",
                  px: 2
                }}
              >
                รางวัลละ 6,000,000 บาท (รับสุทธิหลังถูกหักภาษี 5,970,000 บาท)
              </Typography>
            </Box>
          ))}
        </Grid2>

        <Grid2 size={12} sx={{}}>
          <Grid2 container>
            <Grid2
              size={4}
              sx={{
                justifyItems: "center"
              }}
            >
              {lottoryL3F?.map((lotto: any, index: number) => (
                <Box
                  sx={{
                    boxShadow: 3,
                    width: "90%",
                    height: "300px",
                    alignContent: "center",
                    justifyItems: "center",
                    borderRadius: "10px",
                    px: 2
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                      fontFamily: "Prompt",
                      color: "#454C60",
                      pb: 2
                    }}
                  >
                    เลขหน้า 3 ตัว
                  </Typography>
                  {lotto?.number.map((lotto: any, index: number) => (
                    <Typography
                      key={index}
                      variant="h4"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pb: 2
                      }}
                      letterSpacing={2}
                      color="warning"
                    >
                      {lotto.value}
                    </Typography>
                  ))}
                  <Typography
                    fontWeight={300}
                    sx={{
                      fontFamily: "Prompt",
                      color: "#454C60",

                      fontSize: "14px",
                      textAlign: "center"
                    }}
                  >
                    2 รางวัลๆ ละ 4,000 บาท (รับสุทธิหลังถูกหักภาษี 3,980 บาท)
                  </Typography>
                </Box>
              ))}
            </Grid2>
            <Grid2
              size={4}
              sx={{
                justifyItems: "center"
              }}
            >
              {lottoryL3B?.map((lotto: any, index: number) => (
                <Box
                  sx={{
                    boxShadow: 3,
                    width: "90%",
                    height: "300px",
                    alignContent: "center",
                    justifyItems: "center",
                    borderRadius: "10px",
                    px: 2
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                      fontFamily: "Prompt",
                      color: "#454C60",
                      pb: 2
                    }}
                  >
                    เลขหน้า 3 ตัว
                  </Typography>
                  {lotto?.number.map((lotto: any, index: number) => (
                    <Typography
                      key={index}
                      variant="h4"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pb: 2
                      }}
                      letterSpacing={2}
                      color="warning"
                    >
                      {lotto.value}
                    </Typography>
                  ))}
                  <Typography
                    fontWeight={300}
                    sx={{
                      fontFamily: "Prompt",
                      color: "#454C60",

                      fontSize: "14px",
                      textAlign: "center"
                    }}
                  >
                    2 รางวัลๆ ละ 4,000 บาท (รับสุทธิหลังถูกหักภาษี 3,980 บาท)
                  </Typography>
                </Box>
              ))}
            </Grid2>
            <Grid2
              size={4}
              sx={{
                justifyItems: "center"
              }}
            >
              {lottoryL2?.map((lotto: any, index: number) => (
                <Box
                  sx={{
                    boxShadow: 3,
                    width: "90%",
                    height: "300px",
                    alignContent: "center",
                    justifyItems: "center",
                    borderRadius: "10px",
                    px: 2
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                      fontFamily: "Prompt",
                      color: "#454C60",
                      pb: 2
                    }}
                  >
                    เลขท้าย 2 ตัว
                  </Typography>
                  {lotto?.number.map((lotto: any, index: number) => (
                    <Typography
                      key={index}
                      variant="h4"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pb: 2
                      }}
                      letterSpacing={2}
                      color="warning"
                    >
                      {lotto.value}
                    </Typography>
                  ))}
                  <Typography
                    fontWeight={300}
                    sx={{
                      fontFamily: "Prompt",
                      color: "#454C60",

                      fontSize: "14px",
                      textAlign: "center"
                    }}
                  >
                    1 รางวัลๆ ละ 2,000 บาท (รับสุทธิหลังถูกหักภาษี 1,990 บาท)
                  </Typography>
                </Box>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          {lottoryNear1?.map((lotto: any, index: number) => (
            <Box
              key={index}
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
                variant="h4"
                fontWeight={600}
                sx={{
                  fontFamily: "Prompt",
                  color: "#454C60",
                  pb: 2
                }}
              >
                รางวัลข้างเคียงรางวัลที่ 1
              </Typography>
              <Grid2 container sx={{
                justifyContent:"center"
              }}>
                {lotto?.number.map((lotto: any, index: number) => (
                  <Grid2 size={6} sx={{ pl :6}}>
                    <Typography
                      key={index}
                      variant="h4"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pb: 2
                      }}
                      letterSpacing={2}
                      color="warning"
                    >
                      {lotto.value}
                    </Typography>
                  </Grid2>
                ))}
              </Grid2>
              <Typography
                fontWeight={300}
                sx={{
                  fontFamily: "Prompt",
                  color: "#454C60",
                  px: 2
                }}
              >
               2 รางวัลๆ ละ 100,000 บาท (รับสุทธิหลังถูกหักภาษี 99,500 บาท)
              </Typography>
            </Box>
          ))}
        </Grid2>
      </Grid2>
    </>
  )
}
export default FormLotto
