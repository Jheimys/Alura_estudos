type SelectorOptionsProps = {
  value: string;
  label: string;
} & React.OptionHTMLAttributes<HTMLOptionElement>;

const SelectorOptions = ({value, label, ...rest}: SelectorOptionsProps) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  )
}

export default SelectorOptions