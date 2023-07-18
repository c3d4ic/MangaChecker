export interface Manga {
    image: String;
    release: Release[];
    title: String;
  }

  export interface Release {
    chapter: String;
    read: Boolean;
    url: String;
    pages: String[];
  }