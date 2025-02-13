// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function fetchPosts() {
    try {
      const response = await axios.post(
        "https://www.glo.or.th/api/lottery/getLatestLottery"
      )
      res.status(200).json(response.data)
    } catch (error) {
      console.error("Error fetching posts:", error)
    }
  }
  fetchPosts()
}
