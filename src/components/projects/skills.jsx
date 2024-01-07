import React from 'react'
import "./styles/skills.css"

function Skills() {
  return (
    <div>skills
      <div class="columns is-centered">
              <div class="column">
                <figure class="image"><img class="is-skill-icon" src="img/icons/designer.svg" /></figure>
                <h1 class="title is-size-4 is-spaced">Cloud Engineer</h1>
                <p>I love building highly available, scalable and cost-efficient systems.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Things I enjoy working on:</p>
                <p> CI/CD Pipelines, IaC, Serverless Architectures, Microservices, Containers </p>
                <p class="list-title has-text-primary has-text-weight-normal">Skills:</p>
                <ul>
                  <li><strong>Cloud Platforms:</strong> AWS, Azure, GCP</li>
                  <li><strong>Containerization:</strong> Docker, Kubernetes, ECS Fargate, GKE </li>
                  <li><strong>IaC:</strong> Terraform, CDK, CloudFormation, ARM, Bicep</li>
                  <li><strong>CI/CD:</strong> CodePipeline, Github Actions, Azure DevOps, Jenkins, Bamboo, GitLab, Netlify</li>
                  <li><strong>Monitoring/Logging:</strong> ELK, Dynatrace, Datadog, NewRelic, Prometheus, Grafana, Splunk</li>
                  <li>Ansible, Chef, Git, Linux, PowerShell, Bash, ElasticSearch, Redis, Memcache</li>
                  <li>Serverless Application Development</li>
                  <li>Software Development Life Cycle</li>
                  <li>SQL and NoSQL Databases</li>
                  <li>Networking Technologies</li>
                  <li></li>
                </ul>
              </div>
              <div class="column">
                <figure class="image"><img class="is-skill-icon" src="img/icons/frontend.svg" /></figure>
                <h1 class="title is-size-4 is-spaced">Software Developer</h1>
                <p>I like to code things from scratch, and enjoy bringing ideas to life with code.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Programming Languages:</p>
                <p> Python, Javascript, Typescript, C, C++, C#</p>
                <p class="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>VS Code</li>
                  <li>Codekit</li>
                  <li>Codepen</li>
                  <li>Github</li>
                  <li>Gitlab</li>
                  <li>Bitbucket</li>
                  <li>Repl.it</li>
                  <li>Terminal</li>
                </ul>
              </div>
              
            </div>
    </div>
  )
}

export default Skills