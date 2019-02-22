import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


admin.initializeApp();

const env = functions.config();


import * as algoliasearch from 'algoliasearch';

// Initialize algolia client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('mgmt_user_search');

exports.indexUser = functions.firestore
    .document('users/{uid}')
    .onCreate((snap, context) => {
        const data = snap.data();
        const objectId = snap.id;

        // Add data to algolia index
        return index.addObject({
            objectId,
            ...data
        });
    });

exports.unIndexUser = functions.firestore
    .document('users/{uid}')
    .onDelete((snap, context) => {
        const objectId = snap.id;

        // Delete ID from index
        return index.deleteObject(objectId);
    });