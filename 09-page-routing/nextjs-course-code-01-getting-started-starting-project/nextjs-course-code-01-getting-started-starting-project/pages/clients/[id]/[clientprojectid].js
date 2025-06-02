import { useRouter } from "next/router"

export default function SelectedClientProjectPage() {
    const router = useRouter();
    const {id, clientprojectid} = router.query;

    return (
        <div>
            <h1> The project page for a specific project</h1>
            <p>ClientId: {id}</p>
            <p>ProjectId: {clientprojectid}</p>
            
        </div>
    )
}