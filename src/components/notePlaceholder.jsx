function NotePlaceholder() {
  return (
    <div className="grid grid-cols-2 gap-4  w-full animate-pulse border border-blue-300 shadow rounded-lg p-4">
      <div className="h-6 bg-slate-100 dark:bg-slate-700 rounded-lg col-span-2 sm:col-span-1 pl-2">
        Название...
      </div>
      <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg col-span-2 pl-2">
        Описание...
      </div>
    </div>
  );
}

export default NotePlaceholder;
