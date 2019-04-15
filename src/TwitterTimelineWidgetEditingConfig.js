import * as Scrivito from 'scrivito';


Scrivito.provideEditingConfig('TwitterTimelineWidget', {
    title: 'Twitter Timeline',
    attributes: {

        twitter: {
            title: 'Twitter Name',
            description: 'Name on Twitter e.g. "scrivito" '
        },
    },
    properties: [
        'twitter',
    ],

});