import { useState } from "react";
import "./TwFollowCard.css";

export default function TwFollowCard({ nombreUsiario, nombre, initialLoSigue }) {
    const [loSigue, setLoSigue] = useState(initialLoSigue);
    const [hover, setHover] = useState(false);
    const [initialHover, setInitialHover] = useState(false);

    const buttonText = loSigue
        ? (hover && initialHover ? "Dejar de seguir" : "Siguiendo")
        : "Seguir";

    const buttonClassName = loSigue
        ? `tw-followCard-button is-following ${hover && initialHover ? "btn-red" : ""}`
        : "tw-followCard-button";

    const buttonClick = () => {
        if (loSigue) {
            setLoSigue(false);
            setInitialHover(false);
        } else {
            setLoSigue(true);
            setInitialHover(false);
        }
    };

    const handleMouseEnter = () => {
        if (loSigue) {
            setInitialHover(true);
        }
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${nombreUsiario}`}
                    alt={`Avatar de ${nombre}`}
                />
                <div className="tw-followCard-info">
                    <strong>{nombre}</strong>
                    <span className="tw-followCard-infoUserName">
                        {`@${nombreUsiario}`}
                    </span>
                </div>
            </header>
            <aside>
                <button
                    className={buttonClassName}
                    onClick={buttonClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {buttonText}
                </button>
            </aside>
        </article>
    );
}

/* 
// forma simple
import { useState } from "react";
import "./TwFollowCard.css";

export default function TwFollowCard({ nombreUsiario, nombre }) {
    const [loSigue, setLoSigue] = useState(false);
    const [hover, setHover] = useState(false);

    const buttonText = loSigue
        ? (hover ? "Dejar de seguir" : "Siguiendo")
        : "Seguir";

    const buttonClassName = loSigue
        ? "tw-followCard-button is-following"
        : "tw-followCard-button";

    const buttonClick = () => {
        setLoSigue(!loSigue);
    };

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${nombreUsiario}`}
                    alt={`Avatar de ${nombre}`}
                />
                <div className="tw-followCard-info">
                    <strong>{nombre}</strong>
                    <span className="tw-followCard-infoUserName">
                        {`@${nombreUsiario}`}
                    </span>
                </div>
            </header>
            <aside>
                <button
                    className={buttonClassName}
                    onClick={buttonClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {buttonText}
                </button>
            </aside>
        </article>
    );
} 
*/