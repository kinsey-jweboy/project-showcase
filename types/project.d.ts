interface Project {
  createAt: Date;
  description: string;
  id: number;
  link: string;
  name: string;
  screenshots: string[];
  type: string;
  updateAt: Date;
  video: string;
  isPublic: boolean;
  category: Category;
}
