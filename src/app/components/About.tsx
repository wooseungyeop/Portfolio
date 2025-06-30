type AboutSection = {
  title: string;
  content: React.ReactNode;
};

const aboutSections: AboutSection[] = [
  {
    title: "Introduction",
    content: (
      <>
        다양한 토이 프로젝트를 직접 기획하고 개발하며, 실제 서비스를 만든다는
        마음가짐으로 실무와 유사한 환경에서 문제를 해결해왔습니다.
        <br />
        새로운 기술에 빠르게 적응하고 이를 프로젝트에 적극적으로 적용해왔으며,
        프론트 엔드와 백엔드를 모두 경험하며 개발의 전 과정을 직접
        수행해보았습니다.
        <br />
        이러한 경험을 바탕으로, 믿고 맡길 수 있는 개발자로 성장하고 있습니다.
      </>
    ),
  },
  {
    title: "Skills",
    content: (
      <>
        - React, Vue.js, Next.js, TypeScript, TailwindCSS, CSS3
        <br />
        - Java, Spring Boot, MySQL
        <br />- Git, GitHub, REST API 설계
      </>
    ),
  },
  {
    title: "Goal",
    content: (
      <>
        저는 항상 ‘왜?’라는 질문을 스스로에게 던지며, 꾸준하게 성장하는 개발자입니다.
        <br />
        “왜 이 기술을 선택해야 하는지, 왜 다른 기술보다 더 적합한지”에 대한
        근거를 찾는 과정을 중요하게 생각합니다.
        <br />
        이런 고민과 경험을 바탕으로, 더 나은 방향을 제시할 수 있는 개발자가
        되고자 합니다.
      </>
    ),
  },
];

const About = () => (
  <section className="max-w-4xl mx-auto mt-24 px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
    <hr className="border-gray-300 mb-8 w-20" />

    {aboutSections.map((section) => (
      <div className="mb-6" key={section.title}>
        <h3 className="text-2xl font-semibold text-gray-700 mb-1">
          {section.title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {section.content}
        </p>
      </div>
    ))}
  </section>
);

export default About;
