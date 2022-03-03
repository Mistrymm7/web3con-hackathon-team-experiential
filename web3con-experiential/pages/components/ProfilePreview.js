import React from "react";
import { Carousel } from 'react-responsive-carousel';
import styles from "../../styles/ProfilePreview.module.css"

function ProfilePreview(props) {

    return (
        <div className={styles.container}>
            {/*Map images dynamically given prop https://www.npmjs.com/package/react-responsive-carousel*/}
            <div className={styles.carousel}>
                <Image
                    radius="md"
                    height={80}
                    src={null}
                    withPlaceholder
                />
            </div>
            <div className={styles.textContainer}>
                <Text>
                    {/* Wallet address*/}
                    0x123abcdefg
                </Text>
                <Text>

                </Text>
                <Text>
                    test3
                </Text>
            </div>
        </div>
    );

}

export default ProfilePreview;