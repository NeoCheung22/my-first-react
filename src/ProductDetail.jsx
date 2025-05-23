import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {

  let params = useParams()

  return (
    <div>
      #{params.id} 產品資料

      <Link to="/">回到產品列表</Link>
    </div>
  )
}