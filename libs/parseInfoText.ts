import { PlantInfoType } from "@/types/types";

export function parsePlantInfo(text: string): PlantInfoType {
  try {
    const jsonString = text.match(/```json\n([\s\S]*)\n```/)?.[1] || "{}";
    const info = JSON.parse(jsonString);

    return {
      name: info["name"] || "Unknown Plant",
      scientificName: info["scientificName"] || "",
      family: info["family"] || "",
      nativeRegion: info["nativeRegion"] || "",
      description: info["description"] || "",

      // New medicinal fields
      isMedicinal: info["isMedicinal"] ?? false,
      medicinalValue: info["medicinalValue"] || "",
    };
  } catch (error) {
    console.error("Error parsing plant info:", error);
    return {
      name: "Unknown Plant",
      scientificName: "",
      family: "",
      nativeRegion: "",
      description: "Unable to parse plant information.",
      isMedicinal: false,
      medicinalValue: "",
    };
  }
}
