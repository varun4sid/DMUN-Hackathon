import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

const ArticleContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  padding: 4rem 30vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 15vw;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: ${DARK_BLUE};
  text-decoration: none;
  margin-bottom: 2rem;
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  
  &:hover {
    color: ${ABBOT_BLUE};
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

const ArticleTitle = styled.h1`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${DARK_BLUE};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const ArticleDate = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.5rem;
  color: ${DARK_BLUE};
  opacity: 1;
  margin-bottom: 0.2rem;
  font-weight: bold;
`;

const ArticleContent = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  line-height: 1.7;
  color: ${DARK_BLUE};

  strong {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    font-size: 1.1rem;
  }

  p {
    font-weight: normal;
    margin-bottom: 1em;
  }
`;

const articles = [
  {
    id: '8',
    image: '/Article8img.jpeg',
    title: 'Executive Director Highlights Critical Role of Multi-Stakeholder Collaboration and Youth Empowerment at FfD4 Multistakeholder Hearing',
    summary: 'Mr. Jaewon Choi, Executive Director of the DMUN Foundation, emphasized the importance of multi-stakeholder partnerships and youth engagement at the FfD4 Multistakeholder Hearing in New York, a key preparatory event for the 2025 FfD4 conference.',
    date: 'June 22, 2025',
    content: `<p>New York, New York – June 22, 2025 – Mr. Jaewon Choi, Executive Director of the DMUN Foundation highlighted the role of multi-stakeholder partnerships and robust youth engagement in achieving sustainable development.</p>
<p>This emphasis follows its active and impactful participation in the Fourth International Conference on Financing for Development (FfD4) Multistakeholder Hearing, held in preparation for the main FfD4 conference in Seville, Spain, from June 30 to July 3, 2025.</p>
<p>The hearing, a crucial preparatory event, convened diverse voices from civil society, the private sector, academia, and philanthropic organizations to contribute to the global dialogue on financing the 2030 Agenda for Sustainable Development. The DMUN Foundation, dedicated to fostering global cooperation and empowering young people in international affairs, presented key interventions during the hearing. The Foundation highlighted how collaborative efforts across sectors are vital to mobilizing the necessary resources and expertise to address pressing global challenges, from climate change and poverty to inequality and health crises.</p>
<p>"As a youth-led organization, the DMUN Foundation believes deeply that the voices and innovative potential of young people are not just beneficiaries, but essential drivers of sustainable development," said Mr. Choi.</p>
<p>The FfD4 Multistakeholder Hearing provided a vital platform for non-state actors, especially youth, to shape the future of development finance. We are at a critical juncture where traditional financing models alone are insufficient to meet the ambitious targets of the Sustainable Development Goals. The collective wisdom and resources of governments, civil society, and the private sector—including the dynamic energy of youth—are essential to unlocking new pathways for sustainable and inclusive growth."</p>
<p>During its interventions, the DMUN Foundation, drawing on its experience advocating for greater youth participation in UN FfD conferences, specifically called for:</p>
<ul>
  <li><strong>Meaningful Youth Participation and Inclusion:</strong> Ensuring young people are not only present but actively involved in the design, implementation, and monitoring of financing for development strategies and programs.</li>
  <li><strong>Strengthening North-South and South-South Cooperation:</strong> Promoting inclusive partnerships that leverage diverse experiences and resources to address global challenges equitably.</li>
  <li><strong>Innovating Financing Instruments:</strong> Exploring blended finance, impact investing, and other mechanisms to de-risk investments and attract private capital into sustainable development projects, particularly those led by or benefiting youth.</li>
  <li><strong>Enhancing Debt Sustainability:</strong> Advocating for comprehensive solutions to the growing debt burden faced by many developing countries, which hinders their ability to invest in essential services and future generations.</li>
  <li><strong>Promoting Digital Inclusion and Literacy:</strong> Recognizing the potential of digital technologies to bridge development gaps, ensure equitable access to financial services, and empower young entrepreneurs and innovators.</li>
  <li><strong>Empowering Local Communities and Marginalized Groups:</strong> Ensuring that development finance strategies are inclusive and address the specific needs and aspirations of all segments of society, with a particular focus on local, youth-led initiatives.</li>
</ul>
<p>The DMUN Foundation remains committed to working with all stakeholders to advocate for a transformative FfD4 outcome that prioritizes people, planet, and the vital role of youth. The insights and recommendations gathered from the Multistakeholder Hearing will inform the intergovernmental negotiations for the FfD4 outcome document, which is expected to outline a comprehensive framework for financing sustainable development.</p>
<p>View the Interventions Here:<br/>
<a href="https://www.instagram.com/p/DBwSEe3vYES/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/p/DBwSEe3vYES/</a><br/>
<a href="https://www.instagram.com/p/DBrYD8ovvkf/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/p/DBrYD8ovvkf/</a></p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`
  },
  {
    id: '7',
    image: '/Article7img.jpeg',
    title: 'DMUN Foundation Sends 3 Representatives to the 2024 Ad Hoc Committee to Draft a Terms of Reference to the United Nations Framework Convention on International Tax Cooperation',
    summary: 'Three DMUN Foundation representatives are participating in the Second Session of the Ad Hoc Committee at the United Nations Headquarters, advocating for youth and developing-country perspectives in global tax cooperation.',
    date: 'August 10th, 2024',
    content: `<p><strong>DMUN Foundation Sends 3 Representatives to the 2024 Ad Hoc Committee to Draft a Terms of Reference to the United Nations Framework Convention on International Tax Cooperation</strong></p>
<p>New York, NY – 10 August 2024 – Three official representatives of the DMUN Foundation—Executive Director Mr. Jaewon Choi, Trustee Mr. Avi Contractor, and Global Youth Delegate Mr. Matthew Kartavov—are participating in the Second Session of the Ad Hoc Committee to Draft Terms of Reference for a United Nations Framework Convention on International Tax Cooperation, taking place at United Nations Headquarters in New York from 29 July to 16 August 2024.</p>
<p>Building on its commitment to inclusive global governance, the DMUN delegation will:</p>
<ul>
  <li><strong>Deliver Plenary Interventions:</strong> Advocate for the explicit inclusion of youth and developing-country perspectives in the Convention's governance and dispute-resolution mechanisms.</li>
  <li><strong>Propose SDG-Aligned Commitments:</strong> Recommend anchoring the Convention's objectives in the Sustainable Development Goals to secure predictable financing for development, climate action, and social welfare.</li>
</ul>
<p>"A fair international tax framework is vital for sustainable development and equity," said Mr. Choi. "We're proud to ensure that youth voices and the priorities of emerging economies are heard at the heart of these negotiations."</p>
<p>The Committee aims to finalize and adopt the Terms of Reference by vote on 16 August 2024, setting the stage for the negotiation of a binding Convention that could reshape global tax cooperation and bolster revenue mobilization for all nations.</p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`,
  },
  {
    id: '1',
    image: '/Article-1.jpeg',
    title: 'Two Youth Changemakers Selected to Attend the UN\'s High-Level Summit for the Next Generation',
    summary: 'We\'re proud to announce the nomination of Fale Andrew ​Lesa JP and Alexa Dominique Pascual to the Summit of the ​Future as Global Youth Representatives.',
    date: 'August 7 2024',
    content: 'YouthCubed, a member organization of the DMUN Foundation, is proud to announce the nomination of Fale Andrew Lesa JP and Alexa Dominique Pascual as Global Youth Representatives for the upcoming Summit of the Future. These individuals were selected for their exceptional leadership and unwavering commitment to addressing critical global challenges, making them ideal candidates to represent the voices of youth at this pivotal international gathering.\\n\\n' +
    '<strong>Fale Andrew Lesa JP</strong>\\n' +
    'Fale Andrew Lesa, hailing from Samoa, is a highly respected indigenous leader and policy consultant. He has a distinguished track record of advocating for climate justice, particularly for small island developing states (SIDS), which are among the most vulnerable to the impacts of climate change. Fale\\\'s work spans various high-profile roles, including serving on the Auckland Conservation Board and as a commissioner on the Child & Youth Mortality Review Committee in New Zealand. His expertise in public policy and his deep commitment to integrating traditional knowledge into modern climate solutions have positioned him as a key figure in the global climate movement. As a Global Youth Representative, Fale aims to elevate the concerns of SIDS and indigenous communities, ensuring that their unique challenges and perspectives are central to the discussions at the Summit of the Future.\\n\\n' +
    '<strong>Alexa Dominique Pascual</strong>\\n' +
    'Alexa Dominique Pascual, from the United States, is a dynamic youth leader with a strong focus on women\\\'s rights and climate activism. She has represented various organizations, including the Major Group for Children and Youth (MGCY) and UNA-USA, at international forums such as the United Nations General Assembly. Alexa is deeply involved in advocacy for gender equity and has been a vocal proponent of increasing youth participation in diplomacy and policy-making. Her experience in leading discussions on global sustainability and human rights makes her an invaluable voice at the Summit of the Future. Alexa\\\'s commitment to diversifying the field of international relations and ensuring that young women are at the forefront of global decision-making processes aligns with the core values of YouthCubed.\\n\\n' +
    '<strong>YouthCubed\\\'s Vision for the Summit of the Future</strong>\\n' +
    'The nomination of Fale Andrew Lesa JP and Alexa Dominique Pascual underscores YouthCubed\\\'s dedication to fostering youth leadership in global governance. By amplifying the voices of young leaders who are deeply connected to their communities and passionate about sustainable development, YouthCubed is working to ensure that the outcomes of the Summit of the Future are inclusive and equitable. These representatives will bring crucial insights to the table, advocating for the rights and futures of marginalized groups and pushing for policies that reflect the aspirations of the younger generation.\\n\\n' +
    'Jaewon Choi, the founder of YouthCubed and the Executive Director of the DMUN Foundation, expressed his confidence in the nominees: "Fale and Alexa embody the spirit of YouthCubed—bold, innovative, and unyielding in their pursuit of a better world. Their participation in the Summit of the Future is a testament to the power of youth to drive meaningful change on the global stage."\\n\\n' +
    'As the world prepares for the Summit of the Future, YouthCubed remains committed to supporting these young leaders in their mission to create a more just and sustainable world.'
  },
  {
    id: '4',
    image: '/Article-4.jpeg',
    title: "Founder's Analysis: End of Online MUN?",
    summary: 'An analysis exploring the current decline of online MUNs as in-person conferences regain popularity.',
    date: 'July 22, 2024',
    content: `<strong>FOR IMMEDIATE RELEASE</strong><br/><br/>
<p>Introduction</p>
<p>As the COVID-19 pandemic subsides and life starts to return to a semblance of normalcy, many aspects of our lives are undergoing changes, and the world of Model United Nations (MUN) is no exception. While online MUN conferences played a crucial role in keeping the spirit of diplomacy alive during the pandemic, they now face challenges that could lead to their decline as in-person conferences regain popularity. In this analysis, we will explore the current downfall of online MUNs and the factors contributing to their diminishing allure.</p>
<p>"The shift"</p>
<p>The COVID-19 pandemic disrupted the traditional MUN landscape, prompting organizers to quickly transition to online platforms to continue these essential learning experiences. Online MUN conferences saw a surge in participation as students and organisers adapted to virtual settings to maintain the momentum of global engagement.</p>
<p>Factors to downfall</p>
<p>"Zoom Fatigue" and Virtual Burnout</p>
<p>A major challenge faced during the pandemic was the prevalence of "Zoom fatigue" and virtual burnout. As online learning and virtual meetings became the norm, students increasingly experienced exhaustion from extensive screen time, leading to a lack of enthusiasm for additional virtual commitments like online MUN conferences.</p>
<p>Impersonal Interaction</p>
<p>Online MUNs, while accessible, lack the personal interaction and camaraderie that in-person conferences offer. The spontaneous conversations, networking opportunities, and social bonding that occur during traditional MUN events contribute to the overall MUN experience, and their absence in the virtual setting is keenly felt.</p>
<p>Simulation Realism</p>
<p>While online MUN conferences demonstrated adaptability and creativity, some participants found that the realism of in-person MUN simulations could not be fully replicated online. Physical presence often lends an authentic sense of diplomacy and urgency to the proceedings, which virtual platforms struggle to match.</p>
<p>Time Zone Constraints</p>
<p>Time zone differences have been a significant hurdle for global participants in online MUNs. Coordinating sessions that accommodate diverse time zones can be challenging, affecting the inclusivity and participation of students from certain regions.</p>
<p>The Resurgence of In-Person MUN Conferences</p>
<p>As the world reopens, many students and organizers are eager to return to the cherished experience of in-person MUN conferences. The allure of reconnecting with friends and colleagues, engaging in dynamic face-to-face debates, and exploring new cities enhances the appeal of traditional MUN events.</p>
<p>What's next?</p>
<p>While the current decline of online MUNs is evident, it is essential to recognize their invaluable contributions during challenging times. Online MUNs will likely continue to exist, serving as a supplementary option for those facing logistical constraints or seeking a cost-effective alternative. The future of MUN conferences lies in striking a balance between in-person and online events, offering participants the best of both worlds.</p>
<p>To conclude</p>
<p>As we bid farewell to the height of online MUNs amidst the waning pandemic, it is essential to appreciate the role they played in sustaining global dialogue and learning during unprecedented times. As in-person conferences regain their allure, organizers and participants must envision a future that incorporates both traditional and virtual settings to create a dynamic, inclusive, and enriching MUN experience. By striking this balance, we can preserve the essence of diplomacy while embracing the opportunities that technology provides, ensuring the continued growth and impact of the MUN community in a post-COVID world.</p>`
  },
  {
    id: '5',
    image: '/online.jpeg',
    title: 'Executive Director Jaewon Choi Elevates Youth Voices at HLPF 2024',
    summary: 'Mr. Jaewon Choi, Executive Director of the DMUN Foundation, participated as the youngest delegate at the 2024 UN High-Level Political Forum on Sustainable Development (HLPF) at the United Nations Headquarters in New York.',
    date: 'July 17, 2024',
    content: `<p>New York, NY – July 17, 2024 – Mr. Jaewon Choi, Executive Director of the DMUN Foundation, participated as the youngest delegate at the 2024 UN High-Level Political Forum on Sustainable Development (HLPF), held at United Nations Headquarters in New York from 8 to 17 July 2024 under the auspices of the UN Economic and Social Council.</p>
<p>Invited by the United Nations Major Group on Children and Youth, Mr. Choi represented three youth-led non-profit organisations—the DMUN Foundation, the Katija Hyoungjoo Neuber Institute, and YouthCubed—bringing a unified youth perspective to the world's foremost platform for reviewing progress on the 2030 Agenda and the Sustainable Development Goals (SDGs).</p>
<p>Mr. Choi delivered a powerful intervention during a session on SDG Acceleration as a Civil Society Delegate. He pointed out some of the systemic barriers and discrimination faced by youths, especially minors in effective engagement with the United Nations.</p>
<p>Participants and speakers in this session included the State Minister of Spain, H.E. Amina J. Mohammed, Deputy Secretary-General of the United Nations, and 193 Member States and other observers of the United Nations.</p>
<p>"This generation's insights and innovations are indispensable for achieving transformative, sustainable solutions," said Mr. Choi. "At HLPF 2024, youth leaders moved from the margins to the centre of global policymaking."</p>
<p>The HLPF is the UN's central platform for follow-up and review of the 2030 Agenda and its 17 SDGs, bringing together Member States, UN entities, civil society, the private sector, and other stakeholders. The outcomes of the 2024 forum—including the Youth Report—will feed into the upcoming Declaration of the Future and the Summit of the Future to be convened at UN Headquarters later this year.</p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`
  },
  {
    id: '6',
    image: '/Article6img.jpeg',
    title: 'Press Release - The United Nations Economic Commission for Europe Regional Forum on Sustainable Development',
    summary: 'Mr. Jaewon Choi, Executive Director of the DMUN Foundation, joined delegates at the 2024 UNECE Regional Forum on Sustainable Development in Geneva, delivering strategic interventions and co-authoring a global Youth Report.',
    date: 'March 15th, 2024',
    content: `<p><strong>Press Release - The United Nations Economic Commission for Europe Regional Forum on Sustainable Development</strong></p>
<p>Geneva, Switzerland – March 15, 2024 – Mr. Jaewon Choi, Executive Director of the DMUN Foundation, joined delegates at the 2024 United Nations Economic Commission for Europe (UNECE) Regional Forum on Sustainable Development (RFSD), held in Geneva from 13 to 14 March 2024, with preparatory meetings on 11 and 12 March 2024.</p>
<p>Invited by the United Nations Major Group on Children and Youth, Mr. Choi represented three youth-led non-profit organizations—the DMUN Foundation, the Katija Hyoungjoo Neuber Institute, and YouthCubed—as the youngest participant in the entire forum.</p>
<p>Throughout the Forum, Mr. Choi delivered nine strategic interventions:</p>
<ul>
  <li><strong>Public Plenary and Roundtable Speeches:</strong> Four live-broadcast interventions (in English, French, and Russian) on UN Web TV, covering the region's progress on SDGs, youth engagement in policymaking, and innovative financing for resilience.</li>
  <li><strong>Civil Society Pre-Meeting Contributions:</strong> Five focused interventions during the Civil Society Pre-Meeting, collaborating with other NGO representatives to strengthen youth participation in UNECE processes.</li>
</ul>
<p>In partnership with the Major Group on Children and Youth, Mr. Choi co-authored a comprehensive Youth Report, consolidating global youth recommendations. This report, approved by RFSD Co-Chairs—the Permanent Representatives of Armenia and the Czech Republic—will be presented to the Summit of the Future later in 2024, influencing negotiations among all 193 UN Member States.</p>
<p>"Our generation holds the key to transformative, sustainable policies," said Mr. Choi. "RFSD 2024 proved that youth are not merely observers but essential drivers of change in the global arena."</p>
<p>The UNECE RFSD engages ambassadors of its 56 member States, along with civil society and youth constituencies, to review regional SDG implementation and feed outcomes into key UN mechanisms. The Forum's outputs, including the Youth Report, will inform the forthcoming Declaration of the Future and the Summit of the Future at UN Headquarters.</p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`
  },
  {
    id: '3',
    image: '/Article-3.jpeg',
    title: 'COP28 UAE',
    summary: 'Our latest research explores how young people view and engage with digital governance frameworks worldwide.',
    date: 'December 13, 2023',
    content: `<p>Dubai, United Arab Emirates - The DMUN Foundation is thrilled to announce its inaugural participation in COP28 UAE, a significant step in our journey towards active involvement with the United Nations. This milestone marks our first major engagement in the UN's global environmental initiatives, where we will bring the perspectives of youth to the forefront of critical discussions on climate change and sustainability.</p>
<p><strong>Empowering Youth at COP28</p>
<p>At COP28, our delegation, consisting of young leaders from diverse backgrounds, will engage directly with policymakers, experts, and international organizations. Our focus is to ensure that the voices of youth are not only heard but are integral to shaping the policies and strategies that will determine the future of our planet. By participating in this global forum, the DMUN Foundation is fulfilling its mission to empower young people to become active stakeholders in the world's most pressing issues.</p>
<p><strong>Reflecting on Our Experience</p>
<p>Reflecting on our visit to COP28, we are proud to have contributed to meaningful dialogues that address the challenges of climate change. Our representatives participated in various panels, workshops, and roundtable discussions, where they shared innovative ideas and youth-led solutions. The experience reinforced the importance of youth involvement in global decision-making processes and highlighted the critical role that education and empowerment play in fostering a sustainable future.</p>
<p><strong>Looking Ahead</p>
<p>Our participation in COP28 is just the beginning. The DMUN Foundation is committed to continuing its engagement with the United Nations and other international bodies. We will build on the momentum from COP28 to further our efforts in advocating for youth-led initiatives and promoting sustainable development. Our journey towards greater involvement in the REAL UN is a testament to our belief that young people have the power to drive positive change on a global scale.</p>
<p><strong>For media inquiries or more information about our participation in COP28 UAE, please Membership:</p>
<p><strong>Department of External Affairs<br/>enquiries@dmun.org</p>
<p><strong>About DMUN Foundation</p>
<p>The DMUN Foundation is a youth-focused nonprofit organization dedicated to providing accessible education in politics, governance, and international relations. We empower young people to become active global citizens through innovative programs, leadership opportunities, and participation in international forums. Our mission is to ensure that the voices of youth are heard in shaping a brighter, more equitable future.</p>`
  },
  {
    id: '2',
    image: '/Article-2.jpeg',
    title: 'DMUN Foundation Secures Special Accreditation for FfD4: A Significant Step Towards Global Engagement',
    summary: 'The DMUN Foundation is proud to announce its nomination to participate as a civil society stakeholder in the Fourth International Conference on Financing for Development (FfD4).',
    date: '3rd June 2024',
    content: `<strong>FOR IMMEDIATE RELEASE</strong><br/><br/>
<p>DMUN Foundation Secures Special Accreditation for FfD4: A Significant Step Towards Global Engagement</p>
<p>New York City, NY – The DMUN Foundation is proud to announce its nomination by H.E. Dennis Francis, President of the 78th Session of the United Nations General Assembly, to participate as a civil society stakeholder in the Fourth International Conference on Financing for Development (FfD4). This nomination, made under paragraph 4(b) of Resolution 78/271, marks a significant milestone in our commitment to advocating for youth-led initiatives on a global stage.</p>
<p>Special Accreditation and Its Significance</p>
<p>The United Nations has established a process for special accreditation that allows non-governmental organizations (NGOs), civil society organizations (CSOs), academic institutions, and private sector entities to contribute to key conferences like FfD4. This accreditation is crucial for ensuring that a diverse array of voices, particularly those not traditionally included in UN processes, can participate in shaping global policies on financing for development. The procedure involves a nomination from the President of the General Assembly, where the President creates a list of stakeholders that he determines to be of close affiliation and value to the event, and places it under a "non-objective procedure", which will be elaborated below.</p>
<p>For the DMUN Foundation, this special accreditation represents more than just participation; it is a recognition of our ongoing efforts to bring youth perspectives into critical global discussions. Through this platform, we aim to highlight the innovative solutions and unique insights that young people can offer, particularly in addressing the pressing financial challenges that impact sustainable development worldwide.</p>
<p>Understanding the Non-Objective Procedure</p>
<p>The nomination process for FfD4 includes what is known as a "non-objective procedure." This procedure comes after an organization is nominated by the President of the General Assembly, in which the President circulates the list of stakeholder organizations he has selected to all Member States and Observer States, in which it requires unanimous approval. Even one objection from a Member State or a Observer State will completely exclude that organization from the nominated list.</p>
<p>The Importance of Paragraph 4(b) of Resolution 78/271</p>
<p>Paragraph 4(b) of Resolution 78/271 is a key element in enabling the participation of NGOs, CSOs, academic institutions, and the private sector in FfD4. It formally approves their involvement in both the conference and its preparatory processes, recognizing their critical role in shaping the global financing framework for sustainable development. The inclusion of these entities is vital for ensuring that the discussions and outcomes of FfD4 are comprehensive and inclusive, incorporating insights from across different sectors and regions.</p>
<p>DMUN Foundation's Commitment to Global Advocacy</p>
<p>Our participation in FfD4 aligns with the DMUN Foundation's broader mission to empower youth and promote sustainable development through education and advocacy. By engaging directly in this international forum, we are taking a significant step towards influencing global financial policies that affect young people and future generations.</p>
<p>We are committed to using this platform to advocate for policies that prioritize equitable financing, sustainable development, and the empowerment of marginalized communities. The insights and contributions we bring to FfD4 will reflect our deep commitment to creating a more just and sustainable world, where young people are recognized as essential stakeholders in global decision-making processes.</p>
<p>For media inquiries or more information about our participation in FfD4, please Membership:</p>
<p>Department of External Affairs<br/>enquiries@dmun.org</p>
<p>About DMUN Foundation</p>
<p>The DMUN Foundation is a youth-focused nonprofit organization dedicated to providing accessible education in politics, governance, and international relations. We empower young people to become active global citizens through innovative programs, leadership opportunities, and participation in international forums. Our mission is to ensure that the voices of youth are heard in shaping a brighter, more equitable future.</p>`
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  // Redirect to PDF for articles 5 and 6
  React.useEffect(() => {
    if (article && article.pdf) {
      window.location.href = article.pdf;
    }
  }, [article]);

  if (!article) {
    return (
      <ArticleContainer>
        <BackLink to="/newsroom">← Back to Newsroom</BackLink>
        <ArticleTitle>Article Not Found</ArticleTitle>
        <ArticleContent>
          The article you're looking for doesn't exist. Please return to the newsroom to browse our articles.
        </ArticleContent>
      </ArticleContainer>
    );
  }

  // If it's a PDF article, don't render anything (redirect happens above)
  if (article.pdf) return null;

  return (
    <ArticleContainer>
      <BackLink to="/newsroom">← Back to Newsroom</BackLink>
      <ArticleImage src={article.image} alt={article.title} />
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDate>{article.date}</ArticleDate>
      <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
    </ArticleContainer>
  );
};

export default ArticlePage; 