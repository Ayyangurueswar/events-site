import EditEvents from "@/app/ui/EditEvents"
import { getJWT } from "@/app/action"

const page = ({params}) => {
  const jwt = getJWT();
  const id = params.id;
  return (
    <EditEvents id={id} jwt={jwt.value ? jwt.value : null}/>
  )
}

export default page