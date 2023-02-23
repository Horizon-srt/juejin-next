import { AuthorCardProps } from '../DetailSideBar/AuthorCard';
import styles from './styles/style.module.css'
import ReactMarkdown from 'react-markdown';

export interface ArticleProps {
  title: string;
  content: string;
  // author: AuthorCardProps;
}

const Article: React.FC<ArticleProps & AuthorCardProps> = ({ content, title, name }) => {

  return (
    <div className={styles.card}>
      {/* <div>Article</div> */}
      <div className={styles.title}>
        {title}
      </div>
      <hr className={styles.divider} />
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default Article;