import { useRouter } from "next/router"


export default function ClientProjectPage() {
    const router = useRouter();

    function loadProjectHandler() {
        // load data...
        router.push('/clients/max/project/A')
    }

    return (
        <div>
            <h1> The projects of a Given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}