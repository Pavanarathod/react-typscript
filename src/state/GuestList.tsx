import { useState } from "react";

const GuestList: React.FC = () => {
  const [guestList, setGuestList] = useState<String[]>([]);
  const [name, setName] = useState("");

  const addGuest = () => {
    setGuestList({ ...guestList });

    setName("");
  };

  return (
    <div>
      <h1>Guest List</h1>
      {guestList.length > 0 && (
        <>
          {guestList.map((guest, index) => (
            <h2 key={index}>{guest}</h2>
          ))}
        </>
      )}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addGuest}>Add Guest</button>
    </div>
  );
};

export default GuestList;
