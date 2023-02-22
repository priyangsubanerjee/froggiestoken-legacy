import { graphBase, gql } from "@/helper/graph";

export default async function handler(req, res) {
  const query = gql`
    query MyQuery {
      circulatingSupply(where: { id: "clefpnjyd6mr80bpj2jm94kh3" }) {
        value
      }
    }
  `;
  const { circulatingSupply } = await graphBase.request(query);
  if (circulatingSupply.value) {
    res.json({ circulatingSupply: circulatingSupply.value });
  } else {
    res.json({ circulatingSupply: 0 });
  }
}
