"use client";

import {
  createContext,useContext,useEffect,useState,ReactNode,
} from "react";
import { Reminder } from "@/Type/Reminder";

type DataContextType = {
  reminders: Reminder[];
  addReminder: (r: Reminder) => void;
  updateReminder: (r: Reminder) => void;
  deleteReminder: (id: string) => void;
};

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  
  useEffect(() => {
    const stored = localStorage.getItem("reminders");
    if (stored) {
      setReminders(JSON.parse(stored));
    }
  }, []);

 
  useEffect(() => {
    if (reminders.length > 0) {
      localStorage.setItem("reminders", JSON.stringify(reminders));
    } else {
      localStorage.removeItem("reminders");
    }
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
    <DataContext.Provider
      value={{ reminders, addReminder, updateReminder, deleteReminder }}
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
