import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between text-white">
      <h1 className="font-bold text-lg">Event Manager</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/create">Create Event</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}