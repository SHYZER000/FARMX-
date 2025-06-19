'use client';


import DocsTopics from "./components/docstopic";
import TopicGroup from "./components/topicgroup";
import "./layout.css"

import { useState } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <nav id="navbar">
                <div id="nav-button" onClick={() => setSidebarOpen(prev => !prev)}><img src={"/bar.png"} /></div>
                <div id="farmx-docs"><img  style={{imageRendering:"pixelated"}} src={"/docs.png"}/><h1>FARMX [<span style={{color:"red"}}>Docs</span>]</h1></div>
            </nav>

            <div className="layout-wrapper">
                <aside id="aside-bar" style={{overflow:"scroll"}} className={sidebarOpen ? '' : 'hidden'} >
                    <div id="box" style={{ height: 80, border:"2px solid black" }}></div>
                    <ul style={{width:"90%" , display:"flex" , flexDirection:"column" , gap:10}}>
                        <DocsTopics TopicName="Introduction" TopicLogo="/Introduction-logo.png" Topicurl="Introduction"/>
                        <DocsTopics TopicName="Getting-Started" TopicLogo="/getting-started.png" Topicurl="Getting-Started"/>
                        <DocsTopics TopicName="Understanding Land" TopicLogo="/land.png" Topicurl="Understanding-Land" />
                    <TopicGroup 
                        parent={{ TopicName: "Gameplay", TopicLogo: "/gameplay.png", Topicurl: "Gameplay" }} 
                        children={[{ TopicLogo: "/arrow.png", TopicName: "Primary", Topicurl: "Gameplay/Primary" } , { TopicLogo: "/arrow.png", TopicName: "Secondary", Topicurl: "Gameplay/Secondary" }]} 
                    />

                    <TopicGroup parent={{TopicName:"Buildings" , TopicLogo:"/building.png" , Topicurl:"Buildings"}}  children={[{ TopicLogo: "/city.png", TopicName: "City", Topicurl: "Buildings/City" } , { TopicLogo: "/farm.png", TopicName: "Farm", Topicurl: "Buildings/Farm" }]} />
                           <DocsTopics TopicName="Craftables" TopicLogo="/craftables.png" Topicurl="Craftables" />
                            <DocsTopics TopicName="$FMX" TopicLogo="/farmx-token.png" Topicurl="FMX" />
                    </ul>
                </aside>

                <main id="main-content" >
                    {children}
                </main>
            </div>
        </>
    );
}
