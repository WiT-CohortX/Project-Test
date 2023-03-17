import { useField } from "formik";

export const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className="mb-8 relative">
      <label htmlFor={props.name} className="text-Primary block text-lg font-bold mb-1">{props.label}</label>
      <input id={props.name} {...field} {...props} className="block w-full px-4 py-2 bg-Gray050 border rounded text-sm shadow-sm placeholder-Gray300
      focus:valid:outline-Green focus:valid:bg-GreenA20 
      valid:outline-Green valid:bg-GreenA20
      invalid:outline-Secondary "/>

      {meta.touched && meta.error && <p className="absolute top-[4.5rem] text-sm text-red-500">{meta.error}</p>}
    </div>
  );
};
