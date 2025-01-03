import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { SearchIcon } from "../../icons";

interface IFormTextField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.JSX.Element;
  color?: string;
  content: string;
}

export default function FormTextField(props: IFormTextField) {
  const [isFocus, setIsFocus] = useState(false);

  const handlerBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (event.target.value) return;
    setIsFocus(false);
  };

  const styles = {
    focus: isFocus ? `-translate-y-8` : "",
    border: isFocus ? "" : "",
  };

  return (
    <>
      <label
        className={`pointer-events-none transition-transform duration-500 absolute left-0 inset-0 w-24 ${styles.focus} flex gap-1 items-center pl-3`}
        style={{ color: isFocus ? props.color || "#eee" : "#eee" }}
      >
        <SearchIcon
          width={20}
          height={20}
          stroke={isFocus ? props.color : "#eee"}
        />
        <span>{props.content}</span>
      </label>
      <input
        type={props.type}
        name={props.name}
        onFocus={() => props.onFocus ?? setIsFocus(true)}
        onBlur={(event) => props.onBlur ?? handlerBlur(event)}
        onChange={props.onChange}
        className="w-3/4 md:w-auto py-2 rounded-md px-3 dark:bg-dm-secondary dark:focus:bg-[#818df82c] outline-none"
        style={{
          border: isFocus ? "#818df825 0.5px solid" : "none",
        }}
      />
    </>
  );
}
