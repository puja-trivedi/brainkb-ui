'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Load react-d3-tree only on the client (it touches window/document)
const Tree = dynamic(() => import('react-d3-tree').then(m => m.Tree), { ssr: false });

export default function TreeDemo() {
  const [data, setData] = useState(null);

  // Center the tree a bit
  const [translate, setTranslate] = useState<{x:number;y:number}>({ x: 200, y: 200 });

  // If your container width is known you can compute this; here we just set something reasonable.
  useEffect(() => setTranslate({ x: 300, y: 100 }), []);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchTreeData = async () => {
      try {
        const res = await fetch('/api/hmba-taxonomy-data', {
          method: "GET",
          signal: controller.signal,
        });

        if (!res.ok) {
          console.error("Failed to fetch tree data:", await res.text());
          return;
        }

        const data = await res.json();
        setData(data);
      } catch (err: any) {
        if (err?.name === "AbortError") return;
        console.error("Error loading tree data:", err);
      }
    };

    fetchTreeData();
    return () => controller.abort();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ width: '100%', height: 600, border: '1px solid #ddd' }}>
      <Tree
        data={data}
        translate={translate}
        orientation="horizontal"   // try "vertical" too
        collapsible
        zoom={0.8}
      />
    </div>
  );
}
