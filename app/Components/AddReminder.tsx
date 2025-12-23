"use client";
import { useState } from "react";
import { useData } from "@/app/Provider/DataProvider";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddReminderForm() {
  const { addReminder } = useData();
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     if (!name.trim()) {
      toast.error(" من فضلك ادخل الاسم");
      return;
    }
    
    if (!dateTime) {
      toast.error("من فضلك ادخل الوقت");
      return;
    }

    addReminder({
      id: uuid(),
      name,
      dateTime,
      createdAt: new Date().toISOString(),
    });
    toast.success("تم التنفيذ بنجاح");
    setName("");
    setDateTime("");
    };
  return <>
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow space-y-4"
>
      <label className="block">
        <span className="text-sm font-medium">التذكير</span>
        <input
          className="mt-1 w-full border rounded p-2 focus:ring focus:ring-green-400 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium">وقت التذكير</span>
        <input
          type="datetime-local"
          className="mt-1 w-full border rounded p-2 focus:ring focus:ring-green-400 outline-none"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        </label>
        <button
        type="submit"
        className="w-full bg-green-700 text-white py-2 rounded cursor-pointer hover:bg-green-800 transition"
        >
        إضافة تذكير
      </button>
    </form>
  </>
}