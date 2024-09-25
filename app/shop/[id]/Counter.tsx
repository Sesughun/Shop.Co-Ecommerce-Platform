import React, { ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Counter = ({ onChange }: { onChange: (value: number) => void }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onChange(value);
  };
  return (
    <div className="flex space-3">
      <label className="p-1" htmlFor="qty">
        Qty:
      </label>
      <input
        type="number"
        max={50}
        min={1}
        className="w-11 p-1 bg-[gray] border-slate-300"
        id="qty"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Counter;
