// ***3. Create a component UserGreeting.tsx that accepts an optional username prop and uses || to display 'Guest' when no username is provided.

interface UserNameProp {
  userName?: string;
}

export default function UserGreeting({ userName }: UserNameProp) {
  return (
    <div>
      <h2>Welcome</h2>
      <p>{userName || "Guest"}</p>
    </div>
  );
}
