/**
 * 
 * 2. Create a component called ProfileCard.tsx with variables for your name, age, and favorite hobby (typed with TypeScript).
3. Display all three variables inside JSX using curly braces { }.
4. Add one JSX expression that performs a calculation (e.g. birth year based on current year
and age) and display the result.

 * 
 * 
 * 
 */

interface ProfileCardPropType {
  name: string;
  age: number;
  favHobby: string;
}

export default function ProfileCard({
  name,
  age,
  favHobby,
}: ProfileCardPropType) {
  return (
    <div>
      <h2>Profile Card</h2>
      <p>
        My name is {name}, age is {age} and Fav hobby is {favHobby}
      </p>
      <p>
        Birth year: {new Date().getFullYear() - age} and age is
        {new Date().getFullYear() - new Date().getFullYear() - age}
      </p>
    </div>
  );
}
