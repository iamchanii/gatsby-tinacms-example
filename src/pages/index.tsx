import { graphql, useStaticQuery } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query($slug: String) {
      dataJson(path: { eq: $slug }) {
        title
        fileRelativePath
        rawJson
      }
    }
  `);

  const [formData] = useLocalJsonForm(data.dataJson, {
    fields: [
      {
        label: '타이틀',
        description: '기존 Hi People 위치에 표시됩니다.',
        name: 'rawJson.title',
        component: 'text',
      },
    ],
  });

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{formData.title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  );
};

export default IndexPage;
