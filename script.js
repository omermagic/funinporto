const WHATSAPP_PHONE = '351937106777';
let bookingLastFocus = null;

function openWhatsApp() {
  openBookingModal();
}

function getTodayInputValue() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function formatBookingDate(value) {
  if (!value) return '';

  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function ensureBookingModal() {
  if (document.querySelector('[data-booking-modal]')) return;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="booking-modal" data-booking-modal hidden>
      <div class="booking-modal-backdrop" data-booking-close></div>
      <section class="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button class="booking-close" type="button" data-booking-close aria-label="Close booking form">×</button>

        <div class="booking-dialog-copy">
          <span class="guide-tag">Quick booking</span>
          <h2 id="booking-title">Reserve your Porto walk</h2>
          <p>Pick a date and guest count. WhatsApp opens with the message ready.</p>
        </div>

        <form class="booking-form" data-booking-form>
          <div class="form-row">
            <label>
              <span>Your name</span>
              <input type="text" name="name" autocomplete="name" required />
            </label>

            <label>
              <span>Tour date</span>
              <input type="date" name="date" required />
            </label>
          </div>

          <label>
            <span>Number of guests</span>
            <input type="number" name="guests" min="1" max="30" value="2" required />
          </label>

          <button class="btn sun booking-submit" type="submit">Continue to WhatsApp</button>
        </form>
      </section>
    </div>
  `);

  const modal = document.querySelector('[data-booking-modal]');
  const form = modal.querySelector('[data-booking-form]');
  const dateInput = form.elements.date;

  dateInput.min = getTodayInputValue();
  dateInput.value = dateInput.min;

  modal.querySelectorAll('[data-booking-close]').forEach((button) => {
    button.addEventListener('click', closeBookingModal);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const date = formatBookingDate(String(formData.get('date') || ''));
    const guests = String(formData.get('guests') || '').trim();

    const message = [
      'Hi! I want to join the free walking tour in Porto.',
      `Name: ${name}`,
      `Date: ${date}`,
      `Number of guests: ${guests}`,
      'Can you confirm availability and the meeting point?',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
    closeBookingModal();
  });
}

function openBookingModal() {
  ensureBookingModal();

  const modal = document.querySelector('[data-booking-modal]');
  bookingLastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('input[name="name"]').focus();
}

function closeBookingModal() {
  const modal = document.querySelector('[data-booking-modal]');
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove('modal-open');

  if (bookingLastFocus && typeof bookingLastFocus.focus === 'function') {
    bookingLastFocus.focus();
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBookingModal();
  }
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
