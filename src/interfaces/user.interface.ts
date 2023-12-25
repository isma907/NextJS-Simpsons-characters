export interface searchUserParam {
  search?: string;
  limit?: number;
  page?: number;
}

export interface SimpsonCharacter {
  _id: string;
  name: string;
  resume: string;
  image: string;
  gender: string;
  status: string;
  occupation: string;
}
