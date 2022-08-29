import { Form } from "./component/Form";
import List from "./component/List";

import style from './App.module.scss'

const App = () => {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
