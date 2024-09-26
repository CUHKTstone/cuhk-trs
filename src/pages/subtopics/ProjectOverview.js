import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

function ProjectOverview({ subTopicCount }) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>Subtopics</h5>
                    <ul>
                        <li><Link to='/project-overview'>Project Overview</Link></li>
                        {Array.from({ length: subTopicCount }, (_, index) => (
                            <li><Link to={'/subtopic-' + (index + 1).toString()}>{"Subtopic " + (index + 1).toString()}</Link></li>
                        ))}
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>Project Overview</h3>
                    <p>The clinical application of surgical robots such as the da Vinci Surgical System allows surgeons to extend the eyes and hands into patients' body cavities and improves the quality of surgical operations by providing the surgeons with 3D images and robotic arms. The current system is operated by a single surgeon who performs all the surgical steps. This requires the surgeon's full attention and focus, so the introduction of automated steps will significantly reduce a surgeon's  workload, especially during prolonged surgery (&gt;2 hours). Surgical procedures can generally be divided into multiple steps and tasks, some of which require immediate judgments and reactions from surgeons, such as dissection around the tumor or control of bleeding. However, other the surgical steps, although requiring meticulous care, are relatively routine, e.g. suturing for gastrointestinal anastomosis, etc. Automating these surgical steps would guarantee precision and replicability, while also reducing the pressure and workload on the surgeons. The automation would also eliminate human factors, such as experiences and techniques of the surgeons, in success and quality of the operations. Table 1 shows the surgical steps which surgeons wish to automate in general surgery, gynaecology, and ear-nose-throat surgery, respectively, based on their opinions collected from an on-line survey. Another paradigm for automated robots is to replace assistants in minimally invasive surgery (MIS) to avoid problems due to unsmooth surgeon-assistant collaboration and communication.</p>
                    <p className='text-center'>Table 1 Surgical steps that could be automated by robot</p>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>General Surgery</td>
                                <td>Gynaecology</td>
                                <td>Ear-Nose-Throat Surgery</td>
                            </tr>
                            <tr>
                                <td>Suturing<br />
                                    Laparoscope control<br />
                                    Image-based vein puncture<br />
                                    Needle insertion<br />
                                    Biopsy
                                </td>
                                <td>Suturing<br />
                                    Uterus manipulation<br />
                                    Laparoscope control<br />
                                    Breast biopsy<br />
                                    Cervical cutting
                                </td>
                                <td>Biopsy and cannulation procedures<br />
                                    Endoscope control<br />
                                    Guidance for tumor removal<br />
                                    Delivery of drug<br />
                                    Delivery of radiation sources
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>Our team comprises well-known members with expertise in robotics, artificial intelligence, surgery, and medicine. We have received numerous prestigious awards and recognitions including membership of the Chinese Academy of Engineering, fellow of the Royal Society of Engineers, fellows of IEEE, medical societies of UK, and ASME, State Natural Science Award (2nd class), etc. We have published over 1500 papers in high-impact journals and received numerous grants from RGC, NSFC, ITF, 863, etc. More importantly, we have been closely collaborating for years on surgical robots and made important contributions as summarized in the following:</p>
                    <ul>
                        <li>
                            <p>With the support of the RGC collaborative research scheme (CUHK6/CRF/13G: Assistive surgical robots) and the ITF, the PC, together with the Co-PIs: Dr. Cheung, Profs. Tong, Sun and Meng, have developed a robot for manipulating the uterus in hysterectomy and a robot assisting sinus surgery (Fig.1). The clinical trials of the two robots are being conducted at Prince of Wales Hospital. The results of the clinical experiments are very positive. We have also developed an MRI-guided robotic needle for breast biopsy. Note that the robots are controlled by surgeons via hands-free interfaces, different from the automatic robot which is to be developed.</p>
                            <Figure>
                                <Figure.Image src="./images/robot-e1547104679443.jpg" />
                                <Figure.Caption>The sinus robot</Figure.Caption>
                            </Figure>
                        </li>
                        <li><p>The medical experts in the team have extensive experiences in robot surgery, being leading experts in using the da Vinci robot in Asia and even the world. CUHK made several Asian records in robot surgery: the introduction of the first set of da Vinci robot; the first robot-assisted surgery; the first certified training centre of the da Vinci robot; and the first da Vinci Research Kit donated by Intuitive Surgical Inc.. Profs. Chiu, Tong and Chan are helping to conduct clinical trials of the da Vinci single port surgical robot. Dr. Cheung is a well-known expert in hysterectomy using robots.</p></li>
                        <li><p>The collaborators are all world-leaders in medical robotics. Prof. R. H. Taylor is recognized as the father of medical robots for his pioneering work in the area. Prof. Guangzhong Yang made pioneering work in image-guided robot surgery. Prof. P. Fiorini is leading the “Autonomous Robotic Surgery” project in the European Union. Dr. Sorger is the Vice President for medical research, Intuitive Surgical Inc. The Co-PI, Dr. Samuel Au, was leading the da Vinci single-port project. Prof. Bradly is a leading expert in medical robotics.</p></li>
                        <li><p>We have carried out much work on the enabling technologies. Firstly, in sensing and perception, Prof. Yang and his group designed an endoscopic 3D imaging sensor. The PI developed a real-time 3D imaging sensor with a novel 3D reconstruction algorithm. Prof. Heng is a world leader in 3D construction and visualization of human. Dr. Kwok has carried out many original works on image-based perception of surgical object. Secondly, in surgical planning and navigation, Prof. Meng has developed a novel SALLC algorithm for registering features of soft tissues and a multi-module instrument tracking system. Thirdly, the PC and Prof. Sun are among the first group of people working on robotic deformation control of soft objects and developed several model-free deformation controllers. Prof. Huang is a world-leader in output feedback control Profs. Yam and Liao have performed much works on intelligent control and human-robot coordination. Finally, we have conducted many works on medical image processing and machine learning. Prof. Heng is a world-leader in applying deep learning to medical image analysis. His group are the winners of 12 challenges in machine learning and AI organized by various top conferences, such as MICCAI and ISBI. His recent works have been published in top-tier journals, such as MIA, IEEE TMI, IEEE JBHI, IEEE TBME, IEEE PAMI, and at top-tier conferences in the area.</p></li>
                    </ul>
                    <p>In summary, we believe that this pool of talents from engineering and medicine is already one of the strongest groups in the proposed interdisciplinary research field in the Greater China and Asia. This project will help us further become one of the world's best teams in surgical robotics. The research experiences of the team members and the results we have obtained will form the basis of the proposed research work and contribute to the project's success.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectOverview;
