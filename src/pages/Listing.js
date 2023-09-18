import { useParams } from "react-router-dom";

export default function Listing() {
    const { id } = useParams();

    return (
        <div>
            <h1>Listing {id}</h1>
        </div>
    )
}
