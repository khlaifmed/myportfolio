"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Database, Code } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard, ProjectData } from "@/components/ui/project-card";

// First three projects from projects page
const projects: ProjectData[] = [
    {
        id: "ai-email-automation",
        title: "AI-Powered Follow-Up Engine: Automating Email Outreach & Approval",
        description: "A full-stack solution to monitor sent emails, detect non-responses, and generate context-aware, AI-drafted follow-ups for manual review and approval.",
        status: "Completed",
        tags: ["Python", "Node.js", "OpenAI API", "Gmail API", "Microsoft Graph API", "React", "PostgreSQL", "OAuth2"],
        icon: Bot,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "#", // No live demo available
        githubHref: "#" // Private repository
    },
    {
        id: "bigquery-glue-etl",
        title: "Scalable Data Ingestion: AWS Glue ETL for BigQuery to S3 Incremental Loads",
        description: "Engineered an ETL pipeline using AWS Glue to fetch analytical data incrementally from Google BigQuery, partition the data, and store it on S3 in Parquet/CSV format.",
        status: "Completed",
        tags: ["AWS Glue", "PySpark", "S3", "Google BigQuery", "AWS Glue Crawler", "ETL"],
        icon: Database,
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        borderColor: "border-yellow-400/20",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "#", // No live demo available
        githubHref: "#" // Private repository
    },
    {
        id: "academic-sdlc-guidance",
        title: "SDLC Mastery: Full-Stack Engineering & Academic Project Delivery",
        description: "Guided an academic project through all phases of the SDLC (Requirement Analysis, Design, Implementation) to ensure adherence to software engineering best practices and academic standards.",
        status: "Completed",
        tags: ["Java", "Full Stack Development", "Software Architecture", "Project Management", "SDLC", "Software Engineering"],
        icon: Code,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "https://www.freelancer.com/projects/java/Full-Stack-Software-Development-39617463",
        githubHref: "#" // Private repository
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        My Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        A selection of my work that demonstrates my skills in software engineering, from concept to deployment.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Updated Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}