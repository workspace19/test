import EventCard from "../components/EventCard";

export default function Events() {
  const dummyEvents = [
    { id: 1, title: "Hackathon", date: "2025-09-01" },
    { id: 2, title: "Music Fest", date: "2025-09-10" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Events</h2>
      <div className="grid gap-4">
        {dummyEvents.map(ev => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </div>
  );
}