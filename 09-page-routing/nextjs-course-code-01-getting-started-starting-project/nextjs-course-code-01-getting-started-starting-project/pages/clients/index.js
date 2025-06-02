import Link from 'next/link';

export default function ClientsPage() {
    const clients = [
        {id: 'max', project: 'Build a ship'},
        {id: 'manu', project: 'Create a desk'},

    ]
    return(
        <div>
            <h1> The Clients PAGE</h1>
            <ul>
               {clients.map((client) => (
                <li key={client.id}>
                    <Link href={{
                        pathname: '/clients/[id]',
                        query: {id: client.id}
                    }}>{client.project}</Link>
                </li>
               ))}
            </ul>
           
        </div>
    )
}