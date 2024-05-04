import { X } from "lucide-react";
import { useRef, useState } from "react";

export function Input({ ...props }) {
  return (
    <input
      {...props}
      className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
    />
  );
}

export function InputError({ message, className = "", ...props }) {
  return message ? (
    <p {...props} className={"text-sm text-red-600 " + className}>
      {message}
    </p>
  ) : null;
}

export default function ImageInput({ value, data, setData }) {
  const [base64, setBase64] = useState(value ?? "");

  const inputRef = useRef(null);

  const handleImageInputChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setBase64(e.target.result);
          setData("img", e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="py-2">
      {base64 !== "" && (
        <div className="relative w-fit">
          <img className="w-fit h-20" src={base64} alt="gambar" />
          <button
            onClick={() => {
              setBase64("");
              setData("img", "");
              inputRef.current.value = "";
            }}
            className="absolute p-[2px] rounded-full bg-red-600 text-white -top-1 -right-1"
          >
            <X size={12} />
          </button>
        </div>
      )}
      <input type="hidden" value={data} name="img" id="img" />
      <label htmlFor="gambar" className="text-xs font-medium">
        Gambar :
      </label>
      <input
        ref={inputRef}
        name="gambar"
        type="file"
        accept="image/*"
        onChange={(e) => handleImageInputChange(e)}
        className="w-full"
      />
    </div>
  );
}
