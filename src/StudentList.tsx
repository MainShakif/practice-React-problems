/**
 * 
 * 1. Create a TypeScript interface called Student with id (number), name (string), and grade (number).
2. Create an array of at least 5 Student objects.
3. Create a StudentList.tsx component that uses .map() to render each student's name and grade inside a <ul><li> list.
4. Make sure each rendered <li> has a unique key prop using the student's id (not the array
index).
5. Bonus: Use conditional rendering inside the map( to display 'Pass' if grade >= 40,
otherwise 'Fail'.
 
 */

interface Student {
  id: number;
  name: string;
  grade: number;
}

const students: Student[] = [
  { id: 101, name: "Rabia", grade: 3.25 },
  { id: 102, name: "Sani", grade: 2.25 },
  { id: 103, name: "Abul", grade: 3.1 },
  { id: 104, name: "Rebeka", grade: 3.75 },
  { id: 105, name: "Habiba", grade: 3.5 },
];

export default function StudentList() {
  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.grade}
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 ** সংক্ষেপে: map() যেহেতু প্রতিটি student-এর জন্য একটি করে <li> তৈরি করছে, তাই প্রতিটি <li>-কে আলাদা করে চেনানোর জন্য key={student.id} <li>-এর opening tag-এ দেওয়া হয়।
 */
