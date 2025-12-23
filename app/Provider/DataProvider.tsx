"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Reminder } from "@/Type/Reminder";

type DataContextType = {
  reminders: Reminder[];
  addReminder: (r: Reminder) => void;
  updateReminder: (r: Reminder) => void;
  deleteReminder: (id: string) => void;
};
const DataContext = createContext<DataContextType | null>(null);
export function DataProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData: Reminder[];
}) {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("reminders");
    if (stored) {
      setReminders(JSON.parse(stored));
    } else {
      setReminders(initialData);
    }
  }, [initialData]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = (r: Reminder) =>
    setReminders((prev) => [r, ...prev]);

  const updateReminder = (updated: Reminder) =>
    setReminders((prev) =>
      prev.map((r) => (r.id === updated.id ? updated : r))
    );

  const deleteReminder = (id: string) =>
    setReminders((prev) => prev.filter((r) => r.id !== id));

  return (
    <DataContext.Provider value={{ reminders, addReminder, updateReminder, deleteReminder }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used inside DataProvider");
  return ctx;
};
