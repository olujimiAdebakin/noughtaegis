const serviceDetailsData = [
  {
    title: "Cybersecurity Awareness Training",
    description:
      "Cybersecurity awareness training educates your employees on the latest security threats and best practices to mitigate risks, reducing the likelihood of successful cyberattacks.",
    points: [
      "Educate employees on current cyber threats",
      "Improve awareness of phishing and social engineering tactics",
      "Reduce human errors leading to security breaches",
      "Promote best practices for password management and online security",
      "Empower employees to recognize and report suspicious activities",
      "Build a security-conscious culture within your organization",
    ],
  },

  {
    title: "Application Penetration Testing",
    description:
      "Identify vulnerabilities in your application layer and ensure that your applications are secured against modern attacks.",
    points: [
      "Detect application-level vulnerabilities",
      "Ensure secure coding practices",
      "Protect your users' data from breaches",
      "Mitigate risks in web and mobile applications",
    ],
  },

  {
    title: "Purple Teaming",
    description:
      "Purple teaming helps improve collaboration between offensive (red) and defensive (blue) security teams, aiming to enhance overall security posture by simulating real-world attacks and implementing effective defenses.",
    points: [
      "Facilitate collaboration between red and blue teams",
      "Test and improve incident response capabilities",
      "Simulate real-world attack scenarios",
      "Strengthen defenses based on attack outcomes",
      "Identify gaps in detection and response mechanisms",
      "Implement proactive threat-hunting strategies",
    ],
  },
  {
    title: "ICS/OT/Cyber Security Assessment",
    description:
      "Ensure the security of Industrial Control Systems (ICS) and Operational Technology (OT) environments by identifying vulnerabilities and securing critical infrastructure components against modern cyber threats.",
    points: [
      "Assess security risks in ICS/OT environments",
      "Secure critical infrastructure from cyberattacks",
      "Identify vulnerabilities in SCADA systems",
      "Enhance safety measures in industrial environments",
      "Protect against cyber-physical threats",
      "Ensure compliance with industry regulations",
    ],
  },
  {
    title: "Ransomware Penetration Testing",
    description:
      "Ransomware penetration testing simulates ransomware attacks to assess the effectiveness of your security defenses and helps organizations prepare against such malicious threats.",
    points: [
      "Simulate real-world ransomware attacks",
      "Test your backup and recovery processes",
      "Identify gaps in your endpoint protection",
      "Mitigate the risk of data encryption and exfiltration",
      "Strengthen email and network security against ransomware",
      "Provide actionable insights to avoid ransom payments",
    ],
  },
  {
    title: "DevSecOps",
    description:
      "DevSecOps integrates security practices into the DevOps pipeline, ensuring that security is prioritized throughout the software development lifecycle, from code development to deployment.",
    points: [
      "Integrate security practices within the DevOps workflow",
      "Automate security testing and vulnerability management",
      "Identify and fix vulnerabilities early in development",
      "Enhance collaboration between development and security teams",
      "Ensure compliance with security standards in CI/CD pipelines",
      "Maintain a continuous feedback loop for security improvements",
    ],
  },

  {
    title: "Red Teaming",
    description:
      "Red teaming involves a full-scale simulation of real-world attacks, testing your organization's detection, prevention, and response capabilities in a controlled but adversarial manner.",
    points: [
      "Simulate sophisticated real-world attack scenarios",
      "Test the effectiveness of your defensive security measures",
      "Improve response to advanced persistent threats",
      "Expose vulnerabilities in security systems and processes",
      "Provide actionable recommendations for security improvements",
      "Enhance awareness of current cyber threat landscapes",
    ],
  },
  {
    title: "Infrastructure Penetration Testing",
    description:
      "An infrastructure penetration testing assessment uncovers vulnerabilities residing in your IT and network systems and provides a tailored approach to each environment.",
    points: [
      "Reduce the risk of a breach within system infrastructure",
      "Identify gaps in processes and procedures",
      "Strengthen your cybersecurity posture",
      "Protect your data from ransomware, trojans, and phishing attacks",
      "Highlight how a vulnerability can lead to compromise",
      "Explain to key stakeholders or board members where vulnerabilities lie and what to do about it",
    ],
  },
  {
    title: "Objective-Based Penetration Testing",
    description:
      "Objective-based penetration testing focuses on achieving specific goals within an organization, such as accessing sensitive data or compromising critical systems, to understand the impact of a targeted attack.",
    points: [
      "Target critical assets and high-value data",
      "Simulate focused, goal-oriented attacks",
      "Understand the impact of data breaches on business operations",
      "Identify key vulnerabilities in your most sensitive systems",
      "Test the effectiveness of layered security controls",
      "Provide insight into how attackers can achieve specific objectives",
    ],
  },

  {
    title: "Cyber Maturity Assessment",
    description:
      "A cyber maturity assessment evaluates an organization's overall cybersecurity posture, measuring the effectiveness of its security processes, technologies, and governance models to recommend improvements.",
    points: [
      "Evaluate your organization's cybersecurity readiness",
      "Identify areas for improvement in security processes",
      "Strengthen policies and governance frameworks",
      "Benchmark security performance against industry standards",
      "Improve resilience to cyber threats and incidents",
      "Provide a roadmap for enhancing security maturity",
    ],
  },
  {
    title: "Cloud Penetration Testing",
    description:
      "Cloud penetration testing uncovers vulnerabilities in cloud-based infrastructure, ensuring that cloud assets are secured against potential threats while maintaining compliance with cloud security standards.",
    points: [
      "Identify security gaps in cloud environments",
      "Ensure compliance with cloud security standards",
      "Protect cloud assets from unauthorized access",
      "Strengthen cloud-based defenses against breaches",
      "Test configurations and identity access controls",
      "Mitigate risks associated with cloud services",
    ],
  },
  {
    title: "Training and Certification",
    description:
      "Provide specialized training and certifications to enhance skills in various cybersecurity domains, ensuring your team is equipped with the latest knowledge and industry-recognized credentials.",
    points: [
      "Offer industry-recognized certifications in cybersecurity",
      "Provide hands-on training in threat detection and response",
      "Enhance skills in penetration testing and secure coding",
      "Stay up-to-date with the latest security tools and techniques",
      "Prepare for professional certifications such as CISSP, CEH, and CISM",
      "Empower teams to better defend against cyber threats",
    ],
  },
];

const paragraphs = [
  "Don't fall victim to cybercrime. Our training program equips you with the knowledge and tools to navigate the internet safely and securely.",
  "Stay safe online! Our training program teaches you how to safeguard sensitive information, recognize cyber threats, and maintain your privacy.",
  "In today's digital age, cybersecurity awareness is crucial. Protect yourself from hackers, data breaches, and malicious attacks with our comprehensive training program.",
  "Safeguard your digital life. Discover how to protect your sensitive information and stay ahead of cyber threats with our expert training.",
  "Cybersecurity is a shared responsibility. Take control of your digital presence with our easy-to-understand lessons on safe browsing and data protection.",
  "Understand the risks of weak passwords and how attackers can exploit them. Our training teaches you to create strong passwords that keep you safe.",
  "Prevent identity theft by learning how to secure your personal information. Our program offers actionable tips to protect your privacy.",
  "The internet is full of threats, but you can navigate it safely with our security training. Learn to recognize phishing emails and avoid online scams.",
  "Stay ahead of cybercriminals by keeping your software updated. Our training covers the importance of patching and using secure applications.",
  "Data breaches are on the rise. Learn how to detect unusual activity and protect your accounts from unauthorized access with two-factor authentication.",
  "The weakest link in cybersecurity is often human error. Learn how to spot social engineering attacks and protect your company from internal threats.",
  "Is your Wi-Fi secure? Discover the importance of encrypting your network and avoiding public Wi-Fi risks with our comprehensive security modules.",
  "Online threats evolve constantly, but so can you. Stay up-to-date with the latest cybersecurity practices and trends through our expert training.",
  "Protect your digital footprint by understanding privacy settings and how to limit the data you share online. Safeguard your personal and professional life.",
  "Avoid financial loss by learning how to secure online transactions. Our training teaches you to recognize secure websites and avoid e-commerce fraud.",
  "Learn the importance of regularly backing up your data. Our training explains how to securely store and recover your information in case of attacks.",
  "Understand ransomware and how to avoid becoming a victim. Our program covers prevention strategies and what to do if your system is compromised.",
  "Secure your mobile devices just like your computer. Learn about mobile app security, safe downloading practices, and protecting your data on the go.",
  "Work from home safely with our cybersecurity tips. Protect your remote setup from intruders and maintain confidentiality while working online.",
  "Become your own first line of defense by mastering basic cybersecurity skills. Empower yourself to avoid the most common cyber threats with confidence.",
];

// const quizQuestions = [
//   {
//     question: "What is phishing?",
//     options: [
//       "A cyber attack to steal personal information",
//       "A technique for securing your password",
//       "An encryption method",
//       "A type of firewall",
//     ],
//     answer: "A cyber attack to steal personal information",
//   },
//   {
//     question: "Which of the following is a strong password?",
//     options: ["password123", "MyPetDog", "@B#32$aH1!Z", "abc123"],
//     answer: "@B#32$aH1!Z",
//   },
//   {
//     question: "Which of the following helps protect your email?",
//     options: [
//       "Using public Wi-Fi",
//       "Avoiding email attachments from unknown sources",
//       "Ignoring updates",
//       "Using the same password for all accounts",
//     ],
//     answer: "Avoiding email attachments from unknown sources",
//   },
//   {
//     question: "How often should you update your passwords?",
//     options: [
//       "Once a year",
//       "Every 3 months",
//       "When it's compromised",
//       "Both when it's compromised and periodically (e.g., every 3 months)",
//     ],
//     answer:
//       "Both when it's compromised and periodically (e.g., every 3 months)",
//   },
// ];

export default { serviceDetailsData, paragraphs};
