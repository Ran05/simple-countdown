// Target time in Asia/Manila (UTC+8)
const target = new Date('2026-01-10T03:00:00+08:00').getTime();

const el = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  done: document.getElementById('done'),
};

function tick() {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    el.days.textContent = '0';
    el.hours.textContent = '0';
    el.minutes.textContent = '0';
    el.seconds.textContent = '0';
    el.done.style.display = 'block';
    clearInterval(timer);
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  el.days.textContent = days;
  el.hours.textContent = String(hours).padStart(2, '0');
  el.minutes.textContent = String(minutes).padStart(2, '0');
  el.seconds.textContent = String(secs).padStart(2, '0');
}

tick();
const timer = setInterval(tick, 1000);
