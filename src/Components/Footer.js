import React from 'react';

export const Footer = () => {
        return (
            <div style={{backgroundColor: 'black'}}>
                <footer style={{color: 'white'}}>
                    <p style={{textAlign: 'left', marginTop:'8px'}}>
                        <code>
                            Built with React by Sirine Ben Gabsia
                        </code>
                    </p>

                    <small className="gray" >Copyright © 2021</small>
                </footer>
            </div>
        )

}

export default Footer
