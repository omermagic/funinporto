function openWhatsApp() {
  const phone = '351937106777';
  const text = encodeURIComponent(
    'Hi! I want to join the free walking tour in Porto in English.\nDate:\nNumber of people:\nName:'
  );

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

document.querySelectorAll('[data-review-form]').forEach((form) => {
  const status = form.querySelector('[data-form-status]');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    status.dataset.state = '';
    status.textContent = form.dataset.sendingMessage || 'Sending...';
    submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Submission failed');
      }

      form.reset();
      status.dataset.state = 'success';
      status.textContent = form.dataset.successMessage || 'Thank you! Your review was sent.';
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = form.dataset.errorMessage || 'Something went wrong. Please try again.';
    } finally {
      submitButton.disabled = false;
    }
  });
});
