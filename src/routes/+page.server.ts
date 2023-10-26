import { recommendations as db, markAsCompleted } from '$lib/data';

export function load() {
  return {
    recommendations: db.filter((recommendation) => !recommendation.completed)
  }
}

export const actions = {
  markAsCompleted: async ({request}) => {
    const data = await request.formData()
    const title = data.get('recommendation')
    if(title) {
      markAsCompleted(title)
    }
  }
}