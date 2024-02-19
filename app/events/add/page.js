import { getJWT } from "@/app/action"
import AddEvents from "@/app/ui/AddEvents";

const page = () => {
  const jwt = getJWT();
  return (
    <AddEvents token={jwt.value ? jwt.value : null} />
  )
}

export default page