import { addNewSugestion } from "$lib/data.js";
import type { RecommendationType } from "$lib/types/Recomendation.js";
import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const response = await request.formData();

    const sugestion = response.get("sugestion");
    const sugestionType = response.get("type");

    if(!sugestion) {
      return fail(400, {sugestionError: 'sugestion is required'})
    }

    if (!sugestionType) {
      return fail(400, { sugestionTypeError: "sugestion type is required" });
    }

    addNewSugestion({
      title: String(sugestion),
      type: sugestionType as RecommendationType,
      completed: false,
    });

    return { success: true, type: '' };
  },
};
