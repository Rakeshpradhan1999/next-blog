import Link from "next/link";
import React from "react";

import { getAllPostesMetaData } from "@/lib";

const Home = () => {
  const allPosts = getAllPostesMetaData();
  return (
    <div className="grid grid-cols-2 gap-6">
      {allPosts.map((post, i) => (
        <div key={i} className="bg-white bg-opacity-10 rounded-lg p-4">
          <Link href={`posts/${post.slug}`}>
            <p className="text-sm">{post.title}</p>
            <p className="text-sm font-bold my-2">{post.subtitle}</p>
            <p className="text-xs mt-4">{post.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
