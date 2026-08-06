import { MoonStar, SunMedium } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  const isLight = theme === 'light';

  return (
    <button
      type='button'
      onClick={onToggle}
      className='theme-toggle'
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      aria-pressed={isLight}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <span className={`theme-toggle__thumb ${isLight ? 'theme-toggle__thumb--light' : ''}`}>
        {isLight ? <SunMedium size={17} strokeWidth={2.4} aria-hidden='true' /> : <MoonStar size={17} strokeWidth={2.4} aria-hidden='true' />}
      </span>
    </button>
  );
};

export default ThemeToggle;
