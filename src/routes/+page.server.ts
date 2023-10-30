import { markAsCompleted } from "$lib/data";
import RecomendationService from "../services/RecomendationService.js";

export async function load() {
  const recomendations = await RecomendationService.getRecomendations();
  return {
    recommendations: recomendations.filter(
      (recommendation) => !recommendation.completed
    ),
  };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("recommendation");

    if (title) {
      markAsCompleted(title);
    }
  },
};
