export default function formatDate(date, locale = "en-US") {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
