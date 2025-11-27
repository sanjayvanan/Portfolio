import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/article.css";

const Article = (props) => {
    const { title, description, date, link } = props;
    const navigate = useNavigate();

    return (
        <>
            <div
                className="homepage-article clickable-article"
                onClick={() => navigate(link)}
            >
                <div className="homepage-article-content">
                    <div className="homepage-article-date">
                        |&nbsp;&nbsp;&nbsp;{date}
                    </div>

                    <div className="homepage-article-title">{title}</div>

                    <div className="homepage-article-description">
                        {description}
                    </div>

                    <div className="homepage-article-link achievement-label">
                        Personal Project
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
