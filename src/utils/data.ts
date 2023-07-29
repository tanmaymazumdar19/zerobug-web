export const employeesArray = [
  {
    empName: "John",
    age: 25,
    compName: "ABC Corp",
    role: ["Front End Dev"],
    techStack: ["React"],
    experience: 5,
    availability: "yes",
    gender: "male",
    resume: {
      fileType: "pdf",
      fileLinks: "https://example.com/john_resume.pdf",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Jane",
    age: 25,
    compName: "XYZ Inc",
    role: ["Front End Dev"],
    techStack: ["Angular"],
    experience: 3,
    availability: "yes",
    gender: "female",
    resume: {
      fileType: "docx",
      fileLinks: "https://example.com/jane_resume.docx",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Alex",
    age: 25,
    compName: "123 Tech",
    role: ["Front End Dev"],
    techStack: ["React"],
    experience: 7,
    availability: "no",
    gender: "male",
    resume: {
      fileType: "pdf",
      fileLinks: "https://example.com/alex_resume.pdf",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Mia",
    age: 25,
    compName: "Top Solutions",
    role: ["Front End Dev"],
    techStack: ["Angular"],
    experience: 2,
    availability: "no",
    gender: "female",
    resume: {
      fileType: "pdf",
      fileLinks: "https://example.com/mia_resume.pdf",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Chris",
    age: 25,
    compName: "Innovate Co",
    role: ["Front End Dev"],
    techStack: ["React"],
    experience: 4,
    availability: "yes",
    gender: "male",
    resume: {
      fileType: "pdf",
      fileLinks: "https://example.com/chris_resume.pdf",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Olivia",
    age: 25,
    compName: "Global Software",
    role: ["Front End Dev"],
    techStack: ["Angular"],
    experience: 6,
    availability: "yes",
    gender: "female",
    resume: {
      fileType: "pdf",
      fileLinks: "https://example.com/olivia_resume.pdf",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Michael",
    age: 25,
    compName: "ABC Corp",
    role: ["Front End Dev"],
    techStack: ["React"],
    experience: 8,
    availability: "no",
    gender: "male",
    resume: {
      fileType: "pdf",
      fileLinks: "https://example.com/michael_resume.pdf",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Emily",
    age: 25,
    compName: "XYZ Inc",
    role: ["Front End Dev"],
    techStack: ["Angular"],
    experience: 1,
    availability: "yes",
    gender: "female",
    resume: {
      fileType: "pdf",
      fileLinks: "https://example.com/emily_resume.pdf",
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Daniel",
    age: 25,
    compName: "123 Tech",
    role: ["Front End Dev"],
    techStack: ["Angular"],
    experience: 9,
    availability: "yes",
    gender: "male",
    resume: {
      fileType: ["docx"],
      fileLinks: ["https://example.com/daniel_resume.docx"],
    },
    id: Date.now().toLocaleString(),
  },
  {
    empName: "Sophia",
    age: 25,
    compName: "Top Solutions",
    role: ["Front End Dev"],
    techStack: ["React"],
    experience: 3,
    availability: "yes",
    gender: "female",
    resume: {
      fileType: ["pdf"],
      fileLinks: ["https://example.com/sophia_resume.pdf"],
    },
    id: Date.now().toLocaleString(),
  },
];

export const staticRequestsArray = [
  {
    compName: "ABC Corp",
    msg: "Request for approval",
    requestTime: "2023-07-28T22:26:55.557Z",
  },

  {
    compName: "XYZ Inc",
    msg: "Request for approval",
    requestTime: "2023-07-29T10:15:30.123Z",
  },

  {
    compName: "123 Tech",
    msg: "Request for approval",
    requestTime: "2023-07-29T14:45:20.999Z",
  },

  {
    compName: "Top Solutions",
    msg: "Request for approval",
    requestTime: "2023-07-29T18:33:47.312Z",
  },

  {
    compName: "Innovate Co",
    msg: "Request for approval",
    requestTime: "2023-07-30T08:59:10.888Z",
  },

  {
    compName: "Global Software",
    msg: "Request for approval",
    requestTime: "2023-07-30T12:27:40.001Z",
  },

  {
    compName: "ABC Corp",
    msg: "Request for approval",
    requestTime: "2023-07-30T16:08:12.789Z",
  },

  {
    compName: "XYZ Inc",
    msg: "Request for approval",
    requestTime: "2023-07-31T09:40:05.555Z",
  },

  {
    compName: "123 Tech",
    msg: "Request for approval",
    requestTime: "2023-07-31T14:02:22.222Z",
  },

  {
    compName: "Top Solutions",
    msg: "Request for approval",
    requestTime: "2023-07-31T19:18:30.450Z",
  },
].sort((a: any, b: any) => {
  return a.requestTime - b.requestTime;
});

console.log(staticRequestsArray);
