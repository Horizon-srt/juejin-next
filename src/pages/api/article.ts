import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CMSDOMAIN } from '@/utils';
import { ArticleProps } from '../../components/Article';

const getAuthorData = (req: NextApiRequest, res: NextApiResponse<ArticleProps>): void => {
  const { articleId } = req.query;
  axios.get(`${CMSDOMAIN}/api/articles/${articleId}`).then(result => {
    const data = result.data.data.attributes || {};
    res.status(200).json({
      title: data.title,
      content: data.content,
    });
  });
};

export default getAuthorData;
