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
type Recommendation = {
  title: string;
  type: string;
  completed: boolean;
}
export function markAsCompleted(title: FormDataEntryValue) {
  recommendations.map((item) => {
    if(item.title === title) {
      item.completed = true
    }
    return item
  })
}

export function markAsNotCompleted(title: FormDataEntryValue) {
  recommendations.map((item) => {
    if(item.title === title) {
      item.completed = false
    }
    return item
  })
}