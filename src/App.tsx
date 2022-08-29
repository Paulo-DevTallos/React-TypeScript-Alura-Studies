import { Form } from "./component/Form";
import List from "./component/List";

import style from './App.module.scss'
import Chronometer from "./component/Chonometer";

const App = () => {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Chronometer />
    </div>
  );
}

export default App;
