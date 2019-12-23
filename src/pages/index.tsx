import { graphql, useStaticQuery } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query($slug: String) {
      pagesJson(path: { eq: $slug }) {
        title
        fileRelativePath
        rawJson
        fields {
          markdownContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  const [formData] = useLocalJsonForm(data.pagesJson, {
    fields: [
      {
        label: '타이틀',
        description: '기존 Hi People 위치에 표시됩니다.',
        name: 'rawJson.title',
        component: 'text',
        parse: value => value ?? '',
      },
      {
        label: '설명',
        description: '본문에 표시됩니다.',
        name: 'rawJson.description',
        component: 'markdown',
        parse: value => value ?? '',
      },
    ],
  });

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{formData.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: formData.fields.markdownContent.childMarkdownRemark.html,
        }}
      />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  );
};

export default IndexPage;
