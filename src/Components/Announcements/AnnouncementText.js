import React from "react";

export default function Registration() {
  return (
    <div>
      <p className="announcement-card__text" style={{ whiteSpace: "pre-wrap" }}>
        Нові курси розвиваючих та дослідницьких занять, спрямованих на
        інтеграцію тіла-розуму, на здоровий рух, танець та радість. Для всіх
        рівнів фізичної підготовки та для будь-якого віку. Ми допоможемо
        вибрати, що підійде тобі.
      </p>
      <p className="announcement-card__link">
        <a
          href={"https://forms.gle/TBfYPvjDfvb1cb59A"}
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Реєстрація
        </a>
      </p>
    </div>
  );
}
