import { NextPage } from "next"
import { useRouter } from "next/router";

const Card: NextPage = () => {
    const router = useRouter();
    const {id} = router.query
    
    return <>Single Card</>
}

export default Card