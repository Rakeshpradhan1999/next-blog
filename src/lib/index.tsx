import { IPostMetaData } from "@/types";
import fs from "fs";
import matter from "gray-matter";
export const getPost = (slug: string) => {
  const folder = "src/posts";
  const file = `${folder}/${slug}.md`;
  const post = matter(fs.readFileSync(file, "utf-8"));
  // console.log(post.);
  return {
    content: post.content,
    title: post.data.title,
    subtitle: post.data.subtitle,
    date: post.data.date,
  };
};

export const getAllPostesMetaData = (): IPostMetaData[] => {
  const folder = "src/posts";
  let files = fs.readdirSync(folder);
  files = files.filter((file) => file.endsWith(".md"));
  files = files.map((file) => file.replace(".md", ""));
  let formatedPost = files.map((file) => {
    const metaData = getPost(file);
    return {
      slug: file,
      title: metaData.title,
      date: metaData.date,
      subtitle: metaData.subtitle,
      content: metaData.content,
    };
  });
  return formatedPost;
};
