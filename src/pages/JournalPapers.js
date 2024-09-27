import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const paperInfo = [
    {
        "ref": `C. Sui, K. He, C. Lyu, Z. Wang and Y. -H. Liu, "3D Surface Reconstruction Using A Two-Step Stereo Matching Method Assisted with Five Projected Patterns," 2019 International Conference on Robotics and Automation (ICRA), Montreal, QC, Canada, 2019, pp. 6080-6086, doi: 10.1109/ICRA.2019.8794063.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/8794063"
    },
    {
        "ref": `Y. Cai, C.W.V. Hui, and K.W.S. Au, “Semi-Analytical Orientation Alignment with Joint Limit Constraints for Tele-Operated Surgical System,” The Hamlyn Symposium on Medical Robotics, London, United Kingdom, 2019, doi: 10.31256/HSMR2019.25.`,
        "url": "https://www.researchgate.net/publication/333968102_Semi-Analytical_Orientation_Alignment_with_Joint_Limit_Constraints_for_Tele-Operated_Surgical_System"
    },
    {
        "ref": `Min, Z., Liu, L., Meng, M.QH. (2019). Generalized Non-rigid Point Set Registration with Hybrid Mixture Models Considering Anisotropic Positional Uncertainties. In: Shen, D., et al. Medical Image Computing and Computer Assisted Intervention – MICCAI 2019. MICCAI 2019. Lecture Notes in Computer Science, vol 11768. Springer, Cham.`,
        "url": "https://doi-org.easyaccess2.lib.cuhk.edu.hk/10.1007/978-3-030-32254-0_61"
    },
    {
        "ref": `Jin, Y., Cheng, K., Dou, Q., Heng, PA. (2019). Incorporating Temporal Prior from Motion Flow for Instrument Segmentation in Minimally Invasive Surgery Video. In: Shen, D., et al. Medical Image Computing and Computer Assisted Intervention – MICCAI 2019. MICCAI 2019. Lecture Notes in Computer Science, vol 11768. Springer, Cham.`,
        "url": "https://doi.org/10.1007/978-3-030-32254-0_49"
    },
    {
        "ref": `Yu, L., Wang, S., Li, X., Fu, CW., Heng, PA. (2019). Uncertainty-Aware Self-ensembling Model for Semi-supervised 3D Left Atrium Segmentation. In: Shen, D., et al. Medical Image Computing and Computer Assisted Intervention – MICCAI 2019. MICCAI 2019. Lecture Notes in Computer Science, vol 11765. Springer, Cham.`,
        "url": "https://doi.org/10.1007/978-3-030-32245-8_67"
    },
    {
        "ref": `A. Shakoor, M. Xie, F. Pan, W. Gao, J. Sun and D. Sun, "A Robotic Surgery Approach to Mitochondrial Transfer Amongst Single Cells," 2019 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Macau, China, 2019, pp. 659-664, doi: 10.1109/IROS40897.2019.8968588.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/8968588"
    },
    {
        "ref": `H. Lin, C. -W. Vincent Hui, Y. Wang, A. Deguet, P. Kazanzides and K. W. S. Au, "A Reliable Gravity Compensation Control Strategy for dVRK Robotic Arms With Nonlinear Disturbance Forces," 2019 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Macau, China, 2019, doi: 10.1109/LRA.2019.2927953.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/8758985"
    },
    {
        "ref": `C. Sui, K. He, Z. Wang, C. Lyu, H. Guo and Y. -H. Liu, "A Spatial-temporal Multiplexing Method for Dense 3D Surface Reconstruction of Moving Objects," 2020 IEEE International Conference on Robotics and Automation (ICRA), Paris, France, 2020, pp. 2602-2608, doi: 10.1109/ICRA40945.2020.9197462.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9197462"
    },
    {
        "ref": `F. Pan, S. Chen, Y. Jiao, Z. Guan, A. Shakoor and D. Sun, "Automated High-Productivity Microinjection System for Adherent Cells," 2020 IEEE International Conference on Robotics and Automation (ICRA), Paris, France, 2020, doi: 10.1109/LRA.2020.2965870.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/8957314"
    },
    {
        "ref": `Zhao, Z., Jin, Y., Gao, X., Dou, Q., Heng, PA. (2020). Learning Motion Flows for Semi-supervised Instrument Segmentation from Robotic Surgical Video. In: Martel, A.L., et al. Medical Image Computing and Computer Assisted Intervention – MICCAI 2020. MICCAI 2020. Lecture Notes in Computer Science, vol 12263. Springer, Cham. `,
        "url": "https://doi.org/10.1007/978-3-030-59716-0_65"
    },
    {
        "ref": `Liu, Q., Dou, Q., Heng, PA. (2020). Shape-Aware Meta-learning for Generalizing Prostate MRI Segmentation to Unseen Domains. In: Martel, A.L., et al. Medical Image Computing and Computer Assisted Intervention – MICCAI 2020. MICCAI 2020. Lecture Notes in Computer Science, vol 12262. Springer, Cham. `,
        "url": "https://doi.org/10.1007/978-3-030-59713-9_46"
    },
    {
        "ref": `B. Lu et al., "A Learning-Driven Framework with Spatial Optimization For Surgical Suture Thread Reconstruction and Autonomous Grasping Under Multiple Topologies and Environmental Noises," 2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Las Vegas, NV, USA, 2020, pp. 3075-3082, doi: 10.1109/IROS45743.2020.9341445.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9341445"
    },
    {
        "ref": `J. Wu et al., "An Optimized Tilt Mechanism for a New Steady-Hand Eye Robot," 2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Las Vegas, NV, USA, 2020, pp. 3105-3111, doi: 10.1109/IROS45743.2020.9340741.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9340741"
    },
    {
        "ref": `Z. Zhao et al., "One to Many: Adaptive Instrument Segmentation via Meta Learning and Dynamic Online Adaptation in Robotic Surgical Video," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, pp. 13553-13559, doi: 10.1109/ICRA48506.2021.9561690.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9561690"
    },
    {
        "ref": `Y. Long et al., "Relational Graph Learning on Visual and Kinematics Embeddings for Accurate Gesture Recognition in Robotic Surgery," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, pp. 13346-13353, doi: 10.1109/ICRA48506.2021.9561028.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9561028"
    },
    {
        "ref": `Q. Hu, H. Huang, E. Dong and D. Sun, "A Bioinspired Composite Finger With Self-Locking Joints," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, doi: 10.1109/LRA.2021.3056345.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9345370"
    },
    {
        "ref": `H. Mo et al., "Control of a Flexible Continuum Manipulator for Laser Beam Steering," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, doi: 10.1109/LRA.2021.3056335.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9345474"
    },
    {
        "ref": `B. Li, B. Lu, Y. Lu, Q. Dou and Y. -H. Liu, "Data-driven Holistic Framework for Automated Laparoscope Optimal View Control with Learning-based Depth Perception," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, pp. 12366-12372, doi: 10.1109/ICRA48506.2021.9562083.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9562083"
    },
    {
        "ref": `Y. Lu, B. Lu, B. Li, H. Guo and Y. -h. Liu, "Robust Three-Dimensional Shape Sensing for Flexible Endoscopic Surgery Using Multi-Core FBG Sensors," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, doi: 10.1109/LRA.2021.3067279.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9381600"
    },
    {
        "ref": `Gao, X., Jin, Y., Zhao, Z., Dou, Q., Heng, PA. (2021). Future Frame Prediction for Robot-Assisted Surgery. In: Feragen, A., Sommer, S., Schnabel, J., Nielsen, M. (eds) Information Processing in Medical Imaging. IPMI 2021. Lecture Notes in Computer Science, vol 12729. Springer, Cham.`,
        "url": "https://doi.org/10.1007/978-3-030-78191-0_41"
    },
    {
        "ref": `K. Li et al., "Autonomous Navigation of an Ultrasound Probe Towards Standard Scan Planes with Deep Reinforcement Learning," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, pp. 8302-8308, doi: 10.1109/ICRA48506.2021.9561295.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9561295"
    },
    {
        "ref": `Y. Long et al., "Relational Graph Learning on Visual and Kinematics Embeddings for Accurate Gesture Recognition in Robotic Surgery," 2021 IEEE International Conference on Robotics and Automation (ICRA), Xi'an, China, 2021, pp. 13346-13353, doi: 10.1109/ICRA48506.2021.9561028.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9561028"
    },
    {
        "ref": `Long, Y. et al. (2021). E-DSSR: Efficient Dynamic Surgical Scene Reconstruction with Transformer-Based Stereoscopic Depth Perception. In: de Bruijne, M., et al. Medical Image Computing and Computer Assisted Intervention – MICCAI 2021. MICCAI 2021. Lecture Notes in Computer Science, vol 12904. Springer, Cham. `,
        "url": "https://doi.org/10.1007/978-3-030-87202-1_40"
    },
    {
        "ref": `J. Xu, B. Li, B. Lu, Y. -H. Liu, Q. Dou and P. -A. Heng, "SurRoL: An Open-source Reinforcement Learning Centered and dVRK Compatible Platform for Surgical Robot Learning," 2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Prague, Czech Republic, 2021, pp. 1821-1828, doi: 10.1109/IROS51168.2021.9635867.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9635867"
    },
    {
        "ref": `H. Cao, J. Huang, Y. Li, J. Zhou and Y. Liu, "Fuzzy-Depth Objects Grasping Based on FSG Algorithm and a Soft Robotic Hand," 2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Prague, Czech Republic, 2021, pp. 3948-3954, doi: 10.1109/IROS51168.2021.9636173.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9636173"
    },
    {
        "ref": `K. Li, Y. Xu, L. Liu and M. Q. . -H. Meng, "A Virtual Scanning Framework for Robotic Spinal Sonography with Automatic Real-time Recognition of Standard Views," 2021 43rd Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC), Mexico, 2021, pp. 4574-4577, doi: 10.1109/EMBC46164.2021.9629703.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9629703"
    },
    {
        "ref": `J. Zhou, W. Chen, S. S. Cheng, L. Xue, M. C. F. Tong and Y. Liu, "Bio-inspired Soft (BIS) Hand for Tele-operated COVID-19 Oropharyngeal (OP) Swab Sampling," 2021 IEEE International Conference on Robotics and Biomimetics (ROBIO), Sanya, China, 2021, pp. 80-86, doi: 10.1109/ROBIO54168.2021.9739351.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9739351"
    },
    {
        "ref": `Y. Long, J. Cao, A. Deguet, R. H. Taylor and Q. Dou, "Integrating Artificial Intelligence and Augmented Reality in Robotic Surgery: An Initial dVRK Study Using a Surgical Education Scenario," 2022 International Symposium on Medical Robotics (ISMR), GA, USA, 2022, pp. 1-8, doi: 10.1109/ISMR48347.2022.9807505.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9807505"
    },
    {
        "ref": `R. Wei et al., "Distilled Visual and Robot Kinematics Embeddings for Metric Depth Estimation in Monocular Scene Reconstruction," 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Kyoto, Japan, 2022, pp. 8072-8077, doi: 10.1109/IROS47612.2022.9982145.`,
        "url": "https://ieeexplore.ieee.org/abstract/document/9982145"
    },
]

function JournalPapers() {
    return (
        <Container>
            <Row>
                <h3>Journal Papers</h3>
                <ol>
                    {paperInfo.map((item, i) =>
                        <li key={"contact" + i.toString()} className='pb-4'>
                            {item.ref}<br />
                            <a href={item.url}>{item.url}</a>
                        </li>
                    )}
                </ol>
            </Row>
        </Container>
    );
}

export default JournalPapers;