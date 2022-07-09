import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import MainLayout from '../../layouts/MainLayout';
import { WriteForm } from '../../components/WriteForm';
import { Api } from '../../utils/api';
import { IAnimal } from '../../types/animal';

interface WritePageProps {
  animal?: IAnimal;
}

const UpdatePage: NextPage<WritePageProps> = ({ animal }) => {
  return (
    <MainLayout>
      <WriteForm animal={animal} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
	const id = ctx.params.id.toString();
	const animalsItem = await Api().animal.getOne(id);
    const user = await Api(ctx).user.getMe();

    if (animalsItem.user.id !== user.id) {
      return {
        props: {},
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {
        animalsItem,
      },
    };
  } catch (err) {
    console.log('Write page', err);
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default UpdatePage;
