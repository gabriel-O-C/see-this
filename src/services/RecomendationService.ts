import { db } from "$lib/firebase";
import type { Recommendation } from "$lib/types/Recomendation";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

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

  async completeRecomendation(id: string): Promise<void> {
    try {
      await updateDoc(doc(db, "recomendations", id), {
        completed: true,
      });

    } catch (error) {
      console.log("error", error);
    }
  }

  async doAgainRecomendation(id: string): Promise<void> {
    try {
      await updateDoc(doc(db, "recomendations", id), {
        completed: false,
      });

    } catch (error) {
      console.log("error", error);
    }
  }

  async createRecomendation({ title, type }: Record<string, string>) {
    await addDoc(collection(db, "recomendations"), {
      completed: false,
      title,
      type,
    });
  }
}

export default new RecommendationService();
