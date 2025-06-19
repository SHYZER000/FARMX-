import React, { useState } from 'react';
import DocsTopics from './docstopic'; // your DocsTopics component
import './docstopic.css'; // contains animation styles below

interface Topic {
  TopicName: string;
  TopicLogo: string;
  Topicurl: string;
}

interface TopicGroupProps {
  parent: Topic;
  children?: Topic[];
}

export default function TopicGroup({ parent, children = [] }: TopicGroupProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Parent Card */}
      <div onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
        <DocsTopics {...parent} />
      </div>

      {/* Subtopics Container with Animation */}
      <div className={`subtopic-container ${expanded ? 'expanded' : ''}`}>
        {children.map((child, index) => (
          <DocsTopics key={index} {...child} subTopic />
        ))}
      </div>
    </div>
  );
}
