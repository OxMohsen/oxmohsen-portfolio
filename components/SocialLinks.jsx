import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
    return (
        <div className="btn-wrapper text-lg">
            {socialLinks.telegram && (
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="facebook"
                    href={socialLinks.telegram}
                    target="_blank"
                    rel="noopener"
                    aria-label="telegram"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-telegram" />
                    </span>
                </Button>
            )}
            {socialLinks.instagram && (
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="instagram"
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-instagram" />
                    </span>
                </Button>
            )}
            {socialLinks.github && (
                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="github"
                    href={socialLinks.github}
                    rel="noopener"
                    aria-label="Github"
                    target="_blank"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                    </span>
                </Button>
            )}
            {socialLinks.twitter && (
                <Button
                    className="btn-icon-only rounded-circle"
                    color="twitter"
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-twitter" />
                    </span>
                </Button>
            )}
        </div>
    );
};

export default SocialLinks;
