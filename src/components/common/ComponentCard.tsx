import React from 'react';

type ComponentCardProps = {
  title: string;
  children: React.ReactNode;
  desc?: string; 
};

export default function ComponentCard({ title, children }: ComponentCardProps) {
  return (
    <div className="rounded border p-4 shadow">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
