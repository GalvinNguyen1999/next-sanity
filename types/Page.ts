import { PortableTextBlock } from 'sanity';

export type Page = {
  _id: string;
  createdAt: Date;
  slug: string;
  title: string;
  content: PortableTextBlock[];
}
