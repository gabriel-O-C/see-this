import type { Recommendation } from "./types/Recomendation";

export const recommendations = [
  {
    title: "jogador número 1",
    type: "book",
    completed: false,
  },
  {
    title: "dias perfeitos",
    type: "book",
    completed: true,
  },
  {
    title: "Senhor das moscas",
    type: "movie",
    completed: false,
  },
  {
    title: "Ensaio sobre a cegueira",
    type: "book",
    completed: false,
  },
  {
    title: "Armada",
    type: "book",
    completed: false,
  },
  {
    title: "Psycho Pass",
    type: "anime",
    completed: false,
  },
  {
    title: "Manual de assassinato para boas garotas",
    type: "book",
    completed: false,
  },
];

export function markAsCompleted(title: FormDataEntryValue) {
  recommendations.map((item) => {
    if (item.title === title) {
      item.completed = true;
    }
    return item;
  });
}

export function markAsNotCompleted(title: FormDataEntryValue) {
  recommendations.map((item) => {
    if (item.title === title) {
      item.completed = false;
    }
    return item;
  });
}

export function addNewSugestion({ completed, title, type }: Recommendation) {
  if (completed && title && type) {
    recommendations.push({ completed, title: String(title), type });

    return true
  }

  return false
}
