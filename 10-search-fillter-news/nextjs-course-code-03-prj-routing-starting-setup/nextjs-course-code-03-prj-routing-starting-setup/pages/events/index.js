import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data"
import { useRouter } from 'next/router';

function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath)

    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items ={events}/>
        </div>
    )
}

export default AllEventsPage