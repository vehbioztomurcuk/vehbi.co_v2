// app/blog/[id]/page.js
import React from 'react';
import Link from 'next/link';

const blogPosts = [
  { id: 1, title: "My Journey in Frontend Development", date: "2024-08-01", content: "This is the content of the first blog post..." },
  { id: 2, title: "Reflections on Digital Product Design", date: "2024-08-15", content: "This is the content of the second blog post..." },
  { id: 3, title: "The Intersection of Technology and Creativity", date: "2024-08-30", content: "This is the content of the third blog post..." },
];

export default function BlogPost({ params }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose">{post.content}</div>
    </div>
  );
}