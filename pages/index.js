import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>{siteTitle}</Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <Card
                className={utilStyles.root}
                className={utilStyles.listItem}
                key={id}
              >
                <CardContent>
                  <Typography
                    className={utilStyles.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    <a className={utilStyles.txtcolblue}>{title}</a>
                  </Typography>
                  <Typography variant="body2" component="p">
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
