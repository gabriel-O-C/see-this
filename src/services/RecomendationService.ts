import { db } from "$lib/firebase";
import type { Recommendation } from "$lib/types/Recomendation";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

class RecommendationService {
  async getRecomendations(): Promise<Recommendation[]> {
    const recomendations: Recommendation[] = [];
    (await getDocs(collection(db, "recomendations"))).forEach((doc) => {
      const data = doc.data();
      const id: string = doc.id;
      recomendations.push({
        id,
        completed: data.completed,
        title: data.title,
        type: data.type,
      });
    });
    return recomendations;
  }

  async updateRecomendation(id: string, completed: boolean): Promise<void> {
    await updateDoc(doc(db, "recomendations", id), {  
      completed: !completed,
    });
  }
}

export default new RecommendationService();