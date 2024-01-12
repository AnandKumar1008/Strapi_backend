import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogDataBlogDetails extends Schema.Component {
  collectionName: 'components_blog_data_blog_details';
  info: {
    displayName: 'BlogDetails';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    paragraphs: Attribute.Blocks;
    content: Attribute.Component<'bullets.bullet-points', true>;
    RelatedMedia: Attribute.Media;
    media_url: Attribute.String;
    paragraphs2: Attribute.Blocks;
  };
}

export interface BlogTableTable extends Schema.Component {
  collectionName: 'components_blog_table_tables';
  info: {
    displayName: 'Table';
    description: '';
  };
  attributes: {
    tableTitle: Attribute.String;
  };
}

export interface BulletsBulletPoints extends Schema.Component {
  collectionName: 'components_bullets_bullet_points';
  info: {
    displayName: 'BulletPoints';
    description: '';
  };
  attributes: {
    boldText: Attribute.String;
    text: Attribute.Blocks;
    RelatedMedia: Attribute.Media;
    media_url: Attribute.String;
  };
}

export interface InfographicsInfographics extends Schema.Component {
  collectionName: 'components_infographics_infographics';
  info: {
    displayName: 'Infographics';
    description: '';
  };
  attributes: {
    InfographicsMedia: Attribute.Media;
    InfographicsTitle: Attribute.String;
    InfographicsDescription: Attribute.String;
    alternateText: Attribute.String;
    media_url: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SubHeadingSubHeading extends Schema.Component {
  collectionName: 'components_sub_heading_sub_headings';
  info: {
    displayName: 'sub_heading';
  };
  attributes: {
    sub_heading: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-data.blog-details': BlogDataBlogDetails;
      'blog-table.table': BlogTableTable;
      'bullets.bullet-points': BulletsBulletPoints;
      'infographics.infographics': InfographicsInfographics;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'sub-heading.sub-heading': SubHeadingSubHeading;
    }
  }
}
