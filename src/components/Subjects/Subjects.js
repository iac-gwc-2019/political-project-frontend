import React, {useEffect, useState} from 'react';
import Title from './Title.js';
import Picture from './Picture.js';
import Summary from './Summary.js';
import BillsBlock from './BillsBlock.js';
import styles from './SubjectStyle.scss';
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Div from '../Divider/Div'
import { getBillsBySubject } from '../../../fetch_data/functions/fetchBills';

const obj = {
  women: {name: "Women's Rights", desc: "Women's rights are the rights and entitlements claimed for women and girls worldwide, and formed the basis for the women's rights movement in the nineteenth century and feminist movement during the 20th century. In some countries, these rights are institutionalized or supported by law, local custom, and behavior, whereas in others they are ignored and suppressed. They differ from broader notions of human rights through claims of an inherent historical and traditional bias against the exercise of rights by women and girls, in favor of men and boys."},
  citizenship: {name: "Racial Inequality", desc: "Racial inequality in the United States identifies the social advantages and disparities that affect different races within the United States. These can also be seen as a result of historic oppression, inequality of inheritance, or overall prejudice, especially against minority groups. In social science, racial inequality is typically analyzed as \"imbalances in the distribution of power, economic resources, and opportunities.\"Racial inequalities have manifested in American society in ways ranging from racial disparities in wealth, poverty rates, housing patterns, educational opportunities, unemployment rates, and incarceration rates.Some claim that current racial inequalities in the U.S. have their roots in over 300 years of cultural, economic, physical, legal, and political discrimination based on race."},
  religion: {name: "Religion", desc: "Religion in the United States is diverse with Christianity being the majority religion. Various religious faiths have flourished within the United States. A majority of Americans report that religion plays a very important role in their lives, a proportion unique among developed countries. Freedom of religion in the United States is guaranteed in the First Amendment to the United States Constitution."},
  africa: {name: "Foreign Policy", desc: "The foreign policy of the United States is its interactions with foreign nations and how it sets standards of interaction for its organizations, corporations and system citizens of the United States. The officially stated goals of the foreign policy of the United States, including all the Bureaus and Offices in the United States Department of State,as mentioned in the Foreign Policy Agenda of the Department of State, are \"to build and sustain a more democratic, secure, and prosperous world for the benefit of the American people and the international community\".In addition, the United States House Committee on Foreign Affairs states as some of its jurisdictional goals: \"export controls, including nonproliferation of nuclear technology and nuclear hardware; measures to foster commercial interaction with foreign nations and to safeguard American business abroad; international commodity agreements; international education; and protection of American citizens abroad and expatriation\". U.S. foreign policy and foreign aid have been the subject of much debate, praise and criticism, both domestically and abroad."},
  immigration: {name: "Immigration", desc: "Immigration is the international movement of people into a destination country of which they are not natives or where they do not possess citizenship in order to settle or reside there, especially as permanent residents or naturalized citizens, or to take up employment as a migrant worker or temporarily as a foreign worker. As for economic effects, research suggests that migration is beneficial both to the receiving and sending countries.Research, with few exceptions, finds that immigration on average has positive economic effects on the native population, but is mixed as to whether low-skilled immigration adversely affects low-skilled natives. Studies show that the elimination of barriers to migration would have profound effects on world GDP, with estimates of gains ranging between 67 and 147 percent. Development economists argue that reducing barriers to labor mobility between developing countries and developed countries would be one of the most efficient tools of poverty reduction."},
  climate: {name: "Environmental Policy", desc: "The environmental policy of the United States is a federal governmental action to regulate activities that have an environmental impact in the United States. The goal of environmental policy is to protect the environment for future generations while interfering as little as possible with the efficiency of commerce or the liberty of the people and to limit inequity in who is burdened with environmental costs. As his first official act bringing in the 1970s, President Richard Nixon signed the U.S. National Environmental Policy Act (NEPA) into law on New Years Day, 1970. Also in the same year, America starts to celebrate the first earth day, which is \"the big bang of U.S. environmental politics, launching the country on a sweeping social learning curve about ecological management never before experienced or attempted in any other nation\"(RosenBaum, 2016, p. 9). NEPA established a comprehensive US national environmental policy and created the requirement to prepare an environmental impact statement for \"major federal actions significantly affecting the quality of the environment.\" Eccleston has called NEPA, the world's \"environmental Magna Carta\"."},
  health: {name: "Healthcare", desc: "Health care, health-care, or healthcare is the maintenance or improvement of health via the prevention, diagnosis, and treatment of disease, illness, injury, and other physical and mental impairments in people. Access to health care may vary across countries, communities, and individuals, largely influenced by social and economic conditions as well as health policies. Providing health care services means \"the timely use of personal health services to achieve the best possible health outcomes\". Factors to consider in terms of healthcare access include financial limitations (such as insurance coverage), geographic barriers (such as additional transportation costs, possibility to take paid time off of work to use such services), and personal limitations (lack of ability to communicate with healthcare providers, poor health literacy, low income). Limitations to health care services affects negatively the use of medical services, efficacy of treatments, and overall outcome (well-being, mortality rates)."},
  finance: {name: "Economic Policy", desc: "The economic policies of Donald Trump, which were outlined in his campaign pledges, include trade protectionism, immigration reduction, individual and corporate tax reform, the dismantling of the Dodd–Frank Wall Street Reform and Consumer Protection Act and the repeal of the Patient Protection and Affordable Care Act (\"Obamacare\")."},
  education: {name: "Education", desc: "Education in the United States is provided in public, private, and home schools. State governments set overall educational standards, often mandate standardized tests for K–12 public school systems and supervise, usually through a board of regents, state colleges, and universities. The bulk of the $1.3 trillion in funding comes from state and local governments, with federal funding accounting for only about $200 billion. Private schools are generally free to determine their own curriculum and staffing policies, with voluntary accreditation available through independent regional accreditation authorities, although some state regulation can apply."},
  terrorism: {name: "National Security", desc: "National security is the security of a nation state, including its citizens, economy, and institutions, which is regarded as a duty of government. Originally conceived as protection against military attack, national security is now widely understood to include non-military dimensions, including the security from terrorism, crime, economic security, energy security, environmental security, food security, cyber security etc. Similarly, national security risks include, in addition to the actions of other nation states, action by violent non-state actors, narcotic cartels, and multinational corporations, and also the effects of natural disasters."},
  violence: {name: "Criminal Justice", desc: "Criminal justice is the delivery of justice to those who have committed crimes. The criminal justice system is a series of government agencies and institutions whose goals are to identify and catch unlawful individuals to inflict a form of punishment on them. Other goals include the rehabilitation of offenders, preventing other crimes, and moral support for victims. The primary institutions of the criminal justice system are the police, prosecution and defense lawyers, the courts and prisons."},
  marriage: {name: "LGBTQ+ Rights", desc: "Lesbian, gay, bisexual, and transgender (LGBT) rights in the United States have significantly progressed over time, with the majority of the progress on LGBT rights having taken place in the late 20th century and early 21st century. While the United States is considered by some a tolerant country with regards to LGBT rights, they continue to vary by jurisdiction, and discrimination in jobs and housing is still legal in most states. The Equality Act, which is currently proposed in the United States Congress, would outlaw discrimination based on sexual orientation and gender identity nationwide."}
}

export default function Subjects({history, match}) {
  const[subjectData, setSubjectData] = useState(null)
  useEffect(function() {
    if (!subjectData) {
      getBillsBySubject(match.params.subjectName)
        .then(data => {
          setSubjectData(data)
        })
        .catch(err => {
          history.push('/404')
        })
    }
  })
  return (
    <div className={styles.main}>

    <Row>
      <Col xs={2}>
        <div className={styles.image}>
          <Picture></Picture>
        </div>
      </Col>
      <Col>
        <Card style={{ width: '50rem' }}>
          <Card.Body>
            <Card.Title className={styles.title}>{subjectData ? obj[match.params.subjectName].name : null}</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text>{obj[match.params.subjectName].desc}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br/>
    <Div/>
    <br/>
    <Row>
      <h4 className={styles.blockTitle}>Relevant bills</h4>
    </Row>
    <Row>
    <Col xs={2}/>
    <Col>
      {
        subjectData
          ? subjectData.map((bill) => {
            return <BillsBlock key={bill.bill_id} bill={bill}/>
          })
          : null
      }
    </Col>
    </Row>
    </div>
  );
}
