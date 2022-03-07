import React from 'react';
import '../style/footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-small-container">
                <div className="footer-small">
                    <h3>Ignore this footer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  sapien laoreet,
                    </p>
                </div>
                <div className="footer-small">
                    <h3>it contain dummy words</h3>
                    <p>consectetur adipiscing elit Lorem ipsum dolor sit amet,
                        et lorem sodales maximus.</p>
                </div>
            </div>
            <div className="footer-policy">
                <p>Copyright © 2022 ChristopherDaniel. All rights reserved.</p>
            </div>
        </div>

    );
}
export default Footer;
