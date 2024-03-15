type InputProps = React.ComponentProps<"input"> & {
    label: string;
    id: string;
  };

export default function Input({name, id, value, label, onChange}: InputProps){
    return (
        <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" name={name} id={id} value={value} onChange={onChange}/>
        </div>
    )
}