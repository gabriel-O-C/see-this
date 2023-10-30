export type Recommendation = {
  title: FormDataEntryValue;
  type: RecommendationType
  completed: boolean;
};

export type RecommendationType = "movie" | "anime" | "book";
