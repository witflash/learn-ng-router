export class Article {
  title: string;
  desc: string;
  url: string;
  published: string;
  source: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
