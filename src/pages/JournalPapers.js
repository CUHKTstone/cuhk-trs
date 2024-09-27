import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const paperInfo = [
    {
        "ref": "B. Ouyang, Y. Liu, H. -Y. Tam and D. Sun, \"Design of an Interactive Control System for a Multisection Continuum Robot,\" in IEEE/ASME Transactions on Mechatronics, vol. 23, no. 5, pp. 2379-2389, Oct. 2018, doi: 10.1109/TMECH.2018.2855129.",
        "url": "https://ieeexplore-ieee-org.easyaccess1.lib.cuhk.edu.hk/abstract/document/8410449"
    },
    {
        "ref": "F. Alambeigi, Z. Wang, R. Hegeman, Y. -H. Liu and M. Armand, \"Autonomous Data-Driven Manipulation of Unknown Anisotropic Deformable Tissues Using Unmodelled Continuum Manipulators,\" in IEEE Robotics and Automation Letters, vol. 4, no. 2, pp. 254-261, April 2019, doi: 10.1109/LRA.2018.2888896.",
        "url": "https://ieeexplore-ieee-org.easyaccess1.lib.cuhk.edu.hk/document/8584049"
    },
    {
        "ref": "B. Yang et al., \"Adaptive FOV Control of Laparoscopes With Programmable Composed Constraints,\" in IEEE Transactions on Medical Robotics and Bionics, vol. 1, no. 4, pp. 206-217, Nov. 2019, doi: 10.1109/TMRB.2019.2949881.",
        "url": "https://ieeexplore-ieee-org.easyaccess1.lib.cuhk.edu.hk/document/8884118"
    },
    {
        "ref": "Q. Dou et al., \"PnP-AdaNet: Plug-and-Play Adversarial Domain Adaptation Network at Unpaired Cross-Modality Cardiac Segmentation,\" in IEEE Access, vol. 7, pp. 99065-99076, 2019, doi: 10.1109/ACCESS.2019.2929258.",
        "url": "https://ieeexplore-ieee-org.easyaccess1.lib.cuhk.edu.hk/abstract/document/8764342"
    },
    {
        "ref": "Qian, Y., Huang, W., Si, W., Liao, X., Wang, Q., & Heng, P. A., “Towards biomechanically and visually plausible volumetric cutting simulation of deformable bodies,” in The Eurographics Association, 2019, doi: 10.2312/pg.20191335",
        "url": "https://doi.org/10.2312/pg.20191335"
    },
    {
        "ref": "Chen, Y., Wang, K., Liao, X., Qian, Y., Wang, Q., Yuan, Z., & Heng, P. A., “Channel-Unet: a spatial channel-wise convolutional neural network for liver and tumors segmentation,” in Frontiers in genetics, 10, 1110, 2019.",
        "url": "https://doi.org/10.3389/fgene.2019.01110"
    },
    {
        "ref": "Li, R., Si, W., Liao, X., Wang, Q., Klein, R., & Heng, P. A., “Mixed reality based respiratory liver tumor puncture navigation,” in Computational Visual Media, 5, 363-374, 2019, doi: https://doi.org/10.1007/s41095-019-0156-x",
        "url": "https://link-springer-com.easyaccess1.lib.cuhk.edu.hk/article/10.1007/s41095-019-0156-x#citeas"
    },
    {
        "ref": "H. Lin, C. -W. Vincent Hui, Y. Wang, A. Deguet, P. Kazanzides and K. W. S. Au, \"A Reliable Gravity Compensation Control Strategy for dVRK Robotic Arms With Nonlinear Disturbance Forces,\" in IEEE Robotics and Automation Letters, vol. 4, no. 4, pp. 3892-3899, Oct. 2019, doi: 10.1109/LRA.2019.2927953.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8758985"
    },
    {
        "ref": "Chiu, P.W.Y., Ng, S.S.M. & Au, S.K.W., “Transcervical minimally invasive esophagectomy using da Vinci® SP™ Surgical System: a feasibility study in cadaveric model,” in Surg Endosc 33, 1683–1686, 2019.",
        "url": "https://doi-org.easyaccess1.lib.cuhk.edu.hk/10.1007/s00464-018-06628-3"
    },
    {
        "ref": "C. Sui, J. Wu, Z. Wang, G. Ma and Y. -H. Liu, \"A Real-Time 3D Laparoscopic Imaging System: Design, Method, and Validation,\" in IEEE Transactions on Biomedical Engineering, vol. 67, no. 9, pp. 2683-2695, Sept. 2020, doi: 10.1109/TBME.2020.2968488.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8964441"
    },
    {
        "ref": "C. Sui, K. He, C. Lyu, Z. Wang and Y. -H. Liu, \"Active Stereo 3-D Surface Reconstruction Using Multistep Matching,\" in IEEE Transactions on Automation Science and Engineering, vol. 17, no. 4, pp. 2130-2144, Oct. 2020, doi: 10.1109/TASE.2020.2991803.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9093968"
    },
    {
        "ref": "Z. Min, J. Wang and M. Q. . -H. Meng, \"Robust Generalized Point Cloud Registration With Orientational Data Based on Expectation Maximization,\" in IEEE Transactions on Automation Science and Engineering, vol. 17, no. 1, pp. 207-221, Jan. 2020, doi: 10.1109/TASE.2019.2914306.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8718799"
    },
    {
        "ref": "Z. Min, H. Ren and M. Q. . -H. Meng, \"Statistical Model of Total Target Registration Error in Image-Guided Surgery,\" in IEEE Transactions on Automation Science and Engineering, vol. 17, no. 1, pp. 151-165, Jan. 2020, doi: 10.1109/TASE.2019.2909646.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8694813"
    },
    {
        "ref": "J. Wu, Z. Wang, W. Chen, Y. Wang and Y. -h. Liu, \"Design and Validation of a Novel Leaf Spring-Based Variable Stiffness Joint With Reconfigurability,\" in IEEE/ASME Transactions on Mechatronics, vol. 25, no. 4, pp. 2045-2053, Aug. 2020, doi: 10.1109/TMECH.2020.2995533.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9095357"
    },
    {
        "ref": "H. Liu et al., \"Precise Drug Delivery by Using PLGA-Based Microspheres and Optical Manipulators,\" in IEEE Transactions on NanoBioscience, vol. 19, no. 2, pp. 192-202, April 2020, doi: 10.1109/TNB.2019.2958820.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8930592"
    },
    {
        "ref": "W. Gao et al., \"Precise Automated Intracellular Delivery Using a Robotic Cell Microscope System With Three-Dimensional Image Reconstruction Information,\" in IEEE/ASME Transactions on Mechatronics, vol. 25, no. 6, pp. 2870-2881, Dec. 2020, doi: 10.1109/TMECH.2020.2997083.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9099378"
    },
    {
        "ref": "Yueming Jin, Huaxia Li, Qi Dou, Hao Chen, Jing Qin, Chi-Wing Fu, Pheng-Ann Heng, “Multi-task recurrent convolutional network with correlation loss for surgical video analysis,” in Medical Image Analysis, Volume 59, 2020.",
        "url": "https://doi.org/10.1016/j.media.2019.101572."
    },
    {
        "ref": "C. Chen, Q. Dou, H. Chen, J. Qin and P. A. Heng, \"Unsupervised Bidirectional Cross-Modality Adaptation via Deeply Synergistic Image and Feature Alignment for Medical Image Segmentation,\" in IEEE Transactions on Medical Imaging, vol. 39, no. 7, pp. 2494-2505, July 2020, doi: 10.1109/TMI.2020.2972701.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8988158"
    },
    {
        "ref": "Q. Liu, L. Yu, L. Luo, Q. Dou and P. A. Heng, \"Semi-Supervised Medical Image Classification With Relation-Driven Self-Ensembling Model,\" in IEEE Transactions on Medical Imaging, vol. 39, no. 11, pp. 3429-3440, Nov. 2020, doi: 10.1109/TMI.2020.2995518.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9095275"
    },
    {
        "ref": "Shi, X., Jin, Y., Dou, Q. et al., “LRTD: long-range temporal dependency based active learning for surgical workflow recognition,” in Int J CARS 15, 1573–1584, 2020.",
        "url": "https://doi-org.easyaccess1.lib.cuhk.edu.hk/10.1007/s11548-020-02198-9"
    },
    {
        "ref": "Z. Min, D. Zhu, H. Ren and M. Q. . -H. Meng, \"Feature-Guided Nonrigid 3-D Point Set Registration Framework for Image-Guided Liver Surgery: From Isotropic Positional Noise to Anisotropic Positional Noise,\" in IEEE Transactions on Automation Science and Engineering, vol. 18, no. 2, pp. 471-483, April 2021, doi: 10.1109/TASE.2020.3001207.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9123604"
    },
    {
        "ref": "H. Mo et al., \"Control of a Flexible Continuum Manipulator for Laser Beam Steering,\" in IEEE Robotics and Automation Letters, vol. 6, no. 2, pp. 1074-1081, April 2021, doi: 10.1109/LRA.2021.3056335.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9345474"
    },
    {
        "ref": "Z. Min, D. Zhu, J. Liu, H. Ren and M. Q. . -H. Meng, \"Aligning 3D Curve With Surface Using Tangent and Normal Vectors for Computer-Assisted Orthopedic Surgery,\" in IEEE Transactions on Medical Robotics and Bionics, vol. 3, no. 2, pp. 372-383, May 2021, doi: 10.1109/TMRB.2021.3075784.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9416289"
    },
    {
        "ref": "Q. Hu, H. Huang, E. Dong and D. Sun, \"A Bioinspired Composite Finger With Self-Locking Joints,\" in IEEE Robotics and Automation Letters, vol. 6, no. 2, pp. 1391-1398, April 2021, doi: 10.1109/LRA.2021.3056345.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9345370"
    },
    {
        "ref": "Y. Lu, B. Lu, B. Li, H. Guo and Y. -h. Liu, \"Robust Three-Dimensional Shape Sensing for Flexible Endoscopic Surgery Using Multi-Core FBG Sensors,\" in IEEE Robotics and Automation Letters, vol. 6, no. 3, pp. 4835-4842, July 2021, doi: 10.1109/LRA.2021.3067279.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9381600"
    },
    {
        "ref": "Li, D. C. F., Wang, Z., Zhou, J., & Liu, Y. H., “Honeycomb jamming: An enabling technology of variable stiffness reconfiguration,” in Soft Robotics, 8(6), 720-734, 2021.",
        "url": "https://www-liebertpub-com.easyaccess1.lib.cuhk.edu.hk/doi/full/10.1089/soro.2019.0188"
    },
    {
        "ref": "H. Mo, B. Ouyang, L. Xing, D. Dong, Y. Liu and D. Sun, \"Automated 3-D Deformation of a Soft Object Using a Continuum Robot,\" in IEEE Transactions on Automation Science and Engineering, vol. 18, no. 4, pp. 2076-2086, Oct. 2021, doi: 10.1109/TASE.2020.3033558.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9257386"
    },
    {
        "ref": "Y. Jin, Y. Long, C. Chen, Z. Zhao, Q. Dou and P. -A. Heng, \"Temporal Memory Relation Network for Workflow Recognition From Surgical Video,\" in IEEE Transactions on Medical Imaging, vol. 40, no. 7, pp. 1911-1923, July 2021, doi: 10.1109/TMI.2021.3069471.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9389566"
    },
    {
        "ref": "Ge Fang et al, “Soft robotic manipulator for intraoperative MRI-guided transoral laser microsurgery,” in Sci. Robot.6,eabg5575, 2021. DOI:10.1126/scirobotics.abg5575",
        "url": "https://www-science-org.easyaccess1.lib.cuhk.edu.hk/doi/full/10.1126/scirobotics.abg5575#tab-citations"
    },
    {
        "ref": "Z. Dong et al., \"Shape Tracking and Feedback Control of Cardiac Catheter Using MRI-Guided Robotic Platform—Validation With Pulmonary Vein Isolation Simulator in MRI,\" in IEEE Transactions on Robotics, vol. 38, no. 5, pp. 2781-2798, Oct. 2022, doi: 10.1109/TRO.2022.3154691.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9747938"
    },
    {
        "ref": "Kong, X., Jin, Y., Dou, Q. et al., “Accurate instance segmentation of surgical instruments in robotic surgery: model refinement and cross-dataset evaluation,” in Int J CARS 16, 1607–1614, 2021.",
        "url": "https://doi-org.easyaccess1.lib.cuhk.edu.hk/10.1007/s11548-021-02438-6"
    },
    {
        "ref": "H. Cao, L. Xing, H. Mo, D. Li and D. Sun, \"Image-Guided Corridor-Based Motion Planning and Magnetic Control of Microrotor in Dynamic Environments,\" in IEEE/ASME Transactions on Mechatronics, vol. 27, no. 6, pp. 5415-5426, Dec. 2022, doi: 10.1109/TMECH.2022.3181588.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9803874"
    },
    {
        "ref": "Fang, G., Wang, X., Ho, J. D., Wang, K., Chow, C. K., Lee, K. H., ... & Kwok, K. W., “Epipolar Geometry‐Based Visual Servoing of Soft Endoscopic Manipulator for Transoral Laser Ablation,” in Advanced Intelligent Systems, 4(12), 2200197, 2022.",
        "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/aisy.202200197"
    },
    {
        "ref": "X. Wang et al., \"Learning-Based Visual-Strain Fusion for Eye-in-Hand Continuum Robot Pose Estimation and Control,\" in IEEE Transactions on Robotics, vol. 39, no. 3, pp. 2448-2467, June 2023, doi: 10.1109/TRO.2023.3240556.",
        "url": "https://ieeexplore.ieee.org/abstract/document/10052777"
    },
    {
        "ref": "Wang, K., Mak, C. H., Ho, J. D., Liu, Z., Sze, K. Y., Wong, K. K., ... & Kwok, K. W., “Large‐Scale Surface Shape Sensing with Learning‐Based Computational Mechanics,” in Advanced Intelligent Systems, 3(11), 2100089, 2021.",
        "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/aisy.202100089"
    },
    {
        "ref": "Fang, G., Chow, M. C., Ho, J. D., He, Z., Wang, K., Ng, T. C., ... & Kwok, K. W., “Soft robotic manipulator for intraoperative MRI-guided transoral laser microsurgery,” in Science Robotics, 6(57), eabg5575, 2021.",
        "url": "https://www-science-org.easyaccess2.lib.cuhk.edu.hk/doi/full/10.1126/scirobotics.abg5575"
    },
    {
        "ref": "B. Lu et al., \"Toward Image-Guided Automated Suture Grasping Under Complex Environments: A Learning-Enabled and Optimization-Based Holistic Framework,\" in IEEE Transactions on Automation Science and Engineering, vol. 19, no. 4, pp. 3794-3808, Oct. 2022, doi: 10.1109/TASE.2021.3136185.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9664632"
    },
    {
        "ref": "B. Lu, B. Li, Q. Dou and Y. Liu, \"A Unified Monocular Camera-Based and Pattern-Free Hand-to-Eye Calibration Algorithm for Surgical Robots With RCM Constraints,\" in IEEE/ASME Transactions on Mechatronics, vol. 27, no. 6, pp. 5124-5135, Dec. 2022, doi: 10.1109/TMECH.2022.3166522.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9781386"
    },
    {
        "ref": "Wei, R., Li, B., Mo, H., Lu, B., Long, Y., Yang, B., ... & Sun, D., “Stereo dense scene reconstruction and accurate laparoscope localization for learning-based navigation in robot-assisted surgery,” arXiv preprint arXiv:2110.03912, 1, 2021.",
        "url": "https://www.academia.edu/download/98788294/2110.03912v1.pdf"
    },
    {
        "ref": "Z. Min, J. Liu, L. Liu and M. Q. . -H. Meng, \"Generalized Coherent Point Drift With Multi-Variate Gaussian Distribution and Watson Distribution,\" in IEEE Robotics and Automation Letters, vol. 6, no. 4, pp. 6749-6756, Oct. 2021, doi: 10.1109/LRA.2021.3093011.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9466416"
    },
    {
        "ref": "Z. Min, J. Wang and M. Q. . -H. Meng, \"Joint Rigid Registration of Multiple Generalized Point Sets With Anisotropic Positional Uncertainties in Image-Guided Surgery,\" in IEEE Transactions on Automation Science and Engineering, vol. 19, no. 4, pp. 3612-3627, Oct. 2022, doi: 10.1109/TASE.2021.3127172.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9618660"
    },
    {
        "ref": "K. Li, Y. Xu, Z. Zhao and M. Q. . -H. Meng, \"External and Internal Sensor Fusion Based Localization Strategy for 6-DOF Pose Estimation of a Magnetic Capsule Robot,\" in IEEE Robotics and Automation Letters, vol. 7, no. 3, pp. 6878-6885, July 2022, doi: 10.1109/LRA.2022.3178473.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9783101"
    },
    {
        "ref": "K. Li, Y. Xu, J. Wang, D. Ni, L. Liu and M. Q. . -H. Meng, \"Image-Guided Navigation of a Robotic Ultrasound Probe for Autonomous Spinal Sonography Using a Shadow-Aware Dual-Agent Framework,\" in IEEE Transactions on Medical Robotics and Bionics, vol. 4, no. 1, pp. 130-144, Feb. 2022, doi: 10.1109/TMRB.2021.3127015.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9610119"
    },
    {
        "ref": "K. Li, Y. Xu and M. Q. . -H. Meng, \"An Overview of Systems and Techniques for Autonomous Robotic Ultrasound Acquisitions,\" in IEEE Transactions on Medical Robotics and Bionics, vol. 3, no. 2, pp. 510-524, May 2021, doi: 10.1109/TMRB.2021.3072190.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9399640"
    },
    {
        "ref": "Y. Jin, Y. Yu, C. Chen, Z. Zhao, P. -A. Heng and D. Stoyanov, \"Exploring Intra- and Inter-Video Relation for Surgical Semantic Scene Segmentation,\" in IEEE Transactions on Medical Imaging, vol. 41, no. 11, pp. 2991-3002, Nov. 2022, doi: 10.1109/TMI.2022.3177077.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9779714"
    },
    {
        "ref": "F. Pan, S. Chen, Y. Jiao, Z. Guan, A. Shakoor and D. Sun, \"Automated High-Productivity Microinjection System for Adherent Cells,\" in IEEE Robotics and Automation Letters, vol. 5, no. 2, pp. 1167-1174, April 2020, doi: 10.1109/LRA.2020.2965870.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8957314"
    },
    {
        "ref": "K. Meng, Y. Jia, H. Yang, F. Niu, Y. Wang and D. Sun, \"Motion Planning and Robust Control for the Endovascular Navigation of a Microrobot,\" in IEEE Transactions on Industrial Informatics, vol. 16, no. 7, pp. 4557-4566, July 2020, doi: 10.1109/TII.2019.2950052.",
        "url": "https://ieeexplore.ieee.org/abstract/document/8884750"
    },
    {
        "ref": "L. Zheng et al., \"3D Navigation Control of Untethered Magnetic Microrobot in Centimeter-Scale Workspace Based on Field-of-View Tracking Scheme,\" in IEEE Transactions on Robotics, vol. 38, no. 3, pp. 1583-1598, June 2022, doi: 10.1109/TRO.2021.3118205.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9623347"
    },
    {
        "ref": "L. Zheng, H. Ji and D. Sun, \"Automated Manipulation of Microswarms Without Real-Time Image Feedback Using Magnetic Tweezers,\" in IEEE/ASME Transactions on Mechatronics, vol. 27, no. 6, pp. 5712-5723, Dec. 2022, doi: 10.1109/TMECH.2022.3188536.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9833898"
    },
    {
        "ref": "H. Mo, R. Wei, X. Kong, Y. Zhai, Y. Liu and D. Sun, \"Data-Efficient Learning Control of Continuum Robots in Constrained Environments,\" in IEEE Transactions on Automation Science and Engineering, doi: 10.1109/TASE.2024.3357816.",
        "url": "https://ieeexplore.ieee.org/abstract/document/10440033"
    },
    {
        "ref": "W. Chen et al., \"Tele-Operated Oropharyngeal Swab (TOOS) Robot Enabled by TSS Soft Hand for Safe and Effective Sampling,\" in IEEE Transactions on Medical Robotics and Bionics, vol. 3, no. 4, pp. 1040-1053, Nov. 2021, doi: 10.1109/TMRB.2021.3123530.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9590555"
    },
    {
        "ref": "Ziyi Wang, Bo Lu, Xiaojie Gao, Yueming Jin, Zerui Wang, Tak Hong Cheung, Pheng Ann Heng, Qi Dou, Yunhui Liu, “Unsupervised feature disentanglement for video retrieval in minimally invasive surgery,” in Medical Image Analysis, Volume 75, 2022.",
        "url": "https://doi.org/10.1016/j.media.2021.102296"
    },
    {
        "ref": "P. Fiorini, K. Y. Goldberg, Y. Liu and R. H. Taylor, \"Concepts and Trends in Autonomy for Robot-Assisted Surgery,\" in Proceedings of the IEEE, vol. 110, no. 7, pp. 993-1011, July 2022, doi: 10.1109/JPROC.2022.3176828.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9805576"
    },
    {
        "ref": "J. Wu et al., \"Design, Control, and Experiments of a Novel Robotic Uterine Manipulator With the Motorized 3-DoF Manipulation Rod,\" in IEEE Transactions on Biomedical Engineering, vol. 70, no. 7, pp. 2203-2214, July 2023, doi: 10.1109/TBME.2023.3238762.",
        "url": "https://ieeexplore.ieee.org/abstract/document/10038654"
    },
    {
        "ref": "Lu, Y., Li, B., Chen, W., Yan, J., Cheng, S. S., Wang, J., ... & Liu, Y. H., “Simultaneous Estimation of Shape and Force along Highly Deformable Surgical Manipulators Using Sparse FBG Measurement,” 2024, arXiv preprint arXiv:2404.16952.",
        "url": "https://arxiv.org/abs/2404.16952"
    },
    {
        "ref": "W. Chen et al., \"Easy-to-Deploy Combined Nasal/Throat Swab Robot With Sampling Dexterity and Resistance to External Interference,\" in IEEE Robotics and Automation Letters, vol. 7, no. 4, pp. 9699-9706, Oct. 2022, doi: 10.1109/LRA.2022.3191964.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9833256"
    },
    {
        "ref": "B. Yang, B. Lu, W. Chen, F. Zhong and Y. -H. Liu, \"Model-Free 3-D Shape Control of Deformable Objects Using Novel Features Based on Modal Analysis,\" in IEEE Transactions on Robotics, vol. 39, no. 4, pp. 3134-3153, Aug. 2023, doi: 10.1109/TRO.2023.3269347.",
        "url": "https://ieeexplore.ieee.org/abstract/document/10122176"
    }
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