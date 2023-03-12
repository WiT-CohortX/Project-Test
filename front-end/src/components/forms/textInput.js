import { useField } from "formik";

export const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className="mb-8 relative">
      <label htmlFor={props.name} className="block text-black text-lg font-bold mb-1">{props.label}</label>
      <input id={props.name} {...field} {...props} className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
      {meta.touched && meta.error && <p className="absolute top-[4.5rem] text-sm text-red-500">{meta.error}</p>}
    </div>
  );
};
