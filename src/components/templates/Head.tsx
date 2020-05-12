import * as React from "react";
import { Helmet } from "react-helmet";

interface Props {
  description: string;
  keywords: string;
  title: string;
}

const Head: React.FC<Props> = ({ description, keywords, title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Amatic+SC:700" rel="stylesheet" />
    </Helmet>
  );
};

export default Head;
