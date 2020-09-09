import { DebounceInput } from "react-debounce-input";

export default function Search({ onChangeFunc, placeholderText }) {
  return (
    <div className="search-container">
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        placeholder={placeholderText}
        onChange={onChangeFunc}
      />
    </div>
  );
}
