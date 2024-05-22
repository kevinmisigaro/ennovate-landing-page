import React, { useState } from 'react';
import Joyride, { STATUS } from 'react-joyride';

const Onboarding = () => {
    const [run, setRun] = useState(true);
    const [steps, setSteps] = useState([
        {
            target: '.home',
            content: 'The homepage to our homepage!',
            placement: 'bottom',
        },
        {
            target: '.about',
            content: 'Learn more about us here.',
            placement: 'bottom',
        },
        {
            target: '.cart',
            content: 'View your cart here.',
            placement: 'bottom',
        },
    ]);

    const handleJoyrideCallback = (data) => {
        const { status, type } = data;

        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            setRun(false);
        }
    };

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous
            scrollToFirstStep
            showProgress
            showSkipButton
            callback={handleJoyrideCallback}
            styles={{
                options: {
                    zIndex: 10000,
                },
            }}
            locale={{
                back: 'Back',
                close: 'Close',
                last: 'Finish tour',
                next: 'Next',
                skip: 'Skip',
                open: 'Open the tour',
            }}
             />
    );
};

export default Onboarding;
