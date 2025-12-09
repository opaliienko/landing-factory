export const validateConfig = (config, mergedSections) => {
  if (!config || !Array.isArray(config.sections)) {
    console.error("Помилка: config.sections повинен бути масивом.");
    return false;
  }

  let isValid = true;

  config.sections.forEach((section, index) => {
    if (!section.type) {
      console.error(`Секція індекс ${index} не має поля "type".`, section);
      isValid = false;
      return;
    }

    if (!mergedSections[section.type]) {
      console.error(`Компонент для секції "${section.type}" не знайдено.`);
      isValid = false;
    }

    if (!section.data) {
      console.warn(`Cекція "${section.type}" не має поля "data".`);
    }
  });

  return isValid;
};
