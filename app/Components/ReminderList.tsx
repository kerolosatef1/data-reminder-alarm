"use client";

import { useData } from "@/app/Provider/DataProvider";
import ReminderCard from "./ReminderCard";

export default function ReminderList() {
  const { reminders } = useData();

  if (!reminders.length) {
    return (
      <p className="text-center text-gray-700 mt-6">
        لا يوجد تذكيرات حاليًا
      </p>
    );
  }

  return (
    <section className="space-y-4 mt-6">
      {reminders.map((reminder) => (
        <ReminderCard key={reminder.id} reminder={reminder} />
      ))}
    </section>
  );
}
