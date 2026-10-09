// Firebase Initialization & Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUUsHQVjJUI4TU4hbNNoO0x3AM9UEOHyU",
    authDomain: "quizquest-3d82a.firebaseapp.com",
    projectId: "quizquest-3d82a",
    storageBucket: "quizquest-3d82a.firebasestorage.app",
    messagingSenderId: "258935637691",
    appId: "1:258935637691:web:3e6b5af0ae7a4f022ecb9e",
    measurementId: "G-FRCW084FTV"
};

// Initialize Firebase App safely with validation
if (typeof firebase !== "undefined") {
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        console.log("[SKQ Firebase] Firebase initialized successfully for project:", firebaseConfig.projectId);
    } catch (initErr) {
        console.error("[SKQ Firebase] Error during Firebase initialization:", initErr);
    }
} else {
    console.error("[SKQ Firebase] CRITICAL: Firebase SDK is not loaded. Check script tags in index.html.");
}

const auth = (typeof firebase !== "undefined" && typeof firebase.auth === "function") ? firebase.auth() : null;
const db = (typeof firebase !== "undefined" && typeof firebase.firestore === "function") ? firebase.firestore() : null;

if (db) {
    console.log("[SKQ Firebase] Firestore database instance (db) is ready.");
} else {
    console.error("[SKQ Firebase] Firestore database instance (db) failed to initialize.");
}
