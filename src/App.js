import DynamicForm from "./Component/DynamicForm";
import Introduction from "./Component/Introduction";
import NavbarMenu from "./Component/NavbarMenu";
import Services from "./Component/Services";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
    </div>
  );
}

export default App;
