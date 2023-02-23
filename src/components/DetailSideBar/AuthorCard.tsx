import { LOCALDOMAIN } from '@/utils';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Avator from '../TempImages/rem.png'
import style from './styles/style.module.css'

export interface AuthorCardProps {
  avator: string;
  name: string;
  introduction: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ avator, name, introduction }) => {
  return (
    <div className={style.card}>
      <Image src={avator} alt={'Avator of the auther'} className={style.avator} />
      <div className={style.info}>
        <div className={style.name}>
          {name}
        </div>
        <div className={style.introduction}>
          {introduction.length < 10 ? introduction : introduction.slice(0, 10) + '...'}
        </div>
      </div>
    </div>
  );
};