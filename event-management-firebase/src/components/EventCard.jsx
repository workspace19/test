import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold text-lg">{event.title}</h3>
      <p className="text-gray-600">{event.date}</p>
      <Link to={`/events/${event.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
}