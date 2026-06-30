const WHATSAPP_PHONE = '351933221858';
const WHATSAPP_DISPLAY = '+351 937 106 777';
const WEB3FORMS_ACCESS_KEY = '9f9a1675-060f-491a-bee9-6dbded9e081b';
const MOBILE_BOOKING_QUERY = '(max-width: 760px)';
const BOOKING_CONFIRMATION_COPY = "We'll confirm availability and send the meeting point by WhatsApp.";
const BOOKING_INTRO_COPY = `Choose your date and group size. ${BOOKING_CONFIRMATION_COPY}`;
let bookingLastFocus = null;
let reviewLastFocus = null;

function openWhatsApp() {
  openBookingModal();
}

function getWhatsAppUrl(message = '') {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`;

  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
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

function isMobileBookingFunnel() {
  return window.matchMedia(MOBILE_BOOKING_QUERY).matches;
}

function updateBookingFunnelMode(form) {
  const isMobile = isMobileBookingFunnel();
  const phoneField = form.querySelector('[data-booking-phone-field]');
  const phoneInput = form.elements.phone;
  const submitButton = form.querySelector('[data-booking-submit]');
  const intro = document.querySelector('[data-booking-intro]');
  const reassurance = document.querySelector('[data-modal-booking-reassurance]');

  form.dataset.bookingMode = isMobile ? 'whatsapp' : 'email';

  if (phoneField && phoneInput) {
    phoneField.hidden = isMobile;
    phoneInput.disabled = isMobile;
    phoneInput.required = !isMobile;
  }

  if (submitButton) {
    submitButton.textContent = 'Send request';
  }

  if (intro) {
    intro.textContent = BOOKING_INTRO_COPY;
  }

  if (reassurance) {
    reassurance.textContent = 'Free booking · Confirmation by WhatsApp';
  }
}

function ensureBookingModal() {
  if (document.querySelector('[data-booking-modal]')) return;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="booking-modal" data-booking-modal hidden>
      <div class="booking-modal-backdrop" data-booking-close></div>
      <section class="booking-dialog" role="dialog" aria-modal="true" aria-label="Check availability">
        <button class="booking-close" type="button" data-booking-close aria-label="Close booking form">×</button>

        <div class="booking-dialog-copy">
          <span class="guide-tag">Check availability</span>
          <p data-booking-intro>${BOOKING_INTRO_COPY}</p>
          <p class="booking-reassurance" data-modal-booking-reassurance>Free booking · Confirmation by WhatsApp</p>
        </div>

        <form
          class="booking-form"
          action="https://api.web3forms.com/submit"
          method="POST"
          data-booking-form
          data-success-message="Thanks — we got your request.&#10;&#10;We'll confirm availability and send the meeting point by WhatsApp.&#10;&#10;No payment today. The tour is free to join, and you can tip at the end based on your experience."
          data-error-message="Something went wrong. Please send us a WhatsApp message instead."
          data-sending-message="Sending your request..."
        >
          <input type="hidden" name="access_key" value="${WEB3FORMS_ACCESS_KEY}" />
          <input type="hidden" name="subject" value="New Fun in Porto availability request" />
          <input type="hidden" name="from_name" value="Fun in Porto website" />
          <input type="hidden" name="tour" value="Porto walking tour" />
          <input type="hidden" name="message" value="" />
          <input type="checkbox" name="botcheck" class="bot-field" tabindex="-1" autocomplete="off" />

          <div class="form-row">
            <label>
              <span>Your name</span>
              <input type="text" name="name" autocomplete="name" required />
            </label>

            <label data-booking-phone-field>
              <span>WhatsApp number</span>
              <input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="+351 ..." required />
            </label>
          </div>

          <div class="form-row">
            <label>
              <span>Tour date</span>
              <input type="date" name="date" required />
            </label>

            <label>
              <span>Group size</span>
              <input type="number" name="guests" min="1" max="30" value="2" required />
            </label>
          </div>

          <p class="booking-contact-line">
            Prefer WhatsApp? <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener">${WHATSAPP_DISPLAY}</a>
          </p>

          <div class="form-actions booking-actions">
            <button class="btn sun booking-submit" type="submit" data-booking-submit>Send request</button>
            <p class="form-status" data-form-status role="status" aria-live="polite"></p>
          </div>
        </form>
      </section>
    </div>
  `);

  const modal = document.querySelector('[data-booking-modal]');
  const form = modal.querySelector('[data-booking-form]');
  const dateInput = form.elements.date;
  const bookingMediaQuery = window.matchMedia(MOBILE_BOOKING_QUERY);

  dateInput.min = getTodayInputValue();
  dateInput.value = dateInput.min;
  updateBookingFunnelMode(form);

  const handleBookingModeChange = () => updateBookingFunnelMode(form);

  if (typeof bookingMediaQuery.addEventListener === 'function') {
    bookingMediaQuery.addEventListener('change', handleBookingModeChange);
  } else if (typeof bookingMediaQuery.addListener === 'function') {
    bookingMediaQuery.addListener(handleBookingModeChange);
  }

  modal.querySelectorAll('[data-booking-close]').forEach((button) => {
    button.addEventListener('click', closeBookingModal);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const date = formatBookingDate(String(formData.get('date') || ''));
    const guests = String(formData.get('guests') || '').trim();
    const isMobile = form.dataset.bookingMode === 'whatsapp';

    const message = [
      isMobile
        ? 'Hi, I would like to join the Fun in Porto free walking tour.'
        : 'New availability request for Fun in Porto walking tour.',
      `Name: ${name}`,
      isMobile ? '' : `WhatsApp number: ${phone}`,
      `Date: ${date}`,
      `Group size: ${guests}`,
      'Please confirm availability and send the meeting point.',
    ].filter(Boolean).join('\n');

    if (isMobile) {
      const status = form.querySelector('[data-form-status]');

      if (status) {
        status.dataset.state = '';
        status.textContent = 'Opening WhatsApp...';
      }

      window.location.href = getWhatsAppUrl(message);
      return;
    }

    form.elements.message.value = message;
    submitWeb3Form(event, form, {
      onSuccess: () => {
        form.reset();
        dateInput.min = getTodayInputValue();
        dateInput.value = dateInput.min;
      },
    });
  });
}

function ensureReviewModal() {
  if (document.querySelector('[data-review-modal]')) return;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="booking-modal review-modal" data-review-modal hidden>
      <div class="booking-modal-backdrop" data-review-close></div>
      <section class="booking-dialog review-dialog" role="dialog" aria-modal="true" aria-labelledby="review-title">
        <button class="booking-close" type="button" data-review-close aria-label="Close review form">×</button>

        <div class="booking-dialog-copy">
          <span class="guide-tag">Guest review</span>
          <h2 id="review-title">Leave a review</h2>
          <p>Tell us how the walk felt. Your note arrives directly in our email.</p>
        </div>

        <form
          class="review-form"
          action="https://api.web3forms.com/submit"
          method="POST"
          data-review-form
          data-success-message="Thank you! Your review was sent."
          data-error-message="Something went wrong. Please try again or send us a WhatsApp message."
          data-sending-message="Sending your review..."
        >
          <input type="hidden" name="access_key" value="${WEB3FORMS_ACCESS_KEY}" />
          <input type="hidden" name="subject" value="New Fun in Porto review" />
          <input type="hidden" name="from_name" value="Fun in Porto website" />
          <input type="hidden" name="tour" value="Porto walking tour" />
          <input type="checkbox" name="botcheck" class="bot-field" tabindex="-1" autocomplete="off" />

          <div class="form-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" autocomplete="name" required />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" autocomplete="email" required />
            </label>
          </div>

          <label>
            <span>Rating</span>
            <select name="rating" required>
              <option value="5 stars">5 stars</option>
              <option value="4 stars">4 stars</option>
              <option value="3 stars">3 stars</option>
              <option value="2 stars">2 stars</option>
              <option value="1 star">1 star</option>
            </select>
          </label>

          <label>
            <span>Your review</span>
            <textarea name="message" rows="5" required></textarea>
          </label>

          <div class="form-actions">
            <button class="btn sun" type="submit">Send review</button>
            <p class="form-status" data-form-status role="status" aria-live="polite"></p>
          </div>
        </form>
      </section>
    </div>
  `);

  const modal = document.querySelector('[data-review-modal]');
  const form = modal.querySelector('[data-review-form]');

  modal.querySelectorAll('[data-review-close]').forEach((button) => {
    button.addEventListener('click', closeReviewModal);
  });

  form.addEventListener('submit', (event) => {
    submitWeb3Form(event, form, {
      onSuccess: () => form.reset(),
    });
  });
}

async function submitWeb3Form(event, form, options = {}) {
  event.preventDefault();

  const status = form.querySelector('[data-form-status]');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton ? submitButton.textContent : '';

  if (status) {
    status.dataset.state = '';
    status.textContent = form.dataset.sendingMessage || 'Sending...';
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
  }

  try {
    const response = await fetch(form.action, {
      method: form.method || 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      throw new Error(result.message || 'Form submission failed');
    }

    if (typeof options.onSuccess === 'function') {
      options.onSuccess();
    }

    if (status) {
      status.dataset.state = 'success';
      status.textContent = form.dataset.successMessage || 'Sent successfully.';
    }
  } catch (error) {
    if (status) {
      status.dataset.state = 'error';
      status.textContent = form.dataset.errorMessage || 'Something went wrong. Please try again.';
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  }
}

function openBookingModal() {
  ensureBookingModal();

  const modal = document.querySelector('[data-booking-modal]');
  const form = modal.querySelector('[data-booking-form]');
  bookingLastFocus = document.activeElement;
  updateBookingFunnelMode(form);
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

function openReviewModal() {
  ensureReviewModal();

  const modal = document.querySelector('[data-review-modal]');
  reviewLastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('input[name="name"]').focus();
}

function closeReviewModal() {
  const modal = document.querySelector('[data-review-modal]');
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove('modal-open');

  if (reviewLastFocus && typeof reviewLastFocus.focus === 'function') {
    reviewLastFocus.focus();
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBookingModal();
    closeReviewModal();
  }
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('[data-review-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    submitWeb3Form(event, form, {
      onSuccess: () => form.reset(),
    });
  });
});
