import Counter from "./component/Counter";
import DarkModeToggle from "./component/DarkModeToggle";
import UserForm from "./component/UserForm";



export default function App() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <Counter />
      <UserForm />
      <DarkModeToggle />
    </div>
  );
}