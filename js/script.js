const sendRequest = async (method, query, id) => {
  const response = await fetch(
    "http://localhost:3000/reservations" + query + id,
    {
      method: method,
    }
  );
  const json = await response.json();
  return json;
};

///////////////////////////////////////////////////////////////////////////////
// All reservations.
let reservations = await sendRequest("GET", "", "");
console.table(reservations);

// A specific reservation.
const reservationId = "3";
console.log(`I am going to delete reservation ${reservationId}.`);

// Delete the specific reservation
await sendRequest("DELETE", "?id=", reservationId);

// Check if it was deleted.
reservations = await sendRequest("GET", "", "");
// This should show one reservation less.
console.table(reservations);
