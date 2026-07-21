import { WindowControls } from "#components"
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"

const Contact = ({ isMobile }) => {
    return (
        <div>
            <div id="window-header">
                <WindowControls target="contact" isMobile={isMobile} />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src="/images/lokesh.jpeg" alt="lokesh" className="w-20 rounded-full" />
                <h3>Let's Connect</h3>
                <p>Got an idea? A project or just want to say Hi? Drop me a message!</p>
                <p>lokesh.work@gmail.com</p>

                <ul>
                    {socials.map(({ id, icon, bg, link, text }) => (
                        <li key={id} style={{ backgroundColor: bg }} >
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;