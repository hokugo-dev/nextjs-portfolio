'use client';
import { Suspense, useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';

import { Job } from '@/types';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/snow.gltf');
  const ref = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (ref?.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={gltf.scene} ref={ref} />;
};

const jobList: Job[] = [{
  id: 1,
  name: '建築業向け基幹システム開発・保守 perl',
  summary: '自社開発webパッケージソフト（顧客・工事管理）の開発・保守',
  term: '約8年',
  phase: '要件定義・基本設計・詳細設計・製造・単体テスト・結合テスト',
  architecture: 'perl, html, Javascript, jQuery, postgresql',
}, {
  id: 2,
  name: '契約書管理システム開発 Vue.js, Django',
  summary: 'web上で契約締結・契約書管理を行うシステムの新規開発',
  term: '5ヶ月',
  phase: '製造・単体テスト',
  architecture: 'Python, Django, Typescript, mysql, Docker, Git',
}, {
  id: 3,
  name: '士業向けシステム開発 Vue.js, angular.js',
  summary: '法律事務所向けの顧客・案件管理を行うwebシステムの機能追加',
  term: '2年9ヶ月',
  phase: '製造・単体テスト',
  architecture: 'Node.js, angular.js, Vue.js, mysql, Sequlize, Docker, Git',
}];

const defaultOpen: boolean[] = jobList.map(() => false);

export default function Home() {
  const [jobOpenList, setJobOpenList] = useState<boolean[]>(defaultOpen);
  const toggleAccordion = (index: number) => {
    setJobOpenList((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div>
      <main className="container mx-auto item-center">
        <div className="relative h-screen">
          <h1 className="absolute top-0 w-full text-4xl text-center mt-[30px] mb-4 text-blue-900 font-bold">ポートフォリオをご覧いただきありがとうございます</h1>
          <div className="absolute top-0 w-full mt-[50px]">
            <div className="mx-auto w-[1200px] h-[675px]">
              <Canvas camera={{ position: [-8, 3.5, 3], fov: 40 }}>
                <directionalLight position={[-5, 7, 6]} intensity={3} />
                <Suspense fallback={null}>
                  <Model/>
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className="absolute w-full bottom-[80px] mt-[50px] px-8">
            <ul className="flex justfy-between text-xl text-semibold mx-2">
              <li className="flex-auto text-center cursor-pointer hover:text-gray-500"><a href="#profile">プロフィール</a></li>
              <li className="flex-auto text-center cursor-pointer hover:text-gray-500"><a href="#skill">スキル・資格</a></li>
              <li className="flex-auto text-center cursor-pointer hover:text-gray-500"><a href="#job">主な参画案件</a></li>
            </ul>
          </div>
        </div>

        <div id="profile" className="h-screen p-1">
          <h2 className="text-2xl m-8 pl-4 border-l-8 border-blue-900">プロフィール</h2>
          <div className="ml-8 p-4">
            <p>2012年にシステム開発企業に入社後、自社パッケージ製品のweb開発案件に長く携わってまいりました。
              <br />
              要件定義から顧客対応まで幅広い業務を経験する中で、実践的なweb開発のスキルを身につけました。</p>
            <p>2019年に地元札幌にUターンし、フリーランスとして主にフルリモートの案件に参画しております。</p>
          </div>
          <h3 className="text-xl mt-10 mb-4 mx-8 pl-4">このサイトについて</h3>
          <div className="ml-8 p-4">
            <p>Typescript, Next.js, tailwindcss</p>
            <p>Docker, Vercel</p>
            <p>Blender</p>
            <p><a className="font-medium text-blue-600 hover:underline" href="https://github.com/hokugo-dev/nextjs-portfolio" target="_blank">githubはこちら</a></p>
          </div>
        </div>

        <div id="skill" className="h-screen p-1">
          <h2 className="text-2xl m-8 pl-4 border-l-8 border-blue-900">スキル</h2>
          <div className="flex gap-[50px] px-8">
            <div className="flex-auto boder-gray-400 bg-gray-100 rounded-lg shadow-lg p-4">
              <h3 className="text-xl">サーバサイド</h3>
              <div className="p-1">
                <p>■■■ python, Django</p>
                <p>■■□ Node.js</p>
                <p>■■□ perl</p>
                <p>■□□ java</p>
              </div>
            </div>
            <div className="flex-auto boder-gray-400 bg-gray-100 rounded-lg shadow-lg p-4">
              <h3 className="text-xl">フロントエンド</h3>
              <div className="p-1">
                <p>■■■ Javascript</p>
                <p>■■□ HTML, CSS</p>
                <p>■□□ Typescript</p>
                <p>■□□ Vue.js</p>
                <p>■□□ React, Next.js</p>
                <p>■□□ Svelte</p>
                <p>■□□ angular.js</p>
              </div>
            </div>
          </div>
          <h3 className="text-xl mt-10 mb-4 mx-8 pl-8">保有資格</h3>
          <div className="ml-8 p-4">
            <p>2011/06　基本情報技術者</p>
            <p>2017/06　応用情報技術者</p>
            <p>2018/05　Oracle Java Silver SE8</p>
            <p>2018/06　データベーススペシャリスト</p>
            <p>2022/04　Python3エンジニア認定基礎試験</p>
          </div>
        </div>

        <div id="job" className="h-screen p-1">
          <h2 className="text-2xl m-8 pl-4 border-l-8 border-blue-900">主な参画案件</h2>
          <div className="ml-8 p-4">
            {jobList.map((jobObj: Job, index: number) => {
              return <div key={index} className="boder-gray-400 bg-gray-100 rounded-lg p-2 mb-4 shadow-sm cursor-pointer"
                  onClick={() => toggleAccordion(index)}>
                <h3 className="flex justify-between text-xl px-2 mb-2">
                  {jobObj.name}
                  <button>
                    {jobOpenList[index] && (
                      <span className="text-2xl font-gray-900">▲</span>
                    )}
                    {!jobOpenList[index] && (
                      <span className="text-2xl font-gray-900">▼</span>
                    )}
                  </button>
                </h3>
                {jobOpenList[index] && (
                  <div className="px-4 pb-4 text-gray-700">
                    <p>{jobObj.summary}</p>
                    <p>期間：{jobObj.term}</p>
                    <p>担当フェーズ：{jobObj.phase}</p>
                    <p>開発環境等：{jobObj.architecture}</p>
                  </div>
                )}
              </div>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
