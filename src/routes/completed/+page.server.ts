import { recommendations as db, markAsNotCompleted } from '$lib/data';

export function load() {
  return {
    recommendations: db.filter((recommendation) => recommendation.completed)
  }
}

export const actions = {
  markAsCompleted: async ({request}) => {
    const data = await request.formData()
    const title = data.get('recommendation')
    if(title) {
      markAsNotCompleted(title)
    }
  }
}