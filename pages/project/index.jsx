import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsBoxArrowUpRight,
  BsChevronDown,
  BsPlayCircleFill,
  BsX,
} from "react-icons/bs";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const projectSections = [
  {
    id: "project1",
    title: "Website Development and Deployment",
    step: "PROJECT 1",
    description:
      "A website project demonstrating my skills in web development, implementation, and deployment.",
    items: [
      {
        title: "Website Project",
        content: [
          [
            "Project Overview",
            "Explore my website project, its features, and implementation.",
          ],
          ["Source Code", "View the project source code and files on GitHub."],
          [
            "Live Website",
            "Visit the deployed website to explore the working project.",
          ],
        ],
        links: [
          {
            label: "View Website",
            url: "https://sneakdup-eight.vercel.app/shop.php?fbclid=IwY2xjawVGGbRleHRuA2FlbQIxMABwZG9mBWJyaWQRMVFDYkEybnQ4WXEwaHpCd0VzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEezEmZ6412QumzS8fuoJDePv7A8tpVnPB2bPVnHaPE391lIvNAwGmmDEjGiOI_aem_2OVytcoUkbFWF3NLRvJ0WA",
          },
          {
            label: "GitHub Repository",
            url: "https://github.com/abdulrahmanalsaafinwork-dot/Sneakdup",
          },
        ],
      },
    ],
  },
  {
    id: "project2",
    title: "Excel Data Cleaning and Analysis",
    step: "PROJECT 2",
    description:
      "An Excel project showcasing data organization, cleaning, analysis, charts, findings, and recommendations.",
    items: [
      {
        title: "Professional Sales Inventory Analyst",
        content: [
          [
            "Project Overview",
            "Explore my Excel workbook containing the sales and inventory analysis.",
          ],
          [
            "Excel Workbook",
            "Open the workbook to review the dataset, analysis, charts, findings, and recommendations.",
          ],
        ],
        links: [
          {
            label: "View Excel",
            url: "https://1drv.ms/x/c/389AAAB49D11C2EE/IQCnICWUZUXdS5mwxQfhSiAtAQe_yswd8smMt9sZIgcaG3M?e=uNxE31",
          },
          {
            label: "Download Excel",
            url: "/Professional_Sales_Inventory_Analyst.xlsx",
            download: true,
          },
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Specialization — Equifax Case Study",
    step: "PROJECT 3",
    description:
      "A defensive cybersecurity case study examining the 2017 Equifax data breach, its vulnerabilities, causes, risks, and preventive security practices.",

    items: [
      {
        title: "1. Vulnerability Identification",
        content: [
          [
            "Case Background",
            "In 2017, Equifax, a major credit-reporting company, experienced a large-scale data breach that exposed sensitive personal and financial information belonging to millions of people.",
          ],
          [
            "Identified Vulnerability",
            "The primary vulnerability was a known security weakness in Apache Struts, a software framework used by an Equifax web application. A security patch was available, but the affected system remained unpatched.",
          ],
          [
            "Additional Weaknesses",
            "The incident also revealed inadequate verification of required security patches and poor protection of certain administrative credentials.",
          ],
          [
            "Key Lesson",
            "Identifying vulnerabilities is not enough. Organizations must ensure that security updates are successfully installed and that security controls operate as intended.",
          ],
        ],
      },

      {
        title: "2. How the Vulnerability Occurred",
        content: [
          [
            "Root Cause",
            "A known vulnerability in Apache Struts was not successfully remediated, leaving the affected web application exposed to attack.",
          ],
          [
            "Failed Patch Management",
            "Equifax had been notified about the Apache Struts vulnerability and instructed its personnel to patch affected systems. However, the company did not properly verify that the patch had been applied to the vulnerable system.",
          ],
          [
            "Contributing Factors",
            "Weak patch-management procedures, insufficient verification, and incomplete visibility into installed software can allow known vulnerabilities to remain exploitable.",
          ],
          [
            "Key Lesson",
            "IT teams should maintain software inventories, track security updates, verify successful installation, and regularly check systems for unresolved vulnerabilities.",
          ],
        ],
      },

      {
        title: "3. Risks and Impacts",
        content: [
          [
            "Scale of the Breach",
            "According to the Federal Trade Commission (FTC), the breach affected approximately 147 million people.",
          ],
          [
            "Identity Theft",
            "Stolen personal information can be used for identity theft and other fraudulent activities.",
          ],
          [
            "Financial Fraud",
            "Exposed financial or payment-card information may be misused for unauthorized transactions and fraud.",
          ],
          [
            "Privacy Loss",
            "Sensitive personal information can be exposed to unauthorized parties, affecting the privacy and security of individuals.",
          ],
          [
            "Reputational Damage",
            "Customers may lose confidence in an organization that fails to protect their personal information.",
          ],
          [
            "Legal and Financial Consequences",
            "Organizations may face investigations, penalties, lawsuits, and expenses related to remediation and recovery.",
          ],
          [
            "Exposed Information",
            "The exposed information included names, dates of birth, Social Security numbers, and payment-card information.",
          ],
        ],
      },

      {
        title: "4. How Developers Can Prevent It",
        content: [
          [
            "Apply Security Patches Promptly",
            "Address known vulnerabilities within an appropriate risk-based timeframe to reduce opportunities for exploitation.",
          ],
          [
            "Verify Patches",
            "Confirm that updates have actually been installed on every affected system instead of relying only on notifications or reports.",
          ],
          [
            "Maintain Software Inventories",
            "Keep an accurate record of applications, frameworks, libraries, and versions running throughout the organization.",
          ],
          [
            "Protect Credentials",
            "Never store administrative passwords or other sensitive credentials in plain text. Use appropriate secure storage and access controls.",
          ],
          [
            "Apply Least Privilege",
            "Give user accounts and applications only the permissions they need to perform their tasks.",
          ],
          [
            "Monitor Systems",
            "Review security logs and network activity to identify unusual behavior and potential intrusions.",
          ],
          [
            "Test Security Controls",
            "Perform vulnerability scanning and security assessments regularly to identify weaknesses before attackers can exploit them.",
          ],
        ],
      },

      {
        title: "5. Security Best Practices",
        content: [
          [
            "Regular Patch Management",
            "Fix known software vulnerabilities through a documented process for evaluating, applying, and verifying updates.",
          ],
          [
            "Vulnerability Scanning",
            "Identify weaknesses in applications, systems, and infrastructure through regular security scans.",
          ],
          [
            "Security Testing",
            "Detect security problems during development and before deploying applications into production.",
          ],
          [
            "Credential Protection",
            "Protect passwords, keys, tokens, and administrative credentials against unauthorized access.",
          ],
          [
            "Least-Privilege Access",
            "Limit the permissions granted to users and applications to reduce the impact of compromised accounts.",
          ],
          [
            "Network Segmentation",
            "Separate network resources to reduce an attacker's ability to move through the network after an initial compromise.",
          ],
          [
            "Security Monitoring",
            "Monitor systems for suspicious activity, unauthorized access, and potential intrusions.",
          ],
          [
            "Incident Response Planning",
            "Establish a clear process for identifying, containing, investigating, and recovering from security incidents.",
          ],
          [
            "Regular Security Audits",
            "Verify that security policies and controls are operating effectively and address any identified gaps.",
          ],
          [
            "Security Awareness Training",
            "Help employees recognize security risks and understand their responsibilities in protecting organizational information.",
          ],
        ],
      },

      {
        title: "6. Conclusion and Key Lessons",
        content: [
          [
            "Main Finding",
            "The 2017 Equifax data breach demonstrates how a known software vulnerability can lead to a major cybersecurity incident when patch management and security verification are inadequate.",
          ],
          [
            "Lessons for IT Professionals",
            "Timely patching, vulnerability management, credential protection, least-privilege access, security monitoring, and incident response are essential components of defensive cybersecurity.",
          ],
          [
            "Developer Responsibility",
            "Security should be considered throughout the software and system lifecycle rather than only after an incident occurs.",
          ],
          [
            "Overall Conclusion",
            "Organizations must combine secure development practices, reliable maintenance procedures, effective monitoring, and regular verification to reduce the likelihood and impact of similar incidents.",
          ],
        ],
      },
    ],
  },
  {
    id: "step16",
    title: "Project Documentation",
    step: "STEP 16",
    description:
      "Documentation for the major project, including system design, development, testing, and Hostinger deployment.",
    items: [
      {
        title: "Requirements and Problem Statement",
        content: [
          [
            "Purpose",
            "Describe the problem, target users, and purpose of the system.",
          ],
          [
            "Requirements",
            "Document functional and non-functional requirements.",
          ],
        ],
      },
      {
        title: "System Analysis and Design",
        content: [
          ["Analysis", "Explain the existing system and proposed solution."],
          [
            "Design",
            "Include use cases, architecture, UML diagrams, ERD, and interface designs where applicable.",
          ],
        ],
      },
      {
        title: "Development and Technologies",
        content: [
          [
            "Development",
            "Document the implementation and major system features.",
          ],
          [
            "Technologies",
            "List the actual languages, frameworks, databases, and tools used in the project.",
          ],
        ],
      },
      {
        title: "Testing and Corrections",
        content: [
          [
            "Testing",
            "Record test cases, expected results, actual results, and test outcomes.",
          ],
          ["Corrections", "Document discovered bugs and the fixes applied."],
        ],
      },
      {
        title: "Deployment on Hostinger",
        content: [
          [
            "Hosting",
            "Document the hosting environment and deployment process.",
          ],
          [
            "Configuration",
            "Record relevant installation, configuration, and maintenance information without exposing credentials.",
          ],
        ],
      },
    ],
  },
  {
    id: "step17",
    title: "Problem-Solving Portfolio",
    step: "STEP 17",
    description:
      "Five IT troubleshooting cases demonstrating systematic diagnosis, solutions, and lessons learned across networking, computer performance, web applications, peripherals, and hardware.",

    items: [
      {
        title: "Case Study 1 — Computer Cannot Connect to Wi-Fi",
        content: [
          [
            "Problem",
            "The computer cannot connect to the available Wi-Fi network, or it connects but cannot access the internet.",
          ],
          [
            "Possible Causes",
            "The Wi-Fi adapter may be disabled, the network driver may be outdated, IP or DNS settings may be incorrect, the router may have a problem, or the wireless signal may be weak.",
          ],
          [
            "Diagnostic Procedure",
            "Check whether Wi-Fi is enabled and the correct network is selected. Test other devices on the same network, restart the computer or router if appropriate, inspect the adapter in Device Manager, and check IP configuration and connectivity.",
          ],
          [
            "Solution",
            "Enable the adapter, reconnect to the correct network, restart the router if necessary, update or reinstall the network driver, and correct IP or DNS settings when required.",
          ],
          [
            "Lesson Learned",
            "Determine whether the problem affects one computer or the entire network before changing settings. This helps identify whether the cause is local or network-related.",
          ],
        ],
      },

      {
        title: "Case Study 2 — Computer Is Running Very Slowly",
        content: [
          [
            "Problem",
            "The computer takes a long time to start applications, responds slowly, or becomes unresponsive during normal use.",
          ],
          [
            "Possible Causes",
            "Too many startup applications, excessive background processes, insufficient RAM, low storage space, malware, overheating, or a failing storage drive.",
          ],
          [
            "Diagnostic Procedure",
            "Check CPU, memory, disk, and network usage in Task Manager. Review startup applications, inspect available storage, check cooling if overheating is suspected, run a trusted security scan, and check storage-drive health.",
          ],
          [
            "Solution",
            "Disable unnecessary startup programs, close unneeded processes, free storage space, remove unwanted software, update the operating system and drivers, improve cooling if needed, and replace an unhealthy drive when diagnostics confirm failure.",
          ],
          [
            "Lesson Learned",
            "Use resource monitoring and diagnostic evidence instead of immediately assuming that the computer needs more RAM.",
          ],
        ],
      },

      {
        title: "Case Study 3 — Website or Web Application Will Not Load",
        content: [
          [
            "Problem",
            "A website or locally developed web application does not load correctly, displays an error, or shows a blank page.",
          ],
          [
            "Possible Causes",
            "The web server may not be running, project configuration or file paths may be incorrect, the database may be unavailable, a port may be conflicting, application code may contain errors, or browser cache may cause issues.",
          ],
          [
            "Diagnostic Procedure",
            "Read the browser error message, verify that the web server is running, inspect terminal and server logs, check the URL and port, test database connectivity when applicable, and inspect browser console and network errors.",
          ],
          [
            "Solution",
            "Start the required server, correct configuration or file paths, resolve database connection problems, address port conflicts, fix the identified programming error, and clear cached data only when evidence indicates a browser-side issue.",
          ],
          [
            "Lesson Learned",
            "Error messages and logs provide useful diagnostic evidence. Understand the cause before changing code to avoid introducing additional problems.",
          ],
        ],
      },

      {
        title: "Case Study 4 — Printer Is Not Printing",
        content: [
          [
            "Problem",
            "A computer sends a document to a printer, but the printer does not print or remains stuck in the print queue.",
          ],
          [
            "Possible Causes",
            "The printer may be offline or powered off, the wrong printer may be selected, paper or ink may be unavailable, print jobs may be stuck, the driver may be faulty, or the network connection may have failed.",
          ],
          [
            "Diagnostic Procedure",
            "Check power, cables, paper, and printer status. Confirm the selected printer, inspect the print queue, print a test page, check the driver and device status, and verify network communication for network printers.",
          ],
          [
            "Solution",
            "Restore the printer connection, correct paper or consumable problems, cancel stuck jobs, restart the print service when appropriate, update or reinstall the correct driver, and reconnect the printer if necessary.",
          ],
          [
            "Lesson Learned",
            "Printing problems may involve hardware, software, or networking. Check simple physical causes before moving on to driver and operating-system troubleshooting.",
          ],
        ],
      },

      {
        title: "Case Study 5 — Laptop Shows Screen Flickering",
        content: [
          [
            "Problem",
            "A laptop display repeatedly flickers, changes color, briefly goes black, or returns to normal after a few seconds.",
          ],
          [
            "Possible Causes",
            "A graphics driver problem, loose or damaged display cable, faulty display panel, incorrect refresh-rate settings, overheating graphics hardware, or a software conflict.",
          ],
          [
            "Diagnostic Procedure",
            "Observe whether flickering occurs before Windows loads or only after login. Connect an external monitor, update or roll back the graphics driver if appropriate, check display settings, test in Safe Mode when useful, and arrange qualified hardware inspection if necessary.",
          ],
          [
            "Solution",
            "Correct display settings, update or roll back the graphics driver when appropriate, resolve software conflicts, and seek hardware inspection if the issue continues. A damaged cable or panel may require repair or replacement.",
          ],
          [
            "Lesson Learned",
            "Testing with an external monitor and checking when flickering occurs can help distinguish software problems from hardware faults.",
          ],
        ],
      },
    ],
  },
  {
    id: "step19",
    title: "AI Literacy Evidence",
    step: "STEP 19",
    description:
      "Evidence of responsible AI use, including assistance received, verification, and lessons learned.",
    items: [
      {
        title: "AI Usage Log",
        content: [
          [
            "Purpose",
            "This document records how AI tools supported my portfolio development and academic projects. I used AI for brainstorming, explanations, writing and paraphrasing, coding assistance, data-analysis explanations, troubleshooting, and document preparation. I remained responsible for checking the results, testing code, following project requirements, and deciding which outputs were appropriate to use.",
          ],
          [
            "September 22–24, 2026",
            "Data analysis project: I used AI to explain spreadsheet statistics, including mean, median, standard deviation, technician averages, and the relationship between resolution time and customer satisfaction. I compared the explanations and calculations with the Excel data and corrected values when they did not match the source file.",
          ],
          [
            "September 23–24, 2026",
            "Research and project documentation: I used AI to expand and improve the introduction for a web-based reservation system, including chatbot support and income/service reports. I reviewed the wording to ensure it reflected the intended system features and research purpose.",
          ],
          [
            "September 27, 2026",
            "Game development assignments: I used AI to help draft essays based on videos about game design, user interface design, and sound design. I reviewed the drafts for relevance to each video topic and adjusted the writing to suit the assignment.",
          ],
          [
            "October 8–10, 2026",
            "Website development and troubleshooting: I used AI for help understanding project files, package.json and npm errors, running the project, and locating the favicon setting. I checked the actual project folder and code, followed the instructions in the development environment, and verified changes by running or refreshing the website.",
          ],
          [
            "October 9–10, 2026",
            "Portfolio writing and visual customization: I used AI to paraphrase professional summaries, improve grammar, and guide changes to the portfolio name and browser-tab logo. I checked that the wording represented my skills and that the suggested file paths and code matched my project.",
          ],
          [
            "June 29, 2026",
            "Computer security coursework: I used AI to help answer computer-security pretest questions and shorten essay responses. I reviewed the answers against the questions and kept the responses concise for the assignment.",
          ],
        ],
      },
      {
        title: "How AI Helped",
        content: [
          [
            "What did AI help me accomplish?",
            "AI helped me organize ideas, understand technical concepts, improve written explanations, and prepare clearer academic and portfolio materials. It was useful for interpreting spreadsheet results, drafting research content, troubleshooting website issues, and improving the presentation of my portfolio. It also helped me get started when I was unsure how to approach a task.",
          ],
        ],
      },
      {
        title: "Verification and Limitations",
        content: [
          [
            "What did I personally verify?",
            "I checked data-analysis explanations against the original spreadsheet and reviewed whether the results matched the data. For coding tasks, I inspected my project's files and tested changes rather than assuming that generated instructions would work. For writing tasks, I reviewed the wording to make sure it matched my assignment, project features, and personal skills. I also checked visual and formatting changes in the website itself.",
          ],
          [
            "Misunderstood Requirements",
            "AI may misunderstand the project or assignment when the instructions do not include enough detail.",
          ],
          [
            "Code and File Paths",
            "Suggested code or file paths may not match the structure of my actual project and must be checked.",
          ],
          [
            "Data Interpretation",
            "AI-generated explanations of data can contain incorrect interpretations or calculations if they are not compared with the original values.",
          ],
          [
            "Tone and Length",
            "Drafts may be too general, too long, or different from the tone required for the assignment.",
          ],
          [
            "Formatting and Layout",
            "Formatting and layout recommendations may need adjustments after viewing the result in the actual document or website.",
          ],
          [
            "Accuracy",
            "AI cannot automatically confirm that every answer is accurate; I must verify important details before using them.",
          ],
        ],
      },
      {
        title: "Lessons Learned",
        content: [
          [
            "What did I learn from using AI?",
            "I learned that AI is most helpful as a support tool, not a replacement for my own understanding or judgment. Clear instructions and relevant examples lead to more useful responses. I also learned to test code, compare data with its original source, and revise generated writing so it fits the task. Understanding why a solution works is important, especially in programming, data analysis, and cybersecurity.",
          ],
          [
            "Responsible AI Use Statement",
            "I used AI as a learning and productivity tool while remaining responsible for my submissions. I reviewed and adapted AI-assisted content, checked data against source files, and tested coding suggestions in my project where applicable. I did not assume that AI outputs were always correct. My goal was to improve my understanding and workflow while ensuring that the final work met the task requirements.",
          ],
          [
            "Conclusion",
            "My experience using AI has shown me that AI literacy involves asking clear questions, evaluating responses critically, and verifying results before relying on them. AI can make tasks more efficient, but human judgment is still necessary to ensure accuracy, relevance, and quality. I will continue using AI responsibly as a tool to support my learning and development as an Information Technology student.",
          ],
        ],
      },
    ],
  },
  {
    id: "step21",
    title: "Conduct the Mock Interview",
    step: "STEP 21",
    description:
      "A formal mock interview demonstrating communication skills, technical problem-solving, work ethic, and career aspirations as a BSIT student. Review the 12 interview questions and answers below, or watch the recorded mock interview video.",
    items: [
      {
        title: "1. Tell me about yourself.",
        content: [
          ["Question", "Tell me about yourself."],
          [
            "My Answer",
            "Good day, my name is John Marc Besmonte, and I am taking up a Bachelor of Science in Information Technology at Datamex College of Saint Adeline, which I chose because of my interest in technology, programming, and system development..",
          ],
        ],
      },
      {
        title: "2. What are your strongest IT skills and weakest skill?",
        content: [
          [
            "Question",
            "2. What are your strongest IT skills and weakest skill?",
          ],
          [
            "My Answer",
            "My strongest skills include basic web development, programming, and database management, while my weakness is advanced programming, which I am continuously improving through practice.",
          ],
        ],
      },
      {
        title: "3. Tell us about your major project.",
        content: [
          ["Question", "Tell us about your major project."],
          [
            "My Answer",
            "My major project is a web-based e-commerce system for PC components that allows customers to browse products, check compatibility, and place orders.",
          ],
        ],
      },
      {
        title: "4. What was your biggest technical problem?",
        content: [
          ["Question", "What was your biggest technical problem?"],
          [
            "My Answer",
            "My biggest technical challenge was integrating the frontend, backend, and database of our system properly.",
          ],
        ],
      },
      {
        title: "5. How did you solve it?",
        content: [
          ["Question", "How did you solve it?"],
          [
            "My Answer",
            "I solved the problem by reviewing my code, identifying errors, testing features, and consulting technical documentation.",
          ],
        ],
      },
      {
        title: "6. How do you handle deadlines?",
        content: [
          ["Question", "How do you handle deadlines?"],
          [
            "My Answer",
            "I handle deadlines by prioritizing tasks, managing my time effectively, and completing important requirements first.",
          ],
        ],
      },
      {
        title: "7. How do you work with a team?",
        content: [
          ["Question", "How do you work with a team?"],
          [
            "My Answer",
            "I work well with a team by communicating clearly, respecting others' ideas, and fulfilling my responsibilities.",
          ],
        ],
      },
      {
        title: "8. Why should an organization hire you?",
        content: [
          ["Question", "Why should an organization hire you?"],
          [
            "My Answer",
            "You should consider hiring me because I am responsible, adaptable, willing to learn, and committed to improving my skills.",
          ],
        ],
      },
      {
        title: "9. What technology are you currently learning?",
        content: [
          ["Question", "What technology are you currently learning?"],
          [
            "My Answer",
            "I am currently improving my knowledge of web development, programming, database management, and AI tools.",
          ],
        ],
      },
      {
        title: "10. Where do you want to develop professionally?",
        content: [
          ["Question", "Where do you want to develop professionally?"],
          [
            "My Answer",
            "I want to build my career in web development and software engineering and become a skilled IT professional.",
          ],
        ],
      },
    ],
  },
  {
    id: "step23",
    title: "IT Career Development Plan",
    step: "STEP 23",
    description:
      "A detailed career roadmap focused on cybersecurity, including current skills, learning priorities, certifications, professional milestones, and plans for future master's-level study.",
    items: [
      {
        title: "Career Direction",
        content: [
          [
            "Career Goal",
            "My long-term career direction is to specialize in cybersecurity after completing my BSIT degree. I plan to gain practical IT and security experience first, then pursue a master's degree in cybersecurity or a closely related field. My goal is to develop both technical and academic expertise so I can work professionally in cybersecurity and eventually take on more advanced security responsibilities.",
          ],
          [
            "Target Position",
            "Entry-Level Cybersecurity Analyst / Security Operations (SOC) Analyst, with the long-term goal of progressing into advanced cybersecurity roles.",
          ],
          [
            "Target IT Field",
            "Cybersecurity, with particular interest in defensive security, security monitoring, vulnerability management, incident response, and secure systems.",
          ],
        ],
      },
      {
        title: "Current Skills and Areas for Improvement",
        content: [
          [
            "Current Skills",
            "Basic web development, HTML/CSS/JavaScript, programming fundamentals, database concepts, SQL, basic networking concepts, troubleshooting, documentation, data analysis, and experience using AI as a productivity and learning tool.",
          ],
          [
            "Skills to Improve",
            "Networking and TCP/IP, Linux administration, system security, vulnerability assessment, incident response, security monitoring, authentication and access control, scripting/automation, and cybersecurity risk management.",
          ],
        ],
      },
      {
        title: "Technologies and Certifications",
        content: [
          [
            "Technologies to Learn",
            "Linux, Wireshark, Nmap, SIEM platforms, Python for security automation, Git/GitHub, virtual machines, cloud security fundamentals, firewalls, vulnerability-scanning tools, and security logging/monitoring technologies.",
          ],
          [
            "Certifications to Consider",
            "CompTIA Security+ as an initial cybersecurity certification; later consider certifications aligned with experience and career direction, such as CompTIA CySA+, ISC2 certifications, or other recognized security credentials.",
          ],
        ],
      },
      {
        title: "Career Milestones",
        content: [
          [
            "6-Month Goal",
            "Build a stronger cybersecurity foundation by studying networking, Linux, security fundamentals, and defensive security. Complete practical labs and small security exercises, organize a cybersecurity portfolio, and begin preparing for an entry-level security certification.",
          ],
          [
            "1-Year Goal",
            "Obtain or actively pursue an entry-level IT/cybersecurity position or internship, strengthen hands-on security experience, complete relevant projects and labs, and prepare for or begin a recognized cybersecurity certification.",
          ],
          [
            "3-Year Professional Goal",
            "Become an established cybersecurity professional with practical work experience and begin or complete a master's degree in cybersecurity or a related field. Develop deeper expertise in defensive security, incident response, security operations, or another specialized area.",
          ],
        ],
      },
      {
        title: "Personal Development Strategy",
        content: [
          [
            "Development Plan",
            "I will follow a gradual path: strengthen my current BSIT foundation, gain hands-on cybersecurity experience, obtain relevant certifications, build professional experience, and then pursue master's-level study. I will prioritize practical understanding instead of collecting certifications without experience.",
          ],
          [
            "Portfolio Development",
            "My portfolio will be used to document projects, troubleshooting cases, cybersecurity research, and other evidence of my developing skills.",
          ],
        ],
      },
      {
        title: "Career Vision",
        content: [
          [
            "Professional Vision",
            "My ultimate goal is to become a knowledgeable and capable cybersecurity professional who can protect systems, identify security risks, respond to incidents, and continuously improve organizational security.",
          ],
          [
            "Future Education",
            "Pursuing a master's degree in cybersecurity will support my long-term goal of developing deeper technical knowledge, research ability, and professional expertise.",
          ],
        ],
      },
    ],
  },
  {
    id: "step24",
    title: "Final Reflection",
    step: "STEP 24",
    description:
      "A personal reflection on my BSIT journey, the projects I completed, the challenges I overcame, the skills I developed, and my future career goals.",
    items: [
      {
        title: "My Learning Journey",
        content: [
          [
            "Where I Started",
            "Before entering the BSIT program, my understanding of Information Technology was mainly about computers, software, websites, and the use of digital tools. I knew that IT involved programming and computer systems, but I did not fully understand how many areas were connected to the field. Through my studies, I gained a better understanding of how IT professionals plan, develop, test, troubleshoot, and maintain technology-based solutions.",
          ],
          [
            "What I Learned",
            "One of the most important lessons I learned in BSIT is that Information Technology is much broader than programming. I studied topics such as web development, databases, networking, cybersecurity, data analysis, system development, and technical documentation. I also learned that solving technical problems requires patience and a systematic approach. It is important to identify the problem, examine possible causes, test solutions, and check whether the solution works correctly.",
          ],
        ],
      },
      {
        title: "Major Projects and Experiences",
        content: [
          [
            "Project Development",
            "Working on school projects helped me apply what I learned in class. Developing a system or website requires more than writing code; it also involves planning the features, organizing files, designing the interface, managing data, and testing the system. These activities helped me understand how different parts of an application work together. They also taught me the importance of making improvements based on testing and feedback.",
          ],
        ],
      },
      {
        title: "Challenges and Solutions",
        content: [
          [
            "Technical Challenges",
            "One challenge I experienced during my IT studies was troubleshooting errors and finding the cause of technical problems. Sometimes the issue was not immediately obvious, so I had to review my work carefully and try possible solutions step by step. Although this process could be difficult, it taught me not to give up quickly. I learned that errors are part of development and can help me understand a system better when I take time to investigate them.",
          ],
        ],
      },
      {
        title: "Skills and Personal Development",
        content: [
          [
            "Skills Developed",
            "My IT skills have developed throughout the BSIT program. I have improved my understanding of programming concepts, web development, databases, system analysis, and project documentation. I have also become more comfortable learning unfamiliar tools and technologies. In addition, I learned that communication, time management, teamwork, and responsibility are important because technical knowledge alone is not enough to complete a successful project.",
          ],
          [
            "Areas for Improvement",
            "There are still many skills I want to improve. I want to gain more practical experience, strengthen my programming and networking knowledge, and learn more about cybersecurity and system administration. I also want to become better at testing applications, solving complex problems, and explaining technical information clearly. I understand that technology continues to change, so learning must continue even after graduation.",
          ],
        ],
      },
      {
        title: "Future Career Goals",
        content: [
          [
            "Career Direction",
            "The kind of IT professional I want to become is someone who can use technology to solve real problems and develop reliable systems. I am interested in continuing to explore different IT career opportunities while building on the knowledge I gained in BSIT. My goal is to find a career path that matches my strengths and interests, gain practical work experience, and continue improving my technical abilities through projects, training, and professional development.",
          ],
        ],
      },
      {
        title: "My Final Reflection",
        content: [
          [
            "Personal Reflection",
            "I believe my BSIT journey has prepared me to take the next step toward a career in Information Technology. I may not know everything yet, but I have learned how to approach problems, keep learning, and improve my work through practice. I am ready to gain real-world experience, learn from other IT professionals, and continue developing my skills. My education has given me a foundation, and I will build on it through hard work, curiosity, and continuous learning.",
          ],
        ],
      },
    ],
  },

  {
    id: "step25",
    title: "Skills Inventory",
    step: "SKILL LEVELS",
    description:
      "An overview of my current technical skills and self-assessed proficiency levels as a BSIT student.",
    items: [
      {
        title: "View My Technical Skills",
        content: [
          [
            "Overview",
            "This skills inventory presents my current knowledge of programming, web development, databases, cybersecurity, networking, data analysis, development tools, cloud deployment, and AI tools. The proficiency levels represent my current self-assessment and the areas I am continuing to develop.",
          ],
        ],
      },
    ],
  },
];

const Project = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState({});
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const toggleSection = (id) => {
    setActiveSection((current) => (current === id ? null : id));
    setActiveItem({});
  };

  const toggleItem = (sectionId, itemIndex) => {
    setActiveItem((current) => ({
      ...current,
      [sectionId]: current[sectionId] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <div className="project-page relative min-h-screen bg-primary/30 py-28 md:py-32">
      <Circles />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            My BSIT Journey
          </p>

          <h1 className="h1 mb-5">
            Project <span className="text-accent">Portfolio.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-white/70">
            Explore my troubleshooting cases, cybersecurity study, project
            documentation, AI literacy, career plan, and final reflection. Open
            a section and select a topic to explore its contents.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto flex max-w-4xl flex-col gap-4"
        >
          {projectSections.map((section, sectionIndex) => {
            const isOpen = activeSection === section.id;

            return (
              <motion.section
                key={section.id}
                layout
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-accent/60 bg-primary/80"
                    : "border-white/10 bg-primary/40 hover:border-white/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xs font-bold tracking-wider text-accent">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {section.step}
                    </span>

                    <span className="block text-base font-semibold text-white sm:text-lg">
                      {section.title}
                    </span>

                    <span className="mt-1 block text-sm text-white/50">
                      {section.items.length} topics
                    </span>
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0 text-accent"
                  >
                    <BsChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="section-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.22 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
                        <p className="mb-5 text-sm leading-7 text-white/60">
                          {section.description}
                        </p>

                        <div className="flex flex-col gap-3">
                          {section.items.map((item, itemIndex) => {
                            const itemIsOpen =
                              activeItem[section.id] === itemIndex;

                            return (
                              <div
                                key={item.title}
                                className="overflow-hidden rounded-xl border border-white/10 bg-black/10"
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleItem(section.id, itemIndex)
                                  }
                                  aria-expanded={itemIsOpen}
                                  className="flex w-full items-center gap-3 px-4 py-4 text-left"
                                >
                                  <span className="min-w-0 flex-1 text-sm font-medium text-white/90 sm:text-base">
                                    {item.title}
                                  </span>

                                  <motion.span
                                    animate={{
                                      rotate: itemIsOpen ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="shrink-0 text-accent"
                                  >
                                    <BsChevronDown size={16} />
                                  </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                  {itemIsOpen && (
                                    <motion.div
                                      key="item-content"
                                      initial={{
                                        height: 0,
                                        opacity: 0,
                                        y: -6,
                                      }}
                                      animate={{
                                        height: "auto",
                                        opacity: 1,
                                        y: 0,
                                      }}
                                      exit={{
                                        height: 0,
                                        opacity: 0,
                                        y: -6,
                                      }}
                                      transition={{
                                        height: {
                                          duration: 0.28,
                                          ease: "easeInOut",
                                        },
                                        opacity: { duration: 0.2 },
                                        y: { duration: 0.2 },
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4">
                                        {item.content.map(([label, text]) => (
                                          <div
                                            key={label}
                                            className="flex flex-col gap-1 sm:flex-row sm:gap-5"
                                          >
                                            <h4 className="w-full shrink-0 text-xs font-semibold uppercase tracking-wider text-accent sm:w-36">
                                              {label}
                                            </h4>

                                            <p className="min-w-0 flex-1 text-sm leading-6 text-white/65">
                                              {text}
                                            </p>
                                          </div>
                                        ))}

                                        {item.links &&
                                          item.links.length > 0 && (
                                            <div className="mt-2 flex flex-wrap gap-3">
                                              {item.links.map((link) => (
                                                <a
                                                  key={link.label}
                                                  href={link.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  download={
                                                    link.download
                                                      ? true
                                                      : undefined
                                                  }
                                                  className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                                                >
                                                  {link.label}
                                                </a>
                                              ))}
                                            </div>
                                          )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>

                        {/* Download PDF button for Project 3 */}
                        {section.id === "cybersecurity" && (
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/Project_3_Cybersecurity_Equifax_Case_Study.pdf"
                              download
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              Download Full Case Study PDF
                            </a>
                          </div>
                        )}

                        {section.id === "step17" && (
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/Step_17_Problem_Solving_Portfolio_Abdulrahman_Alsaafin.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              View Full Problem-Solving PDF
                            </a>
                          </div>
                        )}
                        {section.id === "step19" && (
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/Step_19_AI_Literacy_Evidence_John Marc M. Besmonte.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              View Full AI Literacy PDF
                            </a>
                          </div>
                        )}

                        {section.id === "step21" && (
                          <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <button
                              type="button"
                              onClick={() => setVideoModalOpen(true)}
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              <BsPlayCircleFill size={18} />
                              Watch Interview
                            </button>
                          </div>
                        )}

                        {section.id === "step23" && (
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/Step_23_IT_Career_Development_Plan_John Marc M. Besmonte.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              View Full Career Plan PDF
                            </a>
                          </div>
                        )}

                        {section.id === "step24" && (
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/Step_24_Final_Reflection_John Marc M. Besmonte.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              View Full Final Reflection PDF
                            </a>
                          </div>
                        )}

                        {section.id === "step25" && (
                          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-primary/60">
                            <div className="border-b border-white/10 px-4 py-4">
                              <h3 className="text-lg font-bold text-white">
                                Technical Skills{" "}
                                <span className="text-accent">Inventory</span>
                              </h3>
                              <p className="mt-1 text-sm leading-6 text-white/50">
                                My current skills and proficiency levels.
                              </p>
                            </div>

                            <div className="overflow-x-auto">
                              <table className="w-full min-w-[560px] text-left">
                                <thead>
                                  <tr className="border-b border-white/10 bg-white/5">
                                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent">
                                      Area
                                    </th>
                                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent">
                                      Skill
                                    </th>
                                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent">
                                      Proficiency
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  {[
                                    {
                                      area: "Programming",
                                      skill: "Programming Fundamentals",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "Web Development",
                                      skill: "HTML / CSS",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "Web Development",
                                      skill: "JavaScript",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "Database",
                                      skill: "SQL / MySQL",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "Tools",
                                      skill: "Git / GitHub",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "Cybersecurity",
                                      skill: "Security Fundamentals",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "Networking",
                                      skill: "Networking Fundamentals",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "Data Analysis",
                                      skill: "Excel / Data Analysis",
                                      level: "Intermediate",
                                      progress: 85,
                                    },
                                    {
                                      area: "Cloud",
                                      skill: "Deployment / Hosting",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                    {
                                      area: "AI",
                                      skill: "AI Tools / Responsible AI Use",
                                      level: "Beginner",
                                      progress: 10,
                                    },
                                  ].map((item) => (
                                    <tr
                                      key={item.skill}
                                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]"
                                    >
                                      <td className="px-4 py-4 text-sm text-white/60">
                                        {item.area}
                                      </td>

                                      <td className="px-4 py-4 text-sm font-medium text-white">
                                        {item.skill}
                                      </td>

                                      <td className="px-4 py-4">
                                        <div className="min-w-[150px]">
                                          <div className="mb-2 flex items-center justify-between gap-3">
                                            <span
                                              className={`text-xs font-semibold ${
                                                item.level === "Intermediate"
                                                  ? "text-accent"
                                                  : "text-white/60"
                                              }`}
                                            >
                                              {item.level}
                                            </span>

                                            <span className="text-xs text-white/40">
                                              {item.progress}%
                                            </span>
                                          </div>

                                          <div
                                            className="h-2.5 w-full overflow-hidden rounded-full bg-white/10"
                                            role="progressbar"
                                            aria-label={`${item.skill} proficiency`}
                                            aria-valuenow={item.progress}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          >
                                            <div
                                              className="h-full rounded-full bg-accent transition-all duration-500"
                                              style={{
                                                width: `${item.progress}%`,
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            <div className="border-t border-white/10 px-4 py-3">
                              <p className="text-xs leading-5 text-white/40">
                                Progress bars are visual representations of
                                self-assessed proficiency, not formal test
                                scores or certifications.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-10 text-center"
        >
          <p className="text-sm text-white/40">
            Learning, troubleshooting, and growing as an IT professional.
          </p>
        </motion.div>
      </div>

      {/* Video Modal for Mock Interview */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-accent/40 bg-[#0e1017] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <BsPlayCircleFill size={22} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      STEP 21 — Mock Interview
                    </span>
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      Mock Interview Video Recording
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/mockjm.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-all duration-200 hover:border-accent hover:text-white"
                    title="Open video in a new tab"
                  >
                    <BsBoxArrowUpRight size={13} />
                    <span className="hidden sm:inline">New Tab</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/70 transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white"
                    aria-label="Close video modal"
                  >
                    <BsX size={24} />
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative flex flex-1 items-center justify-center bg-black p-2 sm:p-4">
                <video
                  src="/mockjm.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[62vh] w-full rounded-lg object-contain shadow-lg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Footer info */}
              <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 bg-primary/40 px-5 py-3 text-xs text-white/60 sm:flex-row sm:px-6">
                <span>
                  BSIT Mock Interview — 12 Technical & Behavioral Questions
                </span>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="font-semibold text-accent hover:underline"
                >
                  Close Video
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
