import logo from "./logo.svg";
import "./App.css";
import { ModalLogin } from "./modal/modalLogin";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <div>
        <ModalLogin />
        <Input />
      </div>

      <Button />
    </div>
  );
}

export default App;
