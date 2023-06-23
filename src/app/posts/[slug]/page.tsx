// "use client";
import React from "react";
// import fs from "fs";
import Markdown from "markdown-to-jsx";
import { BiArrowBack } from "react-icons/bi";
// import { useRouter } from "next/navigation";
import matter from "gray-matter";
import { getAllPostesMetaData, getPost } from "@/lib";
// import { useRouter } from "next/navigation";
export const generateStaticParams = () => {
  const posts = getAllPostesMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPost(slug);

  return (
    <div>
      <div className="mb-10"></div>
      <div className="mb-4">
        <h1 className="text-xl font-bold ">{post.title}</h1>
        {/* <h2 className="text-2xl my-1 font-bold ">{post.subtitle}</h2> */}
        <p className=" font-light  mt-1 text-xs">Date: {post.date}</p>
      </div>
      <article className="prose lg:prose-lg prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
