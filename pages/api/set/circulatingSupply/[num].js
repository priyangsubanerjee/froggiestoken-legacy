import { graphBase, gql } from "@/helper/graph";
import * as cheerio from "cheerio";
import axios from "axios";

export default async function handler(req, res) {
  const num = req.query.num;
  if (!num) {
    res.json({ success: false });
    return;
  }
  const query = gql`
    mutation MyMutation {
      updateCirculatingSupply(
        data: { value: "${num}" }
        where: { id: "clefpnjyd6mr80bpj2jm94kh3" }
      ) {
        id
      }
    }
  `;
  const { updateCirculatingSupply } = await graphBase.request(query);
  if (updateCirculatingSupply.id) {
    res.json({ success: true, value: num });
  } else {
    res.json({ success: false });
  }
}
