/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/About.module.css";
import { BsFolderFill, BsMarkdownFill } from "react-icons/bs";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const About = () => {
  const [showReact, setShowReact] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [showHtml, setShowHtml] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className={style.about}>
      <div className={style.skill_menu} onClick={(e) => setShowMenu(!showMenu)}>
        {" "}
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={style.left}>
        <motion.div
          className={style.left_number}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={style.text_fade_01}>20</span>
          <span className={style.text_fade_01}>21</span>
          <span className={style.text_fade_01}>22</span>
          <span className={style.text_fade_01}>23</span>
          <span className={style.text_fade_01}>24</span>
          <span className={style.text_fade_01}>25</span>
          <span className={style.text_fade_01}>26</span>
          <span className={style.text_fade_01}>27</span>
          <span className={style.text_fade_01}>28</span>
          <span className={style.text_fade_01}>29</span>
          <span className={style.text_fade_01}>30</span>
          <span className={style.text_fade_01}>31</span>
          <span className={style.text_fade_01}>32</span>
          <span className={style.text_fade_01}>33</span>
          <span className={style.text_fade_01}>34</span>
          <span className={style.text_fade_01}>35</span>
          <span className={style.text_fade_02}>36</span>
          <span className={style.text_fade_03}>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
          <span>46</span>
          <span>47</span>
          <span>48</span>
          <span>49</span>
          <span>50</span>
          <span>51</span>
          <span>52</span>
          <span className={style.text_fade_03}>53</span>
          <span className={style.text_fade_02}>54</span>
          <span className={style.text_fade_01}>55</span>
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 3,
              },
            },
          }}
        >
          <span className={style.ml_2}> /**</span>
          <span style={{ fontWeight: "bold" }}>* About me</span>
          <span>* Self-motivated and results-driven Software Engineer</span>
          <span>* with extensive experience in managing teams</span>
          <span>* and projects in the tech industry.</span>
          <span>* Proficient in multiple programming languages,</span>
          <span>* but my favorites are Python, GoLang and Rust.</span>
          <span>* Extensive background in Blockchain and ML technologies.</span>
          <span>* Skilled in developing and deploying fullstack applications,</span>
          <span>* with experience across various modern libraries and frameworks.</span>
          <span className={style.ml_2}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={style.right}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: "100px",
              opacity: 0,
            },
            visible: {
              x: "0",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 2,
              },
            },
          }}
        >
          <div className={style.right_container}>
            <h3>Explorer</h3>
            <div className={style.right_interest}>
              <span>
                <FiChevronDown />
              </span>
              <span style={{ marginLeft: "5px" }}>MY INTERESTS</span>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowReact(!showReact)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showReact ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(235,203,139)" }}>
                    <BsFolderFill />
                  </span>
                  <span> DevOps</span>
                </div>
                <AnimatePresence>
                  {showReact && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> automation.md
                      </p>
                      <p>
                        <BsMarkdownFill /> containerization.md
                      </p>
                      <p>
                        <BsMarkdownFill /> monitoring.md
                      </p>
                      <p>
                        <BsMarkdownFill /> infrastructure_as_code.md
                      </p>
                      <p>
                        <BsMarkdownFill /> cloud_computing.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowNext(!showNext)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showNext ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(136,192,208)" }}>
                    <BsFolderFill />
                  </span>
                  <span> CyberSecurity</span>
                </div>
                <AnimatePresence>
                  {showNext && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> threat_modeling.md
                      </p>
                      <p>
                        <BsMarkdownFill /> risk_assessment.md
                      </p>
                      <p>
                        <BsMarkdownFill /> vulnerability_scanning.md
                      </p>
                      <p>
                        <BsMarkdownFill /> incident_response.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowLibrary(!showLibrary)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showLibrary ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(191,97,106)" }}>
                    <BsFolderFill />
                  </span>
                  <span> Artificial Intelligence</span>
                </div>
                <AnimatePresence>
                  {showLibrary && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> machine_learning.md
                      </p>
                      <p>
                        <BsMarkdownFill /> deep_learning.md
                      </p>
                      <p>
                        <BsMarkdownFill /> natural_language_processing.md
                      </p>
                      <p>
                        <BsMarkdownFill /> computer_vision.md
                      </p>
                      <p>
                        <BsMarkdownFill /> neural_networks.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowHtml(!showHtml)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showHtml ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(163,190,140)" }}>
                    <BsFolderFill />
                  </span>
                  <span> Blockchain</span>
                </div>
                <AnimatePresence>
                  {showHtml && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> distributed_ledger_technology.md
                      </p>
                      <p>
                        <BsMarkdownFill /> cryptocurrencies.md
                      </p>
                      <p>
                        <BsMarkdownFill /> smart_contracts.md
                      </p>
                      <p>
                        <BsMarkdownFill /> decentralized_finance.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
