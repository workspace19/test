import { useParams } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();

  // TODO: Fetch from Firebase by id
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Event Details</h2>
      <p className="mt-2 text-gray-600">Event ID: {id}</p>
    </div>
  );
}
