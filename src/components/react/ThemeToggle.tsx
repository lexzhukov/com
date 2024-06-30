import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return 'light';
    }
    return document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  });

  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={handleToggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-white"
    >
      {theme === 'light' ? (
        <Icon icon="heroicons:sun" className="size-6" />
      ) : (
        <Icon icon="heroicons:moon" className="size-6" />
      )}
    </button>
  );
}
