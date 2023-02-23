import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CMSDOMAIN } from '@/utils';
import { AuthorCardProps } from '../../components/DetailSideBar/AuthorCard';

const getAuthorData = (req: NextApiRequest, res: NextApiResponse<AuthorCardProps>): void => {
  const { authorId } = req.query;
  axios.get(`${CMSDOMAIN}/api/authors/${authorId}`).then(result => {
    const data = result.data.data.attributes || {};
    res.status(200).json({
      avator: data.avator,
      name: data.name,
      introduction: data.introduction,
    });
  });
};

export default getAuthorData;
