import { markAsNotCompleted } from "$lib/data";
import RecomendationService from "../../services/RecomendationService.js";

export async function load() {
  const recommendations = await RecomendationService.getRecomendations();
  return {
    recommendations: recommendations.filter(
      (recommendation) => recommendation.completed
    ),
  };
}

export const actions = {
  markAsCompleted: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("recommendation");
    if (title) {
      markAsNotCompleted(title);
    }
  },
};
