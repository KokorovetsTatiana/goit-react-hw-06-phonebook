import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/contacts/contacts-actions";
import { getFilterValue } from "../../redux/contacts/contacts-selectors";

import s from "../Form/Form.module.css";

export default function FilterField() {
  const value = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const handleFilter = (e) => {
    return dispatch(updateFilter(e.target.value.toLowerCase()));
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleFilter}
        className={s.Input}
      />
    </div>
  );
}
