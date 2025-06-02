import {useRouter} from 'next/router'

export default function PortfolioIdPage() {
    const router = useRouter()

    console.log(router.pathname);
    console.log(router.query); // Object { id: "SOMETHING" }

    return (
        <div>
            <h1>The Portfolio ID Page</h1>
        </div>
    )
}