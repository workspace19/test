// src/pages/CreateEvent.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const createEvent = async () => {
    try {
      await addDoc(collection(db, "events"), {
        title,
        date,
        createdAt: new Date()
      });
      alert("Event created!");
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <input type="text" placeholder="Event Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={createEvent}>Create</button>
    </div>
  );
}

export default CreateEvent;
