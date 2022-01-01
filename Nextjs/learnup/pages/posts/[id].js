import Head from 'next/head';
import React from 'react'
import Layout from '../../components/Layout';
import {getAllPostIds, getPostData} from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths, 
        fallback: false
    }
}
export async function getStaticProps({ params }) {
   // Add the "await" keyword like this:
  const postData = await getPostData(params.id)
  // ...
    return {
        props: 
        {
            postData
        }
    }
}
export default function post({ postData }) {
    return (
    <Layout>
    <Head>
        <title>Noi dung dang bai  {postData.title}</title>
    </Head>
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
    )
}

