export enum DogType {
    LOST = "lost",
    FOUND = "found",
}

export enum DogSex {
    FEMALE = "female",
    MALE = "male"
};


export interface QueryPayload {
    dogType: DogType;
    base64Image: string;
}

export interface ReportDogPayload {
    type: DogType;
    base64Images: Array<string>;
    contactName: string;
    contactPhone: string;
    contactEmail?: string;
    contactAdress?: string;
    foundAtLocation: string;
    breed?: string;
    color?: string;
    size?: string;    
    sex?: string;
    location?: string;
    chipNumber: string;
    extraDetails?: string;
};

export interface DogResult {
    dogId: string;
    contactName: string;
    contactPhone: string;
    contactEmail?: string;
    contactAdress?: string
    breed?: string;
    color?: string;
    size?: string;    
    sex?: string;
    location?: string;
    chipNumber: string;
    extraDetails?: string;
    imageBase64: string;
    imageContentType: string;
};