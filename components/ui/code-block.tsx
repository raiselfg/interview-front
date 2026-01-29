'use client';
import { memo, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// todo: check if languages is needed to be registered like this

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);

type CodeBlockProps = {
  language: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = memo(function CodeBlock({
  language,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabsExist = tabs.length > 0;

  const activeCode = tabsExist ? tabs[activeTab]?.code : code;
  const activeLanguage = tabsExist ? tabs[activeTab]?.language || language : language;
  const activeHighlightLines = tabsExist ? tabs[activeTab]?.highlightLines || [] : highlightLines;

  return (
    <div className="relative w-full rounded-lg bg-black p-4 font-mono text-sm">
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex  overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-2! text-xs transition-colors font-sans ${
                  activeTab === index ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={nord}
        customStyle={{
          margin: 0,
          padding: 0,
          background: 'transparent',
          fontSize: '0.875rem',
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? 'rgba(255,255,255,0.1)'
              : 'transparent',
            display: 'block',
            width: '100%',
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
});
