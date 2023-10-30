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
  default: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");

    if (id) {
      await RecomendationService.doAgainRecomendation(String(id));
    }
  },
};
