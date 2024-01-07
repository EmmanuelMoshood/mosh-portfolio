import React from "react";
import "./styles/skill.css";
import cloud from "../../assets/images/cloud.jpg";

function Skill() {
	return (
		<div className="column">
			<img class="skill__icon" src={cloud} />
			<h1 class="title">Cloud Engineer</h1>
			<p>
				I love building highly available, scalable and cost-efficient
				systems.
			</p>
			<p class="list-title has-text-primary has-text-weight-normal">
				Things I enjoy working on:
			</p>
			<p>
				CI/CD Pipelines, IaC, Serverless Architectures, Microservices,
				Containers
			</p>
			<p class="list-title ">Skills:</p>
			<ul>
				<li>
					<strong>Cloud Platforms:</strong> AWS, Azure, GCP
				</li>
				<li>
					<strong>Containerization:</strong> Docker, Kubernetes, ECS
					Fargate, GKE
				</li>
				<li>
					<strong>IaC:</strong> Terraform, CDK, CloudFormation, ARM,
					Bicep
				</li>
				<li>
					<strong>CI/CD:</strong> CodePipeline, Github Actions, Azure
					DevOps, Jenkins, GitLab,
				</li>
				<li>
					<strong>Monitoring/Logging:</strong> ELK, Datadog, NewRelic,
					Prometheus, Grafana,
				</li>
				<li>
					Ansible, Chef, Git, Linux, PowerShell, Bash, ElasticSearch,
					Redis, Memcache
				</li>
				<li>Serverless Application Development</li>
				<li>Software Development Life Cycle</li>
				<li>SQL and NoSQL Databases</li>
				<li>Networking Technologies</li>
			</ul>
		</div>
	);
}

export default Skill;
