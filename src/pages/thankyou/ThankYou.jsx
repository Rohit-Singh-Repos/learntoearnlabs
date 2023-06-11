import React,{Suspense, lazy} from 'react';
import { Div } from 'components';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));

export const ThankYou = React.memo(() => {
    return (
        <Suspense fallback={<FallbackLoader/>}>
            <Div divClass="container mt-5">
                <Div divClass="row">
                    Hello
                </Div>
            </Div>
        </Suspense>
    )
})