import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return alert !== null ? <div>{alert.msg}</div> : null;
}

export default Alert;
