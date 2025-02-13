import { Box, CircularProgress, Grid2, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

interface LOTTO {
  price: string
  number: {
    round: number
    value: string
  }[]
}

const LOTTO_INIT = {
  price: "",
  number: [
    {
      round: 0,
      value: ""
    }
  ]
}

const baseUrl = process.env.NEXT_PUBLIC_URL

const FormLotto = () => {
  const [dataset, setData] = useState<boolean>(false)
  const [lottory1, setLottory1] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryNear1, setLottoryNear1] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory2, setLottory2] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory3, setLottory3] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory4, setLottory4] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottory5, setLottory5] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryL2, setLottoryL2] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryL3F, setLottoryL3F] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryL3B, setLottoryL3B] = useState<LOTTO[]>([{ ...LOTTO_INIT }])
  const [lottoryStraight3, setLottoryStraight3] = useState<LOTTO[]>([
    { ...LOTTO_INIT }
  ])
  const [lottoryStraight2, setLottoryStraight2] = useState<LOTTO[]>([
    { ...LOTTO_INIT }
  ])
  const [lottoryShuffle3, setLottoryShuffle3] = useState<LOTTO[]>([
    { ...LOTTO_INIT }
  ])
  const [lottorySecial, setLottorySpecial] = useState<LOTTO[]>([
    { ...LOTTO_INIT }
  ])

  async function getLatestLottery() {
    try {
      const response = await axios.post(baseUrl || "")
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
    setLottory1((prev: LOTTO[]) => {
      const lotto = [data.data.first]
      prev = [...lotto]
      return prev
    })
    setLottoryNear1((prev: LOTTO[]) => {
      const lotto = [data.data.near1]
      prev = [...lotto]
      return prev
    })
    setLottory2((prev: LOTTO[]) => {
      const lotto = [data.data.second]
      prev = [...lotto]
      return prev
    })
    setLottory3((prev: LOTTO[]) => {
      const lotto = [data.data.third]
      prev = [...lotto]
      return prev
    })
    setLottory4((prev: LOTTO[]) => {
      const lotto = [data.data.fourth]
      prev = [...lotto]
      return prev
    })
    setLottory5((prev: LOTTO[]) => {
      const lotto = [data.data.fifth]
      prev = [...lotto]
      return prev
    })
    setLottoryL2((prev: LOTTO[]) => {
      const lotto = [data.data.last2]
      prev = [...lotto]
      return prev
    })
    setLottoryL3F((prev: LOTTO[]) => {
      const lotto = [data.data.last3f]
      prev = [...lotto]
      return prev
    })
    setLottoryL3B((prev: LOTTO[]) => {
      const lotto = [data.data.last3b]
      prev = [...lotto]
      return prev
    })
    setLottoryStraight3((prev: LOTTO[]) => {
      const lotto = [data.n3.straight3]
      prev = [...lotto]
      return prev
    })
    setLottoryStraight2((prev: LOTTO[]) => {
      const lotto = [data.n3.straight2]
      prev = [...lotto]
      return prev
    })
    setLottoryShuffle3((prev: LOTTO[]) => {
      const lotto = [data.n3.shuffle3]
      prev = [...lotto]
      return prev
    })
    setLottorySpecial((prev: LOTTO[]) => {
      const lotto = [data.n3.special]
      prev = [...lotto]
      return prev
    })

    setData(true)
  }

  if (isLoading) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <CircularProgress
            color="warning"
            disableShrink
            sx={{
              width: "500px"
            }}
          />
        </Box>
      </>
    )
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
          {lottory1?.map((lotto, index: number) => (
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
              {lottoryL3F?.map((lotto, index: number) => (
                <Box
                  key={index}
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
                  {lotto?.number.map((lotto, index: number) => (
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
              {lottoryL3B?.map((lotto, index: number) => (
                <Box
                  key={index}
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
                  {lotto?.number.map((lotto, index: number) => (
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
              {lottoryL2?.map((lotto, index: number) => (
                <Box
                  key={index}
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
                  {lotto?.number.map((lotto, index: number) => (
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
        {/* N3 */}
        <Grid2 size={12} sx={{}}>
          <Grid2 container>
            <Grid2
              size={3}
              sx={{
                justifyItems: "center"
              }}
            >
              {lottoryStraight3?.map((lotto, index: number) => (
                <Box
                  key={index}
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
                    รางวัลสามตรง
                  </Typography>
                  {lotto?.number.map((lotto, index: number) => (
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
                    รางวัลละ 10,053 บาท
                  </Typography>
                </Box>
              ))}
            </Grid2>
            <Grid2
              size={3}
              sx={{
                justifyItems: "center"
              }}
            >
              {lottoryShuffle3?.map((lotto, index: number) => (
                <Box
                  key={index}
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
                    รางวัลสามสลับหลัก
                  </Typography>
                  {lotto?.number.map((lotto, index: number) => (
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
                    รางวัลละ 3,358 บาท
                  </Typography>
                </Box>
              ))}
            </Grid2>
            <Grid2
              size={3}
              sx={{
                justifyItems: "center"
              }}
            >
              {lottoryStraight2?.map((lotto, index: number) => (
                <Box
                  key={index}
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
                    รางวัลสองตรง
                  </Typography>
                  {lotto?.number.map((lotto, index: number) => (
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
                    รางวัลละ 666 บาท
                  </Typography>
                </Box>
              ))}
            </Grid2>
            <Grid2
              size={3}
              sx={{
                justifyItems: "center"
              }}
            >
              {lottorySecial?.map((lotto, index: number) => (
                <Box
                  key={index}
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
                    รางวัลพิเศษ
                  </Typography>
                  {lotto?.number.map((lotto, index: number) => (
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
                    รางวัลละ 105,974 บาท
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
          {lottoryNear1?.map((lotto, index: number) => (
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
              <Grid2
                container
                sx={{
                  justifyContent: "center"
                }}
              >
                {lotto?.number.map((lotto, index: number) => (
                  <Grid2 size={6} sx={{ pl: 6 }}>
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
        <Grid2
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          {lottory2?.map((lotto, index: number) => (
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
                  pb: 4
                }}
              >
                รางวัลที่ 2
              </Typography>
              <Grid2
                container
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  gap: 2
                }}
              >
                {lotto?.number.map((lotto, index: number) => (
                  <Grid2
                    size={2}
                    sx={{
                      justifyItems: "center"
                    }}
                  >
                    <Typography
                      key={index}
                      variant="h4"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pb: 4
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
                5 รางวัลๆ ละ 200,000 บาท (รับสุทธิหลังถูกหักภาษี 199,000 บาท)
              </Typography>
            </Box>
          ))}
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          {lottory3?.map((lotto, index: number) => (
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
                  pb: 4
                }}
              >
                รางวัลที่ 3
              </Typography>
              <Grid2
                container
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  gap: 2
                }}
              >
                {lotto?.number.map((lotto, index: number) => (
                  <Grid2
                    size={2}
                    sx={{
                      justifyItems: "center"
                    }}
                  >
                    <Typography
                      key={index}
                      variant="h5"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pb: 4
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
                10 รางวัล รางวัลละ 80,000 บาท (รับสุทธิหลังถูกหักภาษี 79,600
                บาท)
              </Typography>
            </Box>
          ))}
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          {lottory4?.map((lotto, index: number) => (
            <Box
              key={index}
              sx={{
                boxShadow: 3,
                width: "100%",
                height: "1100px",
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
                  pb: 4
                }}
              >
                รางวัลที่ 4
              </Typography>
              <Grid2
                container
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  gap: 2
                }}
              >
                {lotto?.number.map((lotto, index: number) => (
                  <Grid2
                    size={2}
                    sx={{
                      justifyItems: "center"
                    }}
                  >
                    <Typography
                      key={index}
                      variant="h5"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pt: 4
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
                  px: 2,
                  pt: 8
                }}
              >
                10 รางวัล รางวัลละ 80,000 บาท (รับสุทธิหลังถูกหักภาษี 79,600
                บาท)
              </Typography>
            </Box>
          ))}
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          {lottory5?.map((lotto, index: number) => (
            <Box
              key={index}
              sx={{
                boxShadow: 3,
                width: "100%",
                height: "1900px",
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
                  pb: 4
                }}
              >
                รางวัลที่ 5
              </Typography>
              <Grid2
                container
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  gap: 2
                }}
              >
                {lotto?.number.map((lotto, index: number) => (
                  <Grid2
                    size={2}
                    sx={{
                      justifyItems: "center"
                    }}
                  >
                    <Typography
                      key={index}
                      variant="h5"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Prompt",
                        pt: 4
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
                  px: 2,
                  pt: 8
                }}
              >
                100 รางวัล รางวัลละ 20,000 บาท (รับสุทธิหลังถูกหักภาษี 19,900
                บาท)
              </Typography>
            </Box>
          ))}
        </Grid2>
      </Grid2>
    </>
  )
}
export default FormLotto
