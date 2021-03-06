import { ContentMetadata } from './content';
import { Dictionary } from './misc';
import { Post } from './post';
import { SearchIndex } from './search';

/**
 * Chapters model.
 */
export namespace Chapter {
  export interface Summary {
    description: string;
    id: string;
    title: string;
  }

  export interface EditableFields {
    description: string;
    title: string;
  }

  interface Fields extends EditableFields {
    examples: string[];
    lessons: string[];
  }

  /**
   * Required fields for creating a chapter.
   */
  export interface Create extends Fields, ContentMetadata.Create {}

  /**
   * Required fields for updating a chapter.
   */
  export interface Update
    extends Partial<EditableFields>,
      ContentMetadata.Update {}

  /**
   * Fields returned from the backend.
   */
  export interface Response extends Fields, ContentMetadata.Response {
    exampleData?: Dictionary<Post.Summary>;
    lessonData?: Dictionary<Post.Summary>;
  }

  /**
   * Serialized fields.
   */
  export interface Get extends Fields, ContentMetadata.Get {
    exampleData: Post.Summary[];
    lessonData: Post.Summary[];
    id: string;
    posts: number;
  }

  /**
   * Keep Firebase snapshot
   */
  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }

  /**
   * Search index fields.
   */
  export interface Index extends SearchIndex {
    description: string;
    title: string;
    topics: string[];
  }
}
