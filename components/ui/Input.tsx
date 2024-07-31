import cn from "@/utils/cn";

type CustomProps = {
  label?: string;
};

type InputProps = CustomProps & React.InputHTMLAttributes<HTMLInputElement>;
type TextAreaProps = CustomProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex items-center  w-full justify-center">
      <div className="relative w-full">
        <input
          {...props}
          className={cn("peer border-b border-gray-300 bg-inherit py-1 transition-colors focus:border-blue-700 focus:outline-none", props.className)}
          placeholder=" "
        />
        <label
          htmlFor={props.id}
          className="absolute -top-4 left-0 cursor-text text-xs transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export const TextArea = ({ label, ...props }: TextAreaProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative w-full">
        <label
          htmlFor={props.id}
          className="left-0 cursor-text transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-blue-700"
        >
          {label}
        </label>
        <textarea
          {...props}
          className={cn("peer w-full max-w-full block resize-x border-b border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-blue-700 focus:outline-none", props.className)}
          placeholder=" "
        />
      </div>
    </div>
  );
};
