import React from 'react'
import "./docstopic.css"
import Link from 'next/link'

interface Topics {
  TopicName: string
  TopicLogo: string
  Topicurl: string
  subTopic?: boolean  // <-- New optional boolean
}

export default function DocsTopics(props: Topics) {
  return (
    <Link href={`/docs/${props.Topicurl}`}>
      <div className={props.subTopic ? "sub-topic" : "topic"}>
        <div style={{ width: 35, height: 35 }}>
          <img width="100%" height="100%" src={props.TopicLogo} alt={props.TopicName} />
        </div>
        <h4>{props.TopicName}</h4>
      </div>
    </Link>
  )
}
