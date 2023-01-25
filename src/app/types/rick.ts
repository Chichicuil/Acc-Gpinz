export interface RickCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: [
    {
      id: number;
      name: string;
      status: string;
      image: string;
    }
  ];
}
