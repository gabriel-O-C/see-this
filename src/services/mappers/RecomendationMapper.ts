import type { Recommendation } from "$lib/types/Recomendation";

class RecomendationMapper {
  toDomain(persistenceRecomendation: Recommendation) {
    return {
      title: String(persistenceRecomendation.title),
      id: String(persistenceRecomendation.id),
      completed: persistenceRecomendation.completed,
      type: String(persistenceRecomendation.type),
    };
  }

  toPersistence(domainRecomendation: Recommendation) {
    return {
      title: String(domainRecomendation.title),
      id: String(domainRecomendation.id),
      completed: domainRecomendation.completed,
      type: String(domainRecomendation.type),
    };
  }
}

export default new RecomendationMapper();
