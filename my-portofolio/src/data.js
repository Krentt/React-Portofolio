const getData = () => {
  return [
    {
      id: 1,
      title: "Backend Developer Freelance",
      location: "Astra Credit Companies",
      periods: "January 2024 - Present",
      descriptions: [
        "Participated in the 'Otoransi' web project at Astra Credit Companies, designing APIs for both user and admin platforms within a vehicle insurance service.",
        "Engineered a data scheduler for seamless integration between 'Otoransi' web interfaces and the central database of 'Asuransi Ramayana', enhancing data reliability and accessibility.",
        "Implemented a microservices architecture utilizing Redis as the message broker to significantly improve system responsiveness and scalability.",
        "Developed performance optimization strategies including advanced caching, indexing, and asynchronous processing to boost application speed and enhance user experience."
      ],
      skills: "Java, PostgreSQL, Spring Boot, Redis, Rest Template",
    },
    {
      id: 2,
      title: "Backend Developer Internship",
      location: "Metrodata",
      periods: "August 2023 - Desember 2023",
      descriptions: [
        "As an intern at Metrodata Academy, I am actively involved in the transition to a microservices architecture. I collaborate with the team on the backend system migration, aimed at enhancing scalability and efficiency.",
        "Proudly, we have successfully implemented over 90% of the migration within a span of less than 5 months, showcasing our team's dedication and efficiency in this complex process.",
        "Additionally, I've gained hands-on experience in implementing various microservices technologies, including setting up a message broker and Eureka server. This experience has enriched my knowledge in modern software architecture and distributed systems, further preparing me for future challenges in the field.",
      ],
      skills: "Java, MySQL, Spring Boot, Redis, Eureka, Rest Template",
    },
    {
      id: 3,
      title: "Mobile Development Apprentice",
      location: "Bangkit Academy",
      periods: "Febuary 2023 - June 2023",
      descriptions: [
        "Attained the prestigious Distinction Graduate status, reflecting my dedication to academic excellence and passion for learning.",
        "Proficient in Kotlin and experienced in using Jetpack Compose to develop modern Android applications that provide outstanding user experiences.",
        "A dedicated Peer Tutor who fosters a collaborative and conducive study environment, guiding fellow learners to achieve their academic goals.",
      ],
      skills: "Kotlin, Jetpack Compose",
    },
    {
      id: 4,
      title: "Teaching Assistant",
      location: "University of Indonesia",
      periods: "Febuary 2022 - Present",
      descriptions: [
        "Provided educational support in multiple areas, including Artificial Intelligence, Linear Algebra, Knowledge Management, and Computer Architecture.",
        "Delivered course materials, conducted mentoring sessions, and assessed student assignments, ensuring a thorough understanding of the subject matter.",
        "Developed and improved soft skills, such as effective communication, mentoring, and knowledge transfer.",
        "Facilitated a conducive learning environment and aided students in their academic endeavors.",
        "Continuously contributed to enhancing the educational experience for students and fostering a collaborative learning atmosphere.",
      ],
      skills:
        "Python, Data Science, Machine Learning, Knowledge Management, Teaching",
    },
  ];
};

export { getData };
