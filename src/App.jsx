import Actor from "./Actor";
import "./App.css";
import BookStore from "./BookStore";
import Singer from "./Singer";

function App() {
  const books = [
    {
      id: 1,
      title: "The Lord of the Rings",
      author: "Math",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      author: "Bangla",
    },
    {
      id: 3,
      title: "The Lord of the Rings",
      author: "English",
    },
  ];
  const actors = ["Sakib", "Rubel", "Manna", "Riaz", "Bappa Raz"];
  const singers = [
    { id: 1, name: "Alamin", age: 30 },
    { id: 2, name: "Torikul", age: 60 },
    { id: 3, name: "Saiful", age: 40 },
    { id: 4, name: "Rakib", age: 10 },
  ];
  return (
    <>
      <h1>Vite + React World Tour</h1>
      <div>
        <h6>All Books</h6>
        <BookStore books={books}></BookStore>
      </div>
      <div>
        <h4>All Actors</h4>
        <Actor name={actors}></Actor>
      </div>
      <div>
        <h2>All Singers</h2>
        {singers.map((singer) => (
          <Singer key={singer.id} singer={singer} />
        ))}
      </div>
    </>
  );
}

export default App;
