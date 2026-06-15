const MANUAL_REVIEWS = {
  // Add real English reviews here. Copy one object per review.
  en: [
    // {
    //   name: 'Guest name',
    //   location: 'Country or city',
    //   date: 'June 2026',
    //   rating: 5,
    //   text: `Paste the real review text here.`,
    // },
  ],

  // Add real Hebrew reviews here. Copy one object per review.
  he: [
    // {
    //   name: 'שם האורח/ת',
    //   location: 'עיר או מדינה',
    //   date: 'יוני 2026',
    //   rating: 5,
    //   text: `טקסט הביקורת האמיתית כאן.`,
    // },
  ],

  // Optional: add featured reviews for the homepage.
  // If this stays empty, the homepage will use the first reviews from English/Hebrew.
  home: [],
};

function openWhatsApp(lang) {
  const phone = '351937106777';
  const text = lang === 'he'
    ? 'היי! אני רוצה להצטרף לסיור החינמי בפורטו בעברית.%0Aתאריך:%0Aמספר משתתפים:%0Aשם:'
    : 'Hi! I want to join the free walking tour in Porto in English.%0ADate:%0ANumber of people:%0AName:';

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char]));
}

function getReviewsForPage(page) {
  if (page === 'home' && MANUAL_REVIEWS.home.length === 0) {
    return [...MANUAL_REVIEWS.en, ...MANUAL_REVIEWS.he].slice(0, 3);
  }

  return MANUAL_REVIEWS[page] || [];
}

function renderStars(rating) {
  const safeRating = Math.max(1, Math.min(5, Number(rating) || 5));
  return '★★★★★'.slice(0, safeRating);
}

function renderReviewCard(review) {
  const meta = [review.name, review.location, review.date].filter(Boolean).map(escapeHtml).join(' · ');

  return `
    <article class="card review-card">
      <div class="review-stars" aria-label="${escapeHtml(review.rating || 5)} out of 5 stars">
        ${renderStars(review.rating)}
      </div>
      <p class="review-text">“${escapeHtml(review.text)}”</p>
      ${meta ? `<div class="review-meta">${meta}</div>` : ''}
    </article>
  `;
}

function renderManualReviews() {
  document.querySelectorAll('[data-reviews]').forEach((section) => {
    const reviews = getReviewsForPage(section.dataset.reviews);
    const grid = section.querySelector('.reviews-grid');

    if (!reviews.length || !grid) {
      section.hidden = true;
      return;
    }

    section.hidden = false;
    grid.innerHTML = reviews.map(renderReviewCard).join('');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderManualReviews);
} else {
  renderManualReviews();
}
