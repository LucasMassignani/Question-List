export interface Question {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: Array<{
    choice: string;
    votes: number;
  }>;
}
