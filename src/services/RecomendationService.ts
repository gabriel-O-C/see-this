import { db } from "$lib/firebase";
import type { Recommendation } from "$lib/types/Recomendation";
import { collection, getDocs } from "firebase/firestore";

class RecommendationService {
  async getRecomendations(): Promise<Recommendation[]> {
    const recomendations: Recommendation[] = [];
    (await getDocs(collection(db, "recomendations"))).forEach((doc) => {
      const data = doc.data();
      recomendations.push(data as Recommendation);
    });

    return recomendations;
  }
}

export default new RecommendationService();
