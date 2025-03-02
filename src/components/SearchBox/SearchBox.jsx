import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleOnUpdate = (evt) => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchId}
        onChange={handleOnUpdate}
      />
    </div>
  );
}

export default SearchBox;
