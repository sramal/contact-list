import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
    selectedContactId,
    setSelectedContactId,
}) {
    const [contact, setContact] = useState({});
    useEffect(() => {
        async function fetchSelectedContact(id) {
            const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`
            );
            const result = await response.json();
            setContact(result);
        }

        fetchSelectedContact(selectedContactId);
    }, [selectedContactId]);

    return (
        <>
            <div>
                <p>Name: {contact.name}</p>
                <p>Username: {contact.username}</p>
                <p>Email: {contact.email}</p>
                <p>website: {contact.website}</p>
            </div>
            <form
                action={() => {
                    setSelectedContactId(null);
                }}
            >
                <input type="submit" value="Go to List View" />
            </form>
        </>
    );
}
