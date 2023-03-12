import { useField } from "formik";

export const CheckboxInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className="mb-8 relative">
      <label htmlFor={props.name} className="flex items-center gap-1 text-gray-500">
        <input id={props.name} {...field} {...props} className="w-4 h-4 " />
        {props.label}
      </label>
      {meta.error && <p className="absolute top-[1.5rem] text-sm text-red-500">{meta.error}</p>}
    </div>
  );
};
