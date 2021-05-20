import Routes from "./routes";
import { BooksProvider } from "./contexts/books";

function App() {
  return (
    <BooksProvider>
      <Routes />
    </BooksProvider>
  );
}

export default App;
