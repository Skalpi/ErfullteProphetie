export interface Prophecy {
  id: string;
  category: ProphecyCategory;
  title: string;
  oldTestament: string; // The verse reference
  otText?: string; // Short excerpt
  newTestament: string; // The fulfillment reference
  ntText?: string; // Short excerpt
  description: string;
}

export enum ProphecyCategory {
  HERKUNFT = "Herkunft & Geburt",
  LEBEN = "Leben & Dienst",
  LEIDEN = "Leiden & Tod",
  AUFERSTEHUNG = "Auferstehung & Herrlichkeit",
  ZEITPLAN = "Zeitplan & Chronologie"
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}