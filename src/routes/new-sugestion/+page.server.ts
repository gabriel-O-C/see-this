import { fail } from "@sveltejs/kit";
import RecomendationService from "../../services/RecomendationService.js";

export const actions = {
  default: async ({ request }) => {
    const response = await request.formData();

    const sugestion = response.get("sugestion");
    const sugestionType = response.get("type");

    if (!sugestion) {
      return fail(400, { sugestionError: "sugestion is required" });
    }

    if (!sugestionType) {
      return fail(400, { sugestionTypeError: "sugestion type is required" });
    }

    await RecomendationService.createRecomendation({
      title: String(sugestion),
      type: String(sugestionType),
    });

    return { success: true, type: "" };
  },
};
