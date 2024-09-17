/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */

'use client';

import React, { useState } from 'react';
import { Newspaper, Mail, Linkedin, Github, Twitter, Camera, Twitch, Music, Film, BookOpen, Gitlab, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import OyuneksLink from './components/OyuneksLink';
import ProfilePicture from './components/ProfilePicture';

const blogPosts = [];

export default function PortfolioPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@vehbi.co');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#008080] text-[#000000] font-sans text-sm">
      {/* Left side - About Me */}
      <div className="md:w-1/2 w-full p-4 bg-[#C0C0C0] border-r-4 border-[#000000] overflow-y-auto relative">
        <div className="flex items-center mb-4">
          <ProfilePicture alt="Vehbi Öztomurcuk" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#000080]">Vehbi Öztomurcuk</h1>
            <h2 className="text-md md:text-lg text-[#000080]">Alive human being for 10958 days</h2>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-2 shadow-[2px_2px_#000000] mb-3">
          <p className="mb-2 text-xs leading-relaxed">
            Been crafting personal and corporate products since 2019. Recently started focusing on AI models and prompt engineering. I even edit videos and stream sometimes. Currently <OyuneksLink />.
          </p>
        </div>
        <div className="bg-[#FFFFFF] p-2 shadow-[2px_2px_#000000] mb-3 text-xs">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center mb-2 md:mb-0">
              <Mail className="mr-1" size={12} />
              <span>hello@vehbi.co</span>
              <button onClick={copyEmail} className="ml-2 p-1 bg-[#C0C0C0] rounded">
                {copied ? <Check size={12} /> : <Copy size={12} />}
              </button>
              {copied && <span className="ml-2 text-green-600">Copied!</span>}
            </div>
            <div className="flex gap-2">
              <a href="https://twitter.com/vehbioztomurcuk" target="_blank" rel="noopener noreferrer" className="flex items-center"><Twitter size={16} /></a>
              <a href="https://vsco.co/vehbi-oztomurcuk/" target="_blank" rel="noopener noreferrer" className="flex items-center"><Camera size={16} /></a>
              <a href="https://www.twitch.tv/Lbitter" target="_blank" rel="noopener noreferrer" className="flex items-center"><Twitch size={16} /></a>
              <a href="https://open.spotify.com/playlist/1oZIy4w6Rc4reO2PmftZgU" target="_blank" rel="noopener noreferrer" className="flex items-center"><Music size={16} /></a>
              <a href="https://imdb.com/list/ls022272921/" target="_blank" rel="noopener noreferrer" className="flex items-center"><Film size={16} /></a>
              <a href="https://medium.com/@vehbi.oztomurcuk" target="_blank" rel="noopener noreferrer" className="flex items-center"><BookOpen size={16} /></a>
              <a href="https://github.com/vehbioztomurcuk" target="_blank" rel="noopener noreferrer" className="flex items-center"><Github size={16} /></a>
              <a href="https://gitlab.com/vehbi" target="_blank" rel="noopener noreferrer" className="flex items-center"><Gitlab size={16} /></a>
              <a href="https://linkedin.com/in/vehbi-oztomurcuk-198037172/" target="_blank" rel="noopener noreferrer" className="flex items-center"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-2 shadow-[2px_2px_#000000] mb-3 text-xs">
          <h3 className="font-bold mb-1">prompt?</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-[#FF00FF]">&#9986;</span>
              <span><span className="font-semibold text-blue-600">gpt-3.5-turbo/gpt-4</span>: <a href="https://studybuddy-ai.com/" className="text-blue-500">Study Buddy AI</a> is a neat tool that helps you with math problems, turns your notes into quizzes, and creates personalized study plans. If you're looking to ace that next test, this one's worth checking out.</span>
            </li>
            {/* More AI tools... */}
          </ul>
        </div>
      </div>

      {/* Right side - Blog Posts */}
      <div className="md:w-1/2 w-full p-4 bg-[#008080] text-[#FFFFFF] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#FF00FF]"></h2>
        <ul className="mb-6">
          {blogPosts.map((post) => (
            <li key={post.id} className="mb-3 bg-[#C0C0C0] text-[#000000] p-2 shadow-[2px_2px_#00FF00]">
              <div className="flex items-center">
                <Newspaper className="mr-2" size={16} />
                <div>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-sm font-bold hover:underline cursor-pointer">{post.title}</h3>
                  </Link>
                  <p className="text-xs">{post.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
