// TODO: Replace with Firebase Firestore
export const createEvent = async (eventData) => {
  console.log("Saving Event:", eventData);
};

export const getAllEvents = async () => {
  return [
    { id: 1, title: "Hackathon", date: "2025-09-01" },
    { id: 2, title: "Music Fest", date: "2025-09-10" }
  ];
};