import { useParams } from "react-router-dom"

function HomeDinamic() {
    const params = useParams();

    console.log(params.id);

    return (
            <div>
               HomeDinamic
            </div>
    )
}

export default HomeDinamic