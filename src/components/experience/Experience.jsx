import React from 'react';
import TimelineItem from '../common/TimelineItem';

const Experience = () => {
  const experienceData = [
    {
      title: "Machine Learning Intern",
      subtitle: "Lender Toolkit (LTK) • San Francisco, USA",
      period: "May 2025 – Present",
      description: [
        "Built and shipped a mortgage-processing agent orchestrating multi-step tasks with LangChain, LangGraph, and LangSmith tracing; reduced p95 latency from 5.1s to 2.1s.",
        "Implemented an end-to-end guideline RAG pipeline with Firecrawl ingestion, Pinecone vector search, and dual rerankers (Cohere, AWS Bedrock) to boost retrieval quality.",
        "Fine-tuned Qwen-16B via QLoRA for internal RAG evaluations, lifting nDCG@10 from 0.61 to 0.76 and cutting hallucination rates by 21%.",
        "Exposed OCR and web search tools through FastMCP, secured with AWS Cognito, and deployed the services on AWS ECS Fargate."
      ]
    },
    {
      title: "Engineer-II, Software Development",
      subtitle: "Accelya • Mumbai, India",
      period: "July 2022 – July 2024",
      description: [
        "Delivered a Spring Boot-based nested Maven integration application from inception through production rollout.",
        "Designed new features and maintained microservices including admin-service, cargo-service, and user-defined REST APIs.",
        "Implemented real-time data pipelines with Apache Spark, Kafka, and Elasticsearch to power cargo price prediction.",
        "Performed model validation and tuning with ARIMA and LSTM, improving forecasting accuracy by 30%."
      ]
    },
    {
      title: "Full Stack Software Developer",
      subtitle: "Tata Consultancy Services • Mumbai, India",
      period: "Aug 2020 – Aug 2022",
      description: [
        "Led single sign-on, password-less authentication across 100+ products using OIDC, magic links/OTP, and audit logging.",
        "Built microservices for IRIS BPMN and launched 40+ APIs in Java/Spring Boot with Kafka-backed CI/CD pipelines.",
        "Reduced latency 25% via Redis caching, WebSockets, and request coalescing while introducing gRPC with mtTLS and deadline management."
      ]
    },
    {
      title: "Software Developer Intern",
      subtitle: "Indian Institute of Tropical Meteorology • Pune, India",
      period: "Jun 2019 – Apr 2020",
      description: [
        "Developed BN-CNN/DeepLab segmentation models to enhance rainfall nowcasting and target monsoon extremes.",
        "Trained models on 17 years of Pratyush supercomputer data with distributed loaders and checkpointed runs.",
        "Engineered the production pipeline with RMSE/MAE/SISM metrics, bias maps, and optimized GPU utilization."
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="relative">
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;