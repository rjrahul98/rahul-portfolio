export default function Footer() {
  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} Rahul. Built with Next.js, Tailwind & a lot
        of Coffee ☕️
      </p>
    </footer>
  );
}
