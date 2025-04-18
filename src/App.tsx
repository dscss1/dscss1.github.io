import './App.css';
import { TypeAnimation } from 'react-type-animation';

function App() {

    return (
        <div className="app-container">
            <div className="card">
                <h1 className="name">Привет, я DSCSS2 👋</h1>
                <h2 className="roles">
                    <TypeAnimation
                        sequence={[
                            'Java разработчик',
                            1500,
                            'Бэкенд разработчик',
                            1500,
                            'Фронтенд разработчик',
                            1500
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <p className="bio">
                    Я увлечён созданием надёжных веб-приложений. Люблю чистый код, современные технологии и интересные задачи.
                </p>

                <div className="skills">
                    <h3>Мои навыки</h3>
                    <div className="skills-table">
                        {['Java', 'CSS3', 'HTML5', 'JavaScript', 'MySQL', 'PHP', 'NodeJS', 'Git', 'Python', 'VueJs', 'TailwindCSS', 'React'].map(skill => (
                            <div className="skill-item" key={skill}>
                                <img
                                    src={`https://github.com/devicons/devicon/raw/refs/heads/master/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`}
                                    title={skill}
                                    alt={skill}
                                    width="40"
                                    height="40"
                                />
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="github-contributions">
                    <h3>Моя активность на GitHub</h3>
                    <img
                        src="https://raw.githubusercontent.com/dscss1/dscss1/output/github-contribution-grid-snake-dark.svg"
                        alt="GitHub activity"
                        width="500px"
                    />
                </div>
                <br />

                <a href="tg:dscss1" className="contact-button">
                    Связаться со мной
                </a>
            </div>
        </div>
    );
}

export default App;
