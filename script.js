const WHATSAPP_PHONE = "351933221858";
const WEB3FORMS_ACCESS_KEY = "9f9a1675-060f-491a-bee9-6dbded9e081b";
const MOBILE_BOOKING_QUERY = "(max-width: 760px)";
const PORTUGAL_TIME_ZONE = "Europe/Lisbon";
const SAME_DAY_BOOKING_CUTOFF_HOUR = 19;
const STICKY_AVAILABILITY_SCROLL_THRESHOLD = 80;
const MIN_PHONE_DIGITS = 6;
const DATE_PICKER_NAVIGATION_KEYS = new Set([
  "Tab",
  "Escape",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
]);
const BOOKING_CONTEXTS = {
  english: {
    locale: "en-GB",
    tour: "English Porto walking tour",
    subject: "New Fun in Porto availability request",
    title: "Check availability",
    close: "Close booking form",
    intro:
      "Choose your date and group size. We'll confirm availability and send the meeting point by WhatsApp.",
    reassurance: "Free booking · Confirmation by WhatsApp",
    name: "Your name",
    phone: "WhatsApp number",
    date: "Tour date",
    selectDate: "Select a date",
    group: "Group size",
    submit: "Send request",
    success:
      "Thanks — we got your request.\n\nWe'll confirm availability and send the meeting point by WhatsApp.\n\nNo payment today. The tour is free to join, and you can tip at the end based on your experience.",
    error: "Something went wrong. Please send us a WhatsApp message instead.",
    sending: "Sending your request...",
    sendingButton: "Sending...",
    opening: "Opening WhatsApp...",
    phoneError: "Please enter a WhatsApp number with at least 6 digits.",
    messageIntro:
      "Hi, I would like to check availability for a Fun in Porto tour.",
    requestIntro: "New Fun in Porto availability request.",
    labels: {
      tour: "Tour type",
      name: "Name",
      phone: "WhatsApp number",
      date: "Date",
      group: "Group size",
    },
    confirm: "Please confirm availability and send the meeting point.",
  },
  hebrew: {
    locale: "he-IL",
    tour: "סיור רגלי בפורטו בעברית",
    subject: "בקשת זמינות חדשה — סיור בפורטו בעברית",
    title: "בדיקת זמינות",
    close: "סגירת טופס ההזמנה",
    intro: "בחרו תאריך וגודל קבוצה. נאשר זמינות ונשלח את נקודת המפגש בוואטסאפ.",
    reassurance: "הזמנה ללא תשלום · אישור בוואטסאפ",
    name: "שם",
    phone: "מספר וואטסאפ",
    date: "תאריך הסיור",
    selectDate: "בחירת תאריך",
    group: "מספר משתתפים",
    submit: "שליחת בקשה",
    success:
      "תודה — קיבלנו את הבקשה.\n\nנאשר זמינות ונשלח את נקודת המפגש בוואטסאפ.",
    error: "משהו השתבש. אפשר לשלוח לנו הודעה בוואטסאפ.",
    sending: "הבקשה נשלחת...",
    sendingButton: "שולחים...",
    opening: "פותחים את וואטסאפ...",
    phoneError: "יש להזין מספר וואטסאפ עם 6 ספרות לפחות.",
    messageIntro: "היי, אשמח לבדוק זמינות לסיור של Fun in Porto.",
    requestIntro: "בקשת זמינות חדשה לסיור של Fun in Porto.",
    labels: {
      tour: "סוג הסיור",
      name: "שם",
      phone: "מספר וואטסאפ",
      date: "תאריך",
      group: "מספר משתתפים",
    },
    confirm: "אשמח לאישור זמינות ולפרטי נקודת המפגש.",
  },
  spanish: {
    locale: "es-ES",
    tour: "Tour a pie por Oporto en español",
    subject: "Nueva solicitud — tour por Oporto en español",
    title: "Consultar disponibilidad",
    close: "Cerrar el formulario de reserva",
    intro:
      "Elige la fecha y el tamaño del grupo. Confirmaremos la disponibilidad y enviaremos el punto de encuentro por WhatsApp.",
    reassurance: "Reserva gratuita · Confirmación por WhatsApp",
    name: "Tu nombre",
    phone: "Número de WhatsApp",
    date: "Fecha del tour",
    selectDate: "Selecciona una fecha",
    group: "Número de personas",
    submit: "Enviar solicitud",
    success:
      "Gracias, hemos recibido tu solicitud.\n\nConfirmaremos la disponibilidad y enviaremos el punto de encuentro por WhatsApp.",
    error: "Algo salió mal. Envíanos un mensaje por WhatsApp.",
    sending: "Enviando tu solicitud...",
    sendingButton: "Enviando...",
    opening: "Abriendo WhatsApp...",
    phoneError: "Introduce un número de WhatsApp con al menos 6 dígitos.",
    messageIntro:
      "Hola, quisiera consultar la disponibilidad de un tour de Fun in Porto.",
    requestIntro: "Nueva solicitud de disponibilidad para Fun in Porto.",
    labels: {
      tour: "Tipo de tour",
      name: "Nombre",
      phone: "Número de WhatsApp",
      date: "Fecha",
      group: "Número de personas",
    },
    confirm:
      "Por favor, confirma la disponibilidad y envía el punto de encuentro.",
  },
  private: {
    locale: "en-GB",
    tour: "Private Porto tour",
    subject: "New private Porto tour request",
    title: "Plan your private tour",
    intro:
      "Choose your preferred date and group size. We'll reply by WhatsApp with availability and tailored options.",
    reassurance: "Personal proposal · Confirmation by WhatsApp",
    submit: "Send private tour request",
    success:
      "Thanks — we got your private tour request.\n\nWe'll reply by WhatsApp with availability and tailored options.",
    messageIntro:
      "Hi, I would like to plan a private Porto tour with Fun in Porto.",
    requestIntro: "New private Porto tour request.",
    confirm: "Please confirm availability and send the private tour options.",
  },
  family: {
    locale: "en-GB",
    tour: "Family Porto tour enquiry",
    subject: "New family Porto tour enquiry",
    title: "Ask about a family tour",
    intro:
      "Choose your preferred date and group size. Include the children's ages when we continue on WhatsApp so we can recommend the best format.",
    reassurance: "Family-friendly options · Reply by WhatsApp",
    submit: "Send family tour enquiry",
    success:
      "Thanks — we got your family tour enquiry.\n\nWe'll reply by WhatsApp to learn the children's ages and suggest the best option.",
    messageIntro:
      "Hi, I would like advice about a family Porto tour with Fun in Porto.",
    requestIntro: "New family Porto tour enquiry.",
    confirm:
      "Please reply with the best family tour options. I can share the children's ages on WhatsApp.",
  },
};

function getBookingCopy() {
  const path = window.location.pathname;
  let key = "english";
  if (path.includes("porto-walking-tour-hebrew")) key = "hebrew";
  if (path.includes("walking-tour-spanish")) key = "spanish";
  if (path.includes("private-tours-porto")) key = "private";
  if (path.includes("porto-with-kids-and-teenagers")) key = "family";
  return {
    ...BOOKING_CONTEXTS.english,
    ...BOOKING_CONTEXTS[key],
    labels: {
      ...BOOKING_CONTEXTS.english.labels,
      ...(BOOKING_CONTEXTS[key].labels || {}),
    },
  };
}
let bookingLastFocus = null;
let reviewLastFocus = null;

function openWhatsApp() {
  openBookingModal();
}

function getWhatsAppUrl(message = "") {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`;

  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

function getPortugalDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: PORTUGAL_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function formatInputDateFromParts(year, month, day) {
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

function getEarliestBookingDateInputValue(date = new Date()) {
  const portugalDate = getPortugalDateParts(date);
  const dayOffset =
    Number(portugalDate.hour) >= SAME_DAY_BOOKING_CUTOFF_HOUR ? 1 : 0;
  const earliestDate = new Date(
    Date.UTC(
      Number(portugalDate.year),
      Number(portugalDate.month) - 1,
      Number(portugalDate.day) + dayOffset,
    ),
  );

  return formatInputDateFromParts(
    earliestDate.getUTCFullYear(),
    earliestDate.getUTCMonth() + 1,
    earliestDate.getUTCDate(),
  );
}

function syncBookingDateInput(dateInput, forceDefault = false) {
  const earliestDate = getEarliestBookingDateInputValue();

  dateInput.min = earliestDate;

  if (forceDefault || !dateInput.value || dateInput.value < earliestDate) {
    dateInput.value = earliestDate;
  }

  updateBookingDateDisplay(dateInput);
}

function formatBookingDate(value) {
  if (!value) return "";

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat(getBookingCopy().locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function updateBookingDateDisplay(dateInput) {
  const dateDisplay = dateInput
    .closest("[data-booking-date-field]")
    ?.querySelector("[data-booking-date-display]");

  if (!dateDisplay) return;

  const formattedDate = formatBookingDate(dateInput.value);

  const copy = getBookingCopy();
  dateDisplay.textContent = formattedDate || copy.selectDate;
  dateDisplay.setAttribute(
    "aria-label",
    formattedDate ? `${copy.date}, ${formattedDate}` : copy.selectDate,
  );
}

function openBookingDatePicker(dateInput) {
  dateInput.focus({ preventScroll: true });

  try {
    if (typeof dateInput.showPicker === "function") {
      dateInput.showPicker();
      return;
    }
  } catch (error) {
    // Fall through to the click fallback for browsers with partial support.
  }

  dateInput.click();
}

function setupBookingDatePicker(form) {
  if (form.dataset.bookingDatePickerReady === "true") return;

  const dateInput = form.elements.date;
  const dateDisplay = form.querySelector("[data-booking-date-display]");

  if (!dateInput || !dateDisplay) return;

  form.dataset.bookingDatePickerReady = "true";
  updateBookingDateDisplay(dateInput);

  dateDisplay.addEventListener("click", () => {
    openBookingDatePicker(dateInput);
  });

  dateInput.addEventListener("input", () =>
    updateBookingDateDisplay(dateInput),
  );
  dateInput.addEventListener("change", () =>
    updateBookingDateDisplay(dateInput),
  );

  dateInput.addEventListener("keydown", (event) => {
    if (
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey &&
      !DATE_PICKER_NAVIGATION_KEYS.has(event.key)
    ) {
      event.preventDefault();
    }
  });

  dateInput.addEventListener("paste", (event) => event.preventDefault());
  dateInput.addEventListener("drop", (event) => event.preventDefault());
}

function hasEnoughPhoneDigits(value) {
  return value.replace(/\D/g, "").length >= MIN_PHONE_DIGITS;
}

function updateBookingPhoneValidation(phoneInput) {
  if (!phoneInput || phoneInput.disabled) return true;

  const phone = phoneInput.value.trim();

  phoneInput.setCustomValidity("");

  if (phone && !hasEnoughPhoneDigits(phone)) {
    phoneInput.setCustomValidity(getBookingCopy().phoneError);
  }

  return phoneInput.checkValidity();
}

function setupBookingPhoneValidation(form) {
  if (form.dataset.bookingPhoneValidationReady === "true") return;

  const phoneInput = form.elements.phone;

  if (!phoneInput) return;

  form.dataset.bookingPhoneValidationReady = "true";

  phoneInput.addEventListener("input", () =>
    updateBookingPhoneValidation(phoneInput),
  );
  phoneInput.addEventListener("blur", () =>
    updateBookingPhoneValidation(phoneInput),
  );
}

function isMobileBookingFunnel() {
  return window.matchMedia(MOBILE_BOOKING_QUERY).matches;
}

function updateBookingFunnelMode(form) {
  const copy = getBookingCopy();
  const isMobile = isMobileBookingFunnel();
  const phoneField = form.querySelector("[data-booking-phone-field]");
  const phoneInput = form.elements.phone;
  const submitButton = form.querySelector("[data-booking-submit]");
  const intro = document.querySelector("[data-booking-intro]");
  const reassurance = document.querySelector(
    "[data-modal-booking-reassurance]",
  );

  form.dataset.bookingMode = isMobile ? "whatsapp" : "email";

  if (phoneField && phoneInput) {
    phoneField.hidden = isMobile;
    phoneInput.disabled = isMobile;
    phoneInput.required = !isMobile;
    phoneInput.setCustomValidity("");

    if (!isMobile) {
      updateBookingPhoneValidation(phoneInput);
    }
  }

  if (submitButton) {
    submitButton.textContent = copy.submit;
  }

  if (intro) {
    intro.textContent = copy.intro;
  }

  if (reassurance) {
    reassurance.textContent = copy.reassurance;
  }
}

function ensureBookingModal() {
  if (document.querySelector("[data-booking-modal]")) return;

  const copy = getBookingCopy();

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="booking-modal booking-tour-modal" data-booking-modal hidden>
      <div class="booking-modal-backdrop" data-booking-close></div>
      <div class="booking-landmarks" aria-hidden="true">
        <div class="booking-landmark">
          <span>Dom Luis I Bridge</span>
        </div>
        <div class="booking-landmark">
          <span>Ribeira riverfront</span>
        </div>
        <div class="booking-landmark">
          <span>Sao Bento tiles</span>
        </div>
        <div class="booking-landmark">
          <span>Cathedral hill</span>
        </div>
      </div>
      <section class="booking-dialog" role="dialog" aria-modal="true" aria-label="${copy.title}">
        <button class="booking-close" type="button" data-booking-close aria-label="${copy.close}">×</button>

        <div class="booking-dialog-copy">
          <span class="guide-tag">${copy.title}</span>
          <p data-booking-intro>${copy.intro}</p>
          <p class="booking-reassurance" data-modal-booking-reassurance>${copy.reassurance}</p>
        </div>

        <form
          class="booking-form"
          action="https://api.web3forms.com/submit"
          method="POST"
          data-booking-form
          data-success-message="${copy.success}"
          data-error-message="${copy.error}"
          data-sending-message="${copy.sending}"
          data-sending-button="${copy.sendingButton}"
        >
          <input type="hidden" name="access_key" value="${WEB3FORMS_ACCESS_KEY}" />
          <input type="hidden" name="subject" value="${copy.subject}" />
          <input type="hidden" name="from_name" value="Fun in Porto website" />
          <input type="hidden" name="tour" value="${copy.tour}" />
          <input type="hidden" name="message" value="" />
          <input type="checkbox" name="botcheck" class="bot-field" tabindex="-1" autocomplete="off" />

          <div class="form-row">
            <label>
              <span>${copy.name}</span>
              <input type="text" name="name" autocomplete="name" required />
            </label>

            <label data-booking-phone-field>
              <span>${copy.phone}</span>
              <input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="+351 ..." required />
            </label>
          </div>

          <div class="form-row">
            <label data-booking-date-field>
              <span>${copy.date}</span>
              <span class="booking-date-shell">
                <button class="booking-date-display" type="button" data-booking-date-display>${copy.selectDate}</button>
                <input class="booking-date-input" type="date" name="date" autocomplete="off" inputmode="none" tabindex="-1" aria-hidden="true" required />
              </span>
            </label>

            <label>
              <span>${copy.group}</span>
              <input type="number" name="guests" min="1" max="30" value="2" required />
            </label>
          </div>

          <div class="form-actions booking-actions">
            <button class="btn sun booking-submit" type="submit" data-booking-submit>${copy.submit}</button>
            <p class="form-status" data-form-status role="status" aria-live="polite"></p>
          </div>
        </form>
      </section>
    </div>
  `,
  );

  const modal = document.querySelector("[data-booking-modal]");
  const form = modal.querySelector("[data-booking-form]");
  const dateInput = form.elements.date;
  const bookingMediaQuery = window.matchMedia(MOBILE_BOOKING_QUERY);

  syncBookingDateInput(dateInput, true);
  setupBookingDatePicker(form);
  setupBookingPhoneValidation(form);
  updateBookingFunnelMode(form);

  const handleBookingModeChange = () => updateBookingFunnelMode(form);

  if (typeof bookingMediaQuery.addEventListener === "function") {
    bookingMediaQuery.addEventListener("change", handleBookingModeChange);
  } else if (typeof bookingMediaQuery.addListener === "function") {
    bookingMediaQuery.addListener(handleBookingModeChange);
  }

  modal.querySelectorAll("[data-booking-close]").forEach((button) => {
    button.addEventListener("click", closeBookingModal);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const date = formatBookingDate(String(formData.get("date") || ""));
    const guests = String(formData.get("guests") || "").trim();
    const isMobile = form.dataset.bookingMode === "whatsapp";

    if (!isMobile && !updateBookingPhoneValidation(form.elements.phone)) {
      form.reportValidity();
      return;
    }

    const message = [
      isMobile ? copy.messageIntro : copy.requestIntro,
      `${copy.labels.tour}: ${copy.tour}`,
      `${copy.labels.name}: ${name}`,
      isMobile ? "" : `${copy.labels.phone}: ${phone}`,
      `${copy.labels.date}: ${date}`,
      `${copy.labels.group}: ${guests}`,
      copy.confirm,
    ]
      .filter(Boolean)
      .join("\n");

    if (isMobile) {
      const status = form.querySelector("[data-form-status]");

      if (status) {
        status.dataset.state = "";
        status.textContent = copy.opening;
      }

      window.location.href = getWhatsAppUrl(message);
      return;
    }

    form.elements.message.value = message;
    submitWeb3Form(event, form, {
      onSuccess: () => {
        form.reset();
        syncBookingDateInput(dateInput, true);
      },
    });
  });
}

function ensureReviewModal() {
  if (document.querySelector("[data-review-modal]")) return;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
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
  `,
  );

  const modal = document.querySelector("[data-review-modal]");
  const form = modal.querySelector("[data-review-form]");

  modal.querySelectorAll("[data-review-close]").forEach((button) => {
    button.addEventListener("click", closeReviewModal);
  });

  form.addEventListener("submit", (event) => {
    submitWeb3Form(event, form, {
      onSuccess: () => form.reset(),
    });
  });
}

async function submitWeb3Form(event, form, options = {}) {
  event.preventDefault();

  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton ? submitButton.textContent : "";

  if (status) {
    status.dataset.state = "";
    status.textContent = form.dataset.sendingMessage || "Sending...";
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = form.dataset.sendingButton || "Sending...";
  }

  try {
    const response = await fetch(form.action, {
      method: form.method || "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      throw new Error(result.message || "Form submission failed");
    }

    if (typeof options.onSuccess === "function") {
      options.onSuccess();
    }

    if (status) {
      status.dataset.state = "success";
      status.textContent = form.dataset.successMessage || "Sent successfully.";
    }
  } catch (error) {
    if (status) {
      status.dataset.state = "error";
      status.textContent =
        form.dataset.errorMessage || "Something went wrong. Please try again.";
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

  const modal = document.querySelector("[data-booking-modal]");
  const form = modal.querySelector("[data-booking-form]");
  const dateInput = form.elements.date;
  bookingLastFocus = document.activeElement;
  syncBookingDateInput(dateInput);
  updateBookingFunnelMode(form);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector('input[name="name"]').focus();
}

function closeBookingModal() {
  const modal = document.querySelector("[data-booking-modal]");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (bookingLastFocus && typeof bookingLastFocus.focus === "function") {
    bookingLastFocus.focus();
  }
}

function openBookingModalFromUrl() {
  const params = new URLSearchParams(window.location.search);

  if (params.get("book") === "1") {
    openBookingModal();
  }
}

function openReviewModal() {
  ensureReviewModal();

  const modal = document.querySelector("[data-review-modal]");
  reviewLastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector('input[name="name"]').focus();
}

function closeReviewModal() {
  const modal = document.querySelector("[data-review-modal]");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (reviewLastFocus && typeof reviewLastFocus.focus === "function") {
    reviewLastFocus.focus();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeBookingModal();
    closeReviewModal();
  }
});

function updateStickyAvailabilityVisibility() {
  document.body.classList.toggle(
    "show-sticky-availability",
    window.scrollY > STICKY_AVAILABILITY_SCROLL_THRESHOLD,
  );
}

updateStickyAvailabilityVisibility();
window.addEventListener("load", updateStickyAvailabilityVisibility);
window.addEventListener("scroll", updateStickyAvailabilityVisibility, {
  passive: true,
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-review-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    submitWeb3Form(event, form, {
      onSuccess: () => form.reset(),
    });
  });
});

openBookingModalFromUrl();
