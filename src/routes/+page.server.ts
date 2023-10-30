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

    const completed = data.get("completed");
    const id = data.get("id");

    if (completed && id) {
      await RecomendationService.updateRecomendation(
        String(id),
        Boolean(completed)
      );
    }
  },
};
