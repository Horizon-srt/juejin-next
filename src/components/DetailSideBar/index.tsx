import { AuthorCard } from './AuthorCard';
import { RelateArticle } from './RelateArticle';

const data = {
  id: 'aaa',
  tags: ['a', 'b'],
}

interface DetailSideBar {
  avator: string;
  name: string;
  introduction: string;
}

const DetailSideBar: React.FC<DetailSideBar> = ({ avator, name, introduction }) => {
  return (
    <div >
      <AuthorCard avator={avator} name={name} introduction={introduction} />
      <RelateArticle tags={data.tags} />
    </div>
  );
}

export default DetailSideBar;