import dynamic from 'next/dynamic';
import { Post } from '@zoonk/models';

const PostsForm = dynamic(() => import('./PostsForm'));
const ReferencesForm = dynamic(() => import('./ReferencesForm'));

interface PostFormProps {
  category: Post.Category | 'none';
  data?: Post.Get;
  saving: boolean;
  topicIds?: string[];
  onDelete?: () => void;
  onSubmit: (data: Post.EditableFields, topics: string[]) => void;
}

/**
 * Form for editing a post.
 */
const PostForm = (props: PostFormProps) => {
  const { category } = props;

  switch (category) {
    case 'posts':
      return <PostsForm {...props} />;
    case 'references':
      return <ReferencesForm {...props} />;
    case 'none':
      return null;
    default:
      return <PostsForm {...props} />;
  }
};

export default PostForm;
