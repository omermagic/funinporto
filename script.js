function openWhatsApp(lang) {
  const phone = '351937106777';
  const text = lang === 'he'
    ? 'היי! אני רוצה להצטרף לסיור החינמי בפורטו בעברית.%0Aתאריך:%0Aמספר משתתפים:%0Aשם:'
    : 'Hi! I want to join the free walking tour in Porto in English.%0ADate:%0ANumber of people:%0AName:';

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}
