"use client";
import { Reminder } from "@/Type/Reminder";
import { useData } from "@/app/Provider/DataProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ReminderCard({ reminder }: { reminder: Reminder }) {
  const { deleteReminder } = useData();

  const handleDelete = () => {
    deleteReminder(reminder.id);
    toast.success("تم حذف التذكير بنجاح");
  };
  return <>
    <article className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
      <div>
        <h2 className="font-bold">{reminder.name}</h2>
        <time className="text-sm text-gray-500">
          {new Date(reminder.dateTime).toLocaleString("ar")}
        </time>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 cursor-pointer"
        aria-label="حذف التذكير"
      >
        حذف
      </button>
    </article>
  </>
}