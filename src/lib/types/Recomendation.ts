export type Recommendation = {
  title: FormDataEntryValue;
  type: string
  completed: boolean;
  id: string
};

export type RecommendationType = "movie" | "anime" | "book";
