export interface PlantInfoType {
  name: string;
  scientificName: string;
  family: string;
  nativeRegion: string;
  description: string;

  isMedicinal: boolean;
  medicinalValue?: string; 
}

export interface PlantInfoProps {
  info: PlantInfoType;
  imageUrl: string | null;
}

export interface ImageUploadProps {
  setPlantInfo: (info: PlantInfoType | null) => void;
  setImageUrl: (url: string | null) => void;
}
