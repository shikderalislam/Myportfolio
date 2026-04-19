import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setEnabled(mediaQuery.matches);

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);

    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursor-trail');

    const handleMouseMove = (event: MouseEvent) => {
      if (!mediaQuery.matches) {
        return;
      }

      setVisible(true);

      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }

      if (trail) {
        trail.style.left = `${event.clientX}px`;
        trail.style.top = `${event.clientY}px`;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div id="cursor" className={visible ? 'is-visible' : ''} />
      <div id="cursor-trail" className={visible ? 'is-visible' : ''} />
    </>
  );
};
