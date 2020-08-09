import React from 'react';
import styles from 'theme/styles/example.module.scss';

const CSSModuleComponent = (): JSX.Element => (
    <div className={styles.div}>
        <h1 className={styles.title}>This is styled using css modules</h1>
    </div>
)

export default CSSModuleComponent;