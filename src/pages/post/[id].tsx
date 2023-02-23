import Article from '@/components/Article';
import { AuthorCard, AuthorCardProps } from '@/components/DetailSideBar/AuthorCard';
import { LOCALDOMAIN } from '@/utils';
import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import DetailSideBar from '@/components/DetailSideBar';

interface PostProps {
  title: string;
  content: string;
  avator: string;
  name: string;
  introduction: string;
}

const Post: NextPage<PostProps> = ({ title, content, avator, name, introduction }) => {
  const router = useRouter()
  // const id = router.query.id

  return (
    <main className={styles.main}>
      <div className={styles.mainArea}>
        <Article title={title} content={content} name={name} avator={''} introduction={introduction} />
      </div>
      <div className={styles.cardArea}>
        {/* <AuthorCard avator={avator} name={name} introduction={introduction} /> */}
        <DetailSideBar name={name} avator={''} introduction={introduction} />
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const articleId = context.query.id;
  const {data: articleData} = await axios.get(`${LOCALDOMAIN}/api/article`, {
    params: {
      articleId,
    }
  });

  const authorId = 1;
  const { data: authorData } = await axios.get(`${LOCALDOMAIN}/api/author`, {
    params: {
      authorId,
    },
  });
  return {
    props: {...authorData, ... articleData}, // 需要拿props包裹
  };
};

export default Post;