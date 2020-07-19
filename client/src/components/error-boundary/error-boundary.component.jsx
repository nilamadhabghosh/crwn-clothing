import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: false };
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png'>
                        <ErrorImageText>
                            Sorry , we will be connect soon .
                     </ErrorImageText>
                    </ErrorImageContainer>
                </ErrorImageOverlay>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
