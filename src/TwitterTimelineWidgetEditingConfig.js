import * as Scrivito from 'scrivito';


Scrivito.provideEditingConfig('TwitterTimelineWidget', {
    title: 'Twitter Timeline',
    attributes: {

        twitter: {
            title: 'Twitter Name',

        },
    },
    properties: [
        'twitter',
    ],

});