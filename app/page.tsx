import { DataProvider } from "@/app/Provider/DataProvider";
import { initialReminders } from "@/Data/InitialReminder"
import AddReminderForm from "@/app/Components/AddReminder";
import ReminderList from "@/app/Components/ReminderList";
import ToastProvider from "./Toast/Toast";
import CurrentTimeAlarm from "./Components/Alarm";
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <DataProvider initialData={initialReminders}>
      <main className="max-w-2xl mx-auto py-8 px-4 space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Data Reminder 
        </h1>
        <CurrentTimeAlarm />
        

        <AddReminderForm />
        <ReminderList />
         <ToastProvider/>
      </main>
    </DataProvider>
  );
}