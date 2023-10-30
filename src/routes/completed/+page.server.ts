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
    const id = data.get("id");
    const completed = data.get("completed");

    if (completed && id) {
      await RecomendationService.updateRecomendation(
        String(id),
        Boolean(completed)
      );
    }
  },
};
